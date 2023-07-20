import React from 'react'

const XIcon = () => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<rect width='16' height='16' rx='8' fill='#00AAA6' />
			<path
				d='M11.8369 11.0965L8.65217 7.91166L11.8369 4.72681C11.9186 4.64509 11.9354 4.52775 11.8746 4.46699L11.3571 3.94841C11.2953 3.88659 11.179 3.90336 11.0973 3.98612L7.91256 7.17097L4.72678 3.98612C4.64506 3.9044 4.52773 3.88764 4.46697 3.94841L3.9484 4.46699C3.88659 4.5288 3.90336 4.64509 3.98612 4.72681L7.17085 7.91166L3.98612 11.0965C3.9044 11.1782 3.88764 11.2956 3.9484 11.3563L4.46592 11.8739C4.52773 11.9357 4.64402 11.9189 4.72573 11.8361L7.91046 8.6513L11.0952 11.8361C11.1769 11.9179 11.2942 11.9346 11.355 11.8739L11.8725 11.3563C11.9343 11.2945 11.9176 11.1782 11.8348 11.0965H11.8369Z'
				fill='white'
			/>
		</svg>
	)
}

export default React.memo(XIcon)
