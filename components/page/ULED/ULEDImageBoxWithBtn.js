import React from 'react'

// image
import Image from 'public/assets/images/4k-uled/jargo.jpg'

function ULEDImageBoxWithBtn({ data: { structure } }) {
	return (
		<section>
			<div className='jarg-section pt-0'>
				<div className='container-fluid px-lg-20'>
					<div className='row'>
						<div className='col-12'>
							<img
								src={structure?.image?.src}
								alt={structure?.image?.alt}
								className='m-auto'
								width='100%'
							/>
							<div className='jarg-switch'>
								<span className='jarg-on active'>JARGON</span>
								<input
									type='checkbox'
									name='jarg-switch'
									className='switch-button'
									id='jarg-switch'
								/>
								<label htmlFor='jarg-switch'></label>
								<span className='jarg-off'>JARGOFF</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ULEDImageBoxWithBtn
