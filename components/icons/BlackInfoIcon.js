import React from 'react'

const BlackInfoIcon = ({ color = '#0F172A' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='40'
			height='40'
			viewBox='0 0 40 40'
			fill='none'>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20ZM20 12.3077C20.8496 12.3077 21.5385 12.9965 21.5385 13.8462V21.5385C21.5385 22.3881 20.8496 23.0769 20 23.0769C19.1504 23.0769 18.4615 22.3881 18.4615 21.5385V13.8462C18.4615 12.9965 19.1504 12.3077 20 12.3077ZM20 29.2308C20.8496 29.2308 21.5385 28.542 21.5385 27.6923C21.5385 26.8427 20.8496 26.1538 20 26.1538C19.1504 26.1538 18.4615 26.8427 18.4615 27.6923C18.4615 28.542 19.1504 29.2308 20 29.2308Z'
				fill={color}
			/>
		</svg>
	)
}

export default BlackInfoIcon
