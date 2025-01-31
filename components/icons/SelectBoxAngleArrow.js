import React from 'react'

const SelectBoxAngleArrow = ({ color = 'white' }) => {
	return (
		<svg
			width='16'
			height='6'
			viewBox='0 0 10 5'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M0.141723 0.129218C0.313507 -0.0274098 0.582323 -0.0416487 0.771749 0.086501L0.826019 0.129218L5 3.93471L9.17398 0.129218C9.34577 -0.0274098 9.61458 -0.0416487 9.80401 0.086501L9.85828 0.129218C10.0301 0.285845 10.0457 0.530941 9.90513 0.703654L9.85828 0.753135L5.34215 4.87078C5.17036 5.02741 4.90155 5.04165 4.71212 4.9135L4.65785 4.87078L0.141723 0.753135C-0.0472408 0.580845 -0.0472408 0.301508 0.141723 0.129218Z'
				fill={color}
				stroke={color}
				strokeWidth={1}
			/>
		</svg>
	)
}

export default React.memo(SelectBoxAngleArrow)
