import React from 'react'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/HighDynamicContrast.module.scss'
import Image from 'next/image'
import {
	ReactCompareSlider,
	ReactCompareSliderImage
} from 'react-compare-slider'
import headingIcons from 'public/assets/uledx-assets/images/icons/dynamic-contrast-icons@3x.webp'
import tvFrame from 'public/assets/uledx-assets/images/product/slide-tv-frame@3x.webp'

const HighDynamicContrast = () => {
	return (
		<section className={clsx(styles.highDynamicContrast)}>
			<div className={clsx(styles.wrapper)}>
				<div className={clsx('container')}>
					<div className={clsx('row')}>
						<div className={clsx('col', styles.intro)}>
							<p className={'preheader'}>CINEMATIC EXPERIENCE</p>
							<h2>
								<span className={styles.high}>High</span> brightness
								<br /> <span className={styles.dynamic}>Dynamic</span> contrast
								<br /> <span className={styles.range}>Range</span>
							</h2>
							<img
								src={headingIcons.src}
								alt='Dolby Vission IQ, Dolby Visions Atmos'
								width={338}
								className='d-lg-none'
							/>
						</div>
					</div>

					<div className={clsx('row justify-content-center')}>
						<div className={clsx('col-12 col-lg-10', styles.sliderWrapper)}>
							<ReactCompareSlider
								itemOne={
									<ReactCompareSliderImage
										src='/assets/uledx-assets/images/product/slide-1@3x.webp'
										srcSet='/assets/uledx-assets/images/product/slide-1@3x.webp'
										alt='High Contrast Range'
									/>
								}
								itemTwo={
									<ReactCompareSliderImage
										src='/assets/uledx-assets/images/product/slide-2@3x.webp'
										srcSet='/assets/uledx-assets/images/product/slide-2@3x.webp'
										alt='Low Contrast Range'
									/>
								}
							/>
							<div className={styles.sliderFrame}>
								<img src={tvFrame.src} alt='' width={'100%'} />
							</div>
						</div>
					</div>

					<div className={clsx('row', styles.content)}>
						<div className={clsx('col-12 col-md-6', styles.copy)}>
							<p className='p--small'>
								The ULED X adds HDR10+ Adaptive and Dolby Vision IQ to its
								already long list of supported HDR formats. These new formats
								consider environment lighting making HDR more accurate at
								depicting how dark or bright the lighting is within the room
								your ULED X is in.
							</p>
						</div>
						<div className={clsx('col-12 col-md-6', styles.copy)}>
							<p className='p--small'>
								<strong>Dolby Vision™ HDR, HDR10 & HDR10+</strong>
								<br />
								<br />
								The image technology from cinemas, now brought directly to your
								home, provides amazing realism that you’ll experience like never
								before.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HighDynamicContrast