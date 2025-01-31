import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import 'swiper/css'

const ExtendedWarrantyProductsSlider = ({ data: { structure } }) => {
	const categories = structure?.list?.value[0]?.category?.items
	const [centeredNumber, setCenteredNumber] = useState(1)

	useEffect(() => {
		let centerNumber = structure?.list?.value.length / 2
		if (centerNumber % 1 != 0) {
			setCenteredNumber(Math.floor(centerNumber))
		} else {
			setCenteredNumber(centerNumber)
		}
	}, [])

	return (
		<section>
			<div className='extended-warranty-products-slider'>
				<div className='support-products'>
					<h3 className='fs-base fw-normal text-center mb-8 container-fluid'>
						Select a product catagory or scroll down to learn more
					</h3>
					<Swiper
						initialSlide={centeredNumber}
						spaceBetween={35}
						freeMode={true}
						slidesPerView={'auto'}
						centeredSlides={false}
						grabCursor={true}
						className='support-products-slider '>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide key={index} className='slider-item'>
								<div>
									<div className='slider-image'>
										<img src={item?.image?.src} alt={item?.image?.alt} />
									</div>

									<Link
										target={
											structure?.link?.target
												? structure?.link?.target
												: '_self'
										}
										href={`${structure?.link?.value}?category_id=${item?.category?.value}`}>
										<a
											target={
												structure?.link?.target
													? structure?.link?.target
													: '_self'
											}
											className='slider-title n-btn outline-black medium'>
											{
												item?.category?.items.find(
													catItem => item?.category?.value == catItem.id
												)?.name
											}
											{structure?.link?.target === '_blank' && (
												<img
													style={{ marginLeft: '10px' }}
													src={OpenPageOnNewTab.src}
												/>
											)}
										</a>
									</Link>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default ExtendedWarrantyProductsSlider
