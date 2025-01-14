import Link from 'next/link'
import React, { useState } from 'react'
import DismissIcon from '../../icons/DismissIcon'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import { useWindowSize } from 'hooks/useWindowSize'

function HeaderNotification({ data }) {
	const [width] = useWindowSize()
	const [notificationDismiss, serNotificationDismiss] = useState(true)
	return (
		<div
			style={{ background: data?.background_color }}
			className={`container-fluid home-top-advertisement justify-content-start justify-content-sm-center ${
				notificationDismiss ? 'd-flex' : 'd-none'
			}`}>
			<Link
				target={data?.target ? data?.target : '_self'}
				href={data?.link ? data?.link : '/'}>
				<a
					target={data?.target ? data?.target : '_self'}
					style={{
						color: data?.text_color,
						paddingTop: '3px',
						marginLeft: width <= 768 ? '30px' : '0px',
						marginRight: width <= 768 ? '30px' : '0px'
					}}>
					{data?.text}

					{data?.target === '_blank' && (
						<img style={{ marginLeft: '10px' }} src={OpenPageOnNewTab.src} />
					)}
				</a>
			</Link>
			<button onClick={() => serNotificationDismiss(false)}>
				<span
					style={{ color: data?.text_color, marginTop: '2px' }}
					className={'me-3 d-none d-md-block'}>
					Dismiss
				</span>
				<DismissIcon
					color={data?.text_color}
					background={data?.background_color}
				/>
			</button>
		</div>
	)
}

export default HeaderNotification
