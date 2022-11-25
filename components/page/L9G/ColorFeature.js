import React from 'react'

const ColorFeature = ({ data: { structure } }) => {
	return (
		<section className='l9g'>
			<div className='color-feature'>
				<div className='px-md-20 px-4 top_text'>
					<p
						className='fs-7 fs-md-3 fw-light mb-0 py-10 py-md-20'
						dangerouslySetInnerHTML={{ __html: structure?.text?.value }}></p>
				</div>
				<div className='row mx-0 justify-content-between'>
					<div className='col-12 col-md-6 px-4 pr-md-3 ps-md-0 mb-4 mb-md-0 block-video'>
						<video
							width='100%'
							height='100%'
							muted={true}
							autoPlay={true}
							loop={true}
							playsInline={true}>
							<source src={structure?.leftVideo?.value} />
						</video>
						<div className='video-content'>
							<div
								className=' aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'>
								<div
									className='text-white fs-7 fs-md-3  fw-bold'
									dangerouslySetInnerHTML={{
										__html: structure?.leftTitle?.value
									}}></div>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-6 px-4 ps-md-3 pe-md-0 mb-4 mb-md-0 block-video'>
						<video
							width='100%'
							height='100%'
							muted={true}
							autoPlay={true}
							loop={true}
							playsInline={true}>
							<source src={structure?.rightVideo?.value} />
						</video>
						<div className='video-content'>
							<div
								className=' aos-init aos-animate'
								data-aos='fade-zoom-in'
								data-aos-duration='1000'>
								<div
									className='text-white fs-7 fs-md-3  fw-bold'
									dangerouslySetInnerHTML={{
										__html: structure?.rightTitle?.value
									}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ColorFeature
