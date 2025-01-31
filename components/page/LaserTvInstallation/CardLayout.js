import React from 'react'

const CardLayout = ({ title, icon, children }) => {
	return (
		<div className='card_layout'>
			<div className='d-flex justify-content-start align-items-center mb-5 mb-md-8 px-6 px-md-9 py-5'>
				{icon}
				<h4 className='title'>{title}</h4>
			</div>
			<div>{children}</div>
		</div>
	)
}

export default CardLayout
