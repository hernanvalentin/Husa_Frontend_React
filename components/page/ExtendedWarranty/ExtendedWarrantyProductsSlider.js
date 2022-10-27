import React, { useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'

const ExtendedWarrantyProductsSlider = ({ data }) => {
	const [searchTerm, setSearchTerm] = useState('')

	const structure = {
		list: {
			value: [
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg'
					},
					link: {
						value: '/',
						title: 'Televisions'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg'
					},
					link: {
						value: '/',
						title: 'Televisions'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg'
					},
					link: {
						value: '/',
						title: 'Televisions'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg'
					},
					link: {
						value: '/',
						title: 'Televisions'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg'
					},
					link: {
						value: '/',
						title: 'Televisions'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg'
					},
					link: {
						value: '/',
						title: 'Televisions'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg'
					},
					link: {
						value: '/',
						title: 'Televisions'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg'
					},
					link: {
						value: '/',
						title: 'Televisions'
					}
				},
				{
					image: {
						src: 'https://assets.hisense-usa.com/assets/ProductCategorySupportSVGs/8d966a77dd/televisions.svg'
					},
					link: {
						value: '/',
						title: 'Televisions'
					}
				}
			]
		}
	}
	return (
		<section>
			<div className='extended-warranty-products-slider'>
				<div className='support-products'>
					<h3 className='fs-base fw-normal text-center mb-8 container-fluid'>
						Select a product catagory or scroll down to learn more
					</h3>
					<Swiper
						navigation={false}
						pagination={false}
						spaceBetween={35}
						slidesPerView={'auto'}
						centeredSlides={true}
						grabCursor={true}
						className='support-products-slider'>
						{structure?.list?.value.map((item, index) => (
							<SwiperSlide key={index} className='slider-item'>
								<div>
									<img
										src={item?.image?.src}
										alt={item?.image?.alt}
										title={item?.image?.title}
										className='slider-image'
									/>
									<a
										href={item?.link?.value}
										className='slider-title n-btn outline-black'>
										{item?.link?.title}
									</a>
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
