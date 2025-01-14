import CopyNewsIcon from 'components/icons/CopyNewsIcon'
import FacebookIcon from 'components/icons/FacebookIcon'
import FacebookNewsRoomIcon from 'components/icons/FacebookNewsRoomIcon'
import MailNewsIcon from 'components/icons/MailNewsIcon'
import TwitterNewsRoomIcon from 'components/icons/TwitterNewsRoomIcon'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import moment from 'moment'

const NewsIntro = ({ data, pim }) => {
	let { structure } = data
	const [pageUrl, setPageUrl] = useState()
	const [customData, setCustomDate] = useState('')

	useEffect(() => {
		setPageUrl(window.location.href)
		if (pim?.published_at)
			setCustomDate(
				moment(pim?.published_at).format('MMMM DD YYYY').split(' ')[0] +
					' ' +
					moment(pim?.published_at).format('MMMM DD YYYY').split(' ')[1] +
					', ' +
					moment(pim?.published_at).format('MMMM DD YYYY').split(' ')[2]
			)
		else setCustomDate(structure?.data?.value)
	}, [])

	return (
		<div className=' container news_intro_box'>
			<div>
				<h6>{structure?.subject?.value}</h6>
				<h3>{structure?.title?.value}</h3>
				<span>{customData}</span>
				<div>
					<span>Share Article</span>
					<ul>
						<li>
							<a
								href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
								target='_blank'>
								<FacebookNewsRoomIcon />
							</a>
						</li>
						<li>
							<a
								target='_blank'
								href={'https://twitter.com/intent/tweet?url=' + encodeURIComponent(pageUrl)}>
								<TwitterNewsRoomIcon />
							</a>
						</li>{' '}
						<li>
							<a
								href={`mailto:?subject=${structure?.title?.value}&body=${pageUrl}`}>
								<MailNewsIcon />
							</a>
						</li>
						<li>
							<button
								onClick={() => {
									navigator.clipboard.writeText(pageUrl)
									toast.success('URL link copied successfully')
								}}>
								<CopyNewsIcon />
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NewsIntro
