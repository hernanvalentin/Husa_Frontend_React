import React, { useState } from 'react'
import { useEffect } from 'react'

import { SwiperSlide, Swiper, useSwiper } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const SeasonUpgradeHeaderBanner = ({ data }) => {
	const { structure } = data
	const [content, setContent] = useState(null)
	const splideRef = useRef()
	const router = useRouter()

	useEffect(() => {
		setContent(structure)
		if (router.asPath.includes(data?.name + data?.id)) {
			setTimeout(() => {
				ref.current.scrollIntoView()
			}, 1000)
		}
	}, [])

	useEffect(() => {
		splideRef.current.splide.Components.Autoplay.play()
	}, [content])

	return (
		<section>
			<div
				id={data?.name + data?.id}
				className='season_upgrade_header_banner'
				style={{ backgroundColor: structure?.backgroundColor?.value }}>
				{structure?.link?.value ? (
					<Link
						href={structure?.link?.value}
						target={
							structure?.link?.target ? structure?.link?.target : '_self'
						}>
						<a
							target={
								structure?.link?.target ? structure?.link?.target : '_self'
							}
							className='py-md-6 py-4'>
							<Splide
								ref={splideRef}
								options={{
									type: 'loop',
									autoplay: true,
									arrows: false,
									pagination: false,
									clones: 8,
									gap: '48px',
									perPage: 1,
									pauseOnHover: false,
									speed: 1500,
									interval: 1500,
									easing: 'linear'
								}}>
								{structure?.list?.value.map((_item, index) => (
									<SplideSlide key={index} className='item'>
										<img src={_item.image.src} alt='featured' />
									</SplideSlide>
								))}
							</Splide>
						</a>
					</Link>
				) : (
					<div className='py-md-6 py-4'>
						<Splide
							ref={splideRef}
							options={{
								type: 'loop',
								autoplay: true,
								arrows: false,
								pagination: false,
								clones: 8,
								gap: '48px',
								perPage: 1,
								pauseOnHover: false,
								speed: 1500,
								interval: 1500,
								easing: 'linear'
							}}>
							{structure?.list?.value.map((_item, index) => (
								<SplideSlide key={index} className='item'>
									<img src={_item.image.src} alt='featured' />
								</SplideSlide>
							))}
						</Splide>
					</div>
				)}
			</div>
		</section>
	)
}

export default SeasonUpgradeHeaderBanner
