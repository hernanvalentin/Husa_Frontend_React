import React from 'react'

// image
import Image from 'public/assets/images/more-tv/hisense-sign.png'

function MoreTvNewHisensePromise() {
	return (
		<section>
			<div className='blue-bg'>
				<div className='container-fluid bg-bubble-effect px-md-8 py-20'>
					<div className='row align-items-end'>
						<div className='col-12 col-md-6 mb-20'>
							<h2 className='fs-3hx fw-normal text-white mb-15'>
								The Hisense Promise
							</h2>
							<h3 className='fs-2 text-white mb-10'>
								Great TVs. Great Prices. No B.S.
							</h3>
							<p className='fs-5 text-white fw-normal mb-7'>
								Sure, we may not be the biggest or the most well known but
								there’s one thing you can count on – Hisense will always strive
								to make the latest technologies available to all.
							</p>
							<img src={Image.src} alt='featured image' />
						</div>
						<div className='col-12 col-md-6'>
							<div className='video-container m-0'>
								<div className='video-wrapper'>
									<iframe
										width='100%'
										height='100%'
										src='https://www.youtube.com/embed/9EjXJfswb0s'
										title='YouTube video player'
										frameborder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTvNewHisensePromise