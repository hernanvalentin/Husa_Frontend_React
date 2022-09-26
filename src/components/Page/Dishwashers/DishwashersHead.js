import React from 'react'

// image
import Image from './../../../../public/assets/images/all-dishwashers/dishwasher.jpg'

function DishwashersHead() {
	return (
		<section>
			<div class='heading'>
				<img
					src={Image.src}
					alt='smart tv platforms'
					width='100%'
					height='100%'
				/>
				<div class='heading-text'>
					<h1 class='fw-normal fs-3x'>Dishwashers</h1>
				</div>
			</div>
		</section>
	)
}

export default DishwashersHead
