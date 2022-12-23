import Link from 'next/link'
import React from 'react'

function ContactUsChat({ data }) {
	let { structure } = data

	const chatHandler = () => {
		if (document.querySelector('.velaro-custom-launcher-frame iframe')) {
			let iframe = document.querySelector(
				'.velaro-custom-launcher-frame iframe'
			)
			let innerDoc = iframe.contentWindow.document.querySelector(
				'.velaro-custom-launcher'
			)
			innerDoc.click()
		}
	}
	return (
		<section className='contact_us_chat '>
			<div className='container'>
				<div className='contact_us_chat_content'>
					<div>
						<h5 className='mb-15 text-center text-md-start'>
							{structure?.title?.value}
						</h5>
						<h6>{structure?.subtitle?.value}</h6>
					</div>
					<button
						onClick={chatHandler}
						className='btn btn-outline-dark fw-bold rounded-5 py-3 px-4 mt-10 mt-md-0'>
						{structure?.link?.title}
					</button>
				</div>
			</div>
		</section>
	)
}

export default ContactUsChat
