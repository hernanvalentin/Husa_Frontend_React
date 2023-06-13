import React, { useRef, useLayoutEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import clsx from 'clsx'
import styles from 'styles/components/modules/ULEDX/CineStageX.module.scss'
import { Parallax } from 'react-scroll-parallax'
import { useMediaQuery } from 'react-responsive'
import ring1 from 'public/assets/uledx-assets/images/icons/ring1@2x.png'
import ring2 from 'public/assets/uledx-assets/images/icons/ring2@2x.png'
import ring3 from 'public/assets/uledx-assets/images/icons/ring3@2x.png'
import screenBg from 'public/assets/uledx-assets/images/product/cine-x-screen@3x.png'
import SpecCard from '../SpecCard'

const CineStageX = ({}) => {
	const [ref, inView] = useInView()
	const isMobileTablet = useMediaQuery({ query: '(max-width: 768px)' })

	const cardsLeft = [
		{
			background: '/assets/uledx-assets/images/cards/cinestagex/1@3x.webp',
			title: 'Top Firing Speakers'
		},
		{
			background: '/assets/uledx-assets/images/cards/cinestagex/3@3x.webp',
			title: 'BACKSIDE SUBWOOFER'
		}
	]

	const cardsRight = [
		{
			background: '/assets/uledx-assets/images/cards/cinestagex/2@3x.webp',
			title: 'SIDE BEZEL SPEAKERS',
			precentageHeight: isMobileTablet ? 110.5 : 142.6,
			align: 'top'
		},
		{
			background: '/assets/uledx-assets/images/cards/cinestagex/4@3x.webp',
			title: 'BOTTOM SPEAKERS'
		}
	]

	return (
		<section className={clsx(styles.cineStageX)}>
			<div className={clsx('container')}>
				{/* Heading and intro */}
				<div className={clsx('row justify-content-between')}>
					<div className={clsx('col-12 col-md-7 col-xl-6', styles.intro)}>
						<p className={'preheader'} style={{ color: '#d5b879' }}>
							CINEMA-LEVEL SURROUND AUDIO
						</p>
						<h2>
							CineStage X <br /> Surround
						</h2>

						<p style={{ color: '#c9c8c8', fontWeight: 300 }}>
							With multi-channel surround and WiSA Ready, UX offers a cinematic
							experience that serves both your ears and your eyes. UX actives
							all your senses and unleashes your audiovisual experience to the
							fullest. You can hear the explosion of the rock as vivid as you
							are right in the scene.
						</p>
					</div>

					{/* rings */}
					<div
						className={clsx(
							'col-md-4 col-xl-6',
							styles.rings,
							inView ? 'fadeIn' : null
						)}
						ref={ref}>
						<img
							src={ring1.src}
							alt=''
							width={294}
							className={clsx(
								'mx-auto d-none d-md-block',
								inView ? 'pulse' : null
							)}
							style={{ animationDelay: '2s' }}
						/>
						<img
							src={ring3.src}
							alt=''
							width={214}
							className={clsx(
								'mx-auto d-none d-md-block',
								inView ? 'pulse' : null
							)}
							style={{ animationDelay: '1s' }}
						/>
						<img
							src={ring2.src}
							alt=''
							width={150}
							className={clsx('mx-auto d-none d-md-block')}
						/>
					</div>
				</div>

				<img
					src={screenBg.src}
					width={'100%'}
					alt='CineStage X Surround'
					className={clsx(styles.productImage, 'd-none d-md-block')}
				/>

				{/* Cards */}
				<div className={clsx(styles.cardWrapper)}>
					<div className={clsx(styles.cardInner, styles.cardInnerLeft)}>
						<Parallax speed={isMobileTablet ? 0 : 10}>
							{cardsLeft.map((card, index) => {
								return (
									<SpecCard
										key={card.title}
										background={card.background}
										title={card.title}
										percentageHeight={card.precentageHeight}
										index={index}
										align={card.align}
									/>
								)
							})}
						</Parallax>
					</div>

					<div className={clsx(styles.cardInner, styles.cardInnerRight)}>
						<Parallax speed={isMobileTablet ? 0 : -10}>
							{cardsRight.map((card, index) => {
								return (
									<SpecCard
										key={card.title}
										background={card.background}
										title={card.title}
										percentageHeight={card.precentageHeight}
										index={index}
										align={card.align}
									/>
								)
							})}
						</Parallax>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CineStageX