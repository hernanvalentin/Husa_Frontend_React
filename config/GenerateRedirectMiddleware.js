const axios = require('axios')
require('dotenv').config()
const fs = require('fs')
const RedirectsController = require('../controller/RedirectController.js')

const getRedirects = (async () => {
	console.log('send redirect request')
	try {
		let response = await axios.get(`${process.env.CXM_API_ROUTE}/getRedirects`)
		RedirectsController(response.data.data)
		generateMiddleware(response.data.data)
	} catch (error) {
		console.log(error)
	}
})()

const generateMiddleware = _redirects => {
	fs.writeFile(`./middleware.js`, generateContent(_redirects), err => {
		if (err) {
			console.error(err)
		}
	})
}

const generateContent = _redirects => {
	const routes = _redirects.map(item => item.source_url && item.source_url)
	return `
	    import { NextResponse } from 'next/server'
	    import RedirectData from 'utils/redirects.json'
	    let redirectedUrl = RedirectData.map(item => item?.source_url && item)

	    export function middleware(request) {
	    	if (
	    		redirectedUrl.find(item => item?.source_url === request.nextUrl.pathname)
	    	) {
	    		const url = new URL(
	    			redirectedUrl.find(
	    				item => item?.source_url === request.nextUrl.pathname
	    			).redirect_url,
	    			request.url
	    		)
	    		return NextResponse.redirect(url)
	    	}
	    }

	    export const config = {
	    	matcher: ${JSON.stringify(routes.filter(item => item))}
	    }
	`
}