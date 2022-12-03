import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import Link from 'next/link'

const ProductPackagesSlider = ({ pim, data }) => {
	pim = {
		...pim,
		packages: [
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			},
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			},
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			},
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			},
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			},
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			},
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			},
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			},
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			},
			{
				image:
					'https://assets.hisense-usa.com/assets/ContentBuilderImages/43220101e7/KSP9__ScaleMaxWidthWzMwNDhd.png-7gxp4d.png',
				title: 'Kitchen Suite: Package 1',
				link: {
					value: '/',
					title: 'Learn More'
				}
			}
		]
	}
	return (
		<section className='package_types_slider'>
			<article className='article'>
				<h2>Kitchen Appliance Packages</h2>
			</article>
			<div>
				<Swiper
					spaceBetween={28}
					modules={[Pagination]}
					pagination={true}
					centeredSlides={true}
					grabCursor={true}
					draggable={true}
					slidesPerView={'auto'}>
					{pim &&
						pim?.packages.map((item, index) => (
							<SwiperSlide
								aria-hidden='true'
								className='item'
								key={index}
								tabIndex={'-1'}
								aria-label={`slide-${index + 1}`}>
								<div>
									<img src={item?.image} alt={item?.title} />
									<h5>{item?.title}</h5>
									<Link href={item?.link?.value}>
										<a>{item?.link?.title}</a>
									</Link>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</section>
	)
}

export default ProductPackagesSlider