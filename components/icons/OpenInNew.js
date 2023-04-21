import React from 'react'

const OpenInNew = ({ color = '#fff' }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16'
			height='15'
			viewBox='0 0 16 15'
			fill='none'>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M2.25 3.5C1.83579 3.5 1.5 3.83579 1.5 4.25V12.75C1.5 13.1642 1.83579 13.5 2.25 13.5H10.75C11.1642 13.5 11.5 13.1642 11.5 12.75V8.75C11.5 8.33579 11.8358 8 12.25 8C12.6642 8 13 8.33579 13 8.75V12.75C13 13.9926 11.9926 15 10.75 15H2.25C1.00736 15 0 13.9926 0 12.75V4.25C0 3.00736 1.00736 2 2.25 2H7.25C7.66421 2 8 2.33579 8 2.75C8 3.16421 7.66421 3.5 7.25 3.5H2.25Z'
				fill={color}
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M4.19385 10.7532C4.47175 11.0603 4.94603 11.0841 5.25319 10.8062L14.5 2.43999V5.25C14.5 5.66421 14.8358 6 15.25 6C15.6642 6 16 5.66421 16 5.25V0.75C16 0.335787 15.6642 0 15.25 0H10.75C10.3358 0 10 0.335787 10 0.75C10 1.16421 10.3358 1.5 10.75 1.5H13.3032L4.24682 9.69385C3.93966 9.97175 3.91595 10.446 4.19385 10.7532Z'
				fill={color}
			/>
		</svg>
	)
}

export default OpenInNew