import React, { useEffect } from 'react'
import CustomImage from 'components/common/CustomImage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import Link from 'next/link'
import { GetSingleProduct } from 'services/Product'
import { useRouter } from 'next/router'
import BlackFridayProductsItemDialog from './BlackFridayProductsItemDialog'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { RouteHandler } from 'utils/routeHandler'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
import ModalChanelAdviser from '../Product/ModalChanelAdviser'

const BlackFridayProductsItem = ({ data, products }) => {
	const [sortedData, setSortedData] = useState({})
	const [showDialgo, setShowDialog] = useState(false)
	const [product, setProduct] = useState(null)
	const [activeSerie, setActiveSerie] = useState(null)
	const [valid, setValid] = useState(false)
	const [url, setUrl] = useState(null)
	const router = useRouter()

	const getProduct = async _id => {
		const response = await GetSingleProduct(router, _id)
		setProduct(response?.data?.data)
	}
	useEffect(() => {
		setSortedData({
			...data,
			series: data?.series.sort(
				(a, b) =>
					parseFloat(b.title.slice(0, -1)) - parseFloat(a.title.slice(0, -1))
			)
		})
	}, [data])

	useEffect(() => {
		if (sortedData?.series && sortedData?.series.length > 0) {
			for (let element of sortedData?.series) {
				if (element?.price) {
					if (products?.series?.length) {
						products?.series[0]?.values?.forEach(item => {
							item?.productsList[0]?.id === element?.id &&
								setProduct(item?.productsList[0])
						})
					} else {
						setProduct(products)
					}

					setActiveSerie(element)
					break
				}
			}
		}
	}, [sortedData])

	const checkValid = () => {
		let isValid = false
		sortedData?.series &&
			sortedData?.series.length > 0 &&
			sortedData?.series.forEach(item => {
				if (item.price !== null && item.discount !== null) isValid = true
			})
		return isValid
	}

	useEffect(() => {
		if (checkValid()) setValid(true)
		setUrl(RouteHandler(activeSerie?.id, 'product'))
	}, [activeSerie])

	const changeTvSizeHandler = _size => {
		products?.series[0]?.values?.forEach(item => {
			item?.productsList[0]?.id === _size?.id &&
				setProduct(item?.productsList[0])
		})
	}

	return (
		<>
			{valid ? (
				<figure className='product_item'>
					<div className='d-flex flex-column justify-content-between align-items-start h-100'>
						<div className='w-100'>
							<h4 className='series'>
								{activeSerie?.header
									? activeSerie?.header
									: products?.custom_fields?.filter(
											field => field.title === 'h2 Title'
									  ).length > 0
									? products?.custom_fields?.filter(
											field => field.title === 'h2 Title'
									  )[0].value
									: products?.model}
							</h4>
							<div
								className={`img_container mb-10 mx-auto ${
									product?.Category?.id === 5 ? 'vertical' : ''
								}`}>
								<CustomImage
									src={product?.image || products?.image}
									alt={product?.name}
									wrapperWidth={'100%'}
									wrapperMaxWidth={'100%'}
								/>
							</div>
						</div>
						<div className='w-100'>
							<h6
								className={`title ${
									sortedData?.series.length > 1 ? '' : 'mb-25'
								}`}>
								{product?.name || products?.name}
							</h6>
							{sortedData?.series.length > 1 ? (
								<div className='types'>
									<p>Select a size:</p>
									<div className='types_list'>
										{sortedData?.series.length > 1
											? sortedData?.series.map((item, index) =>
													Number(item?.price) || Number(item?.discount) ? (
														<button
															onClick={() => {
																changeTvSizeHandler(item)
																setActiveSerie(item)
															}}
															className={`${
																item?.id === activeSerie?.id ? 'active' : ''
															}`}
															key={index}>
															{item?.title}
														</button>
													) : null
											  )
											: null}
									</div>
								</div>
							) : null}
							<div>
								<span className='new_price'>
									$
									{activeSerie?.final_price
										? activeSerie?.final_price
										: (
												(parseFloat(activeSerie?.price) / 100) *
												(100 - parseFloat(activeSerie?.discount))
										  ).toFixed(2) * 1}
								</span>
								<span className='sale'>
									{parseFloat(activeSerie?.discount) || 0}% OFF
								</span>
								{activeSerie?.discount?.replaceAll('%', '') > 0 && (
									<div className='old_price'>
										Reg:{' '}
										<span className='text-decoration-line-through dir-rtl'>
											${parseFloat(activeSerie?.price)}
										</span>
									</div>
								)}
							</div>
							<div className='d-flex flex-wrap justify-content-center gap-2 align-items-center w-100 text-center mt-5 mb-3'>
								<Link
									// target={menu?.target ? menu?.target : '_self'}
									href={url ? url : '/'}>
									<a className='n-btn outline-black  '>
										View Product
										{/* {menu?.target === '_blank' && (
											<img
												style={{ marginLeft: '10px' }}
												src={OpenPageOnNewTab.src}
											/>
										)} */}
									</a>
								</Link>
								<button
									onClick={() => setShowDialog(true)}
									className={`n-btn primary-text`}>
									Where To Buy
									<span>
										<FontAwesomeIcon
											icon={faChevronRight}
											size={'sm'}
											className='ms-2'
										/>
									</span>
								</button>
							</div>
						</div>
					</div>
				</figure>
			) : null}
			{/* {showDialgo ? (
				<BlackFridayProductsItemDialog
					onClick={setShowDialog}
					model={product?.model}
					product={activeSerie}
				/>
			) : null} */}
			{product && (
				<ModalChanelAdviser
					product={product}
					productId={activeSerie?.id}
					type={'static'}
					condition={showDialgo}
					handler={setShowDialog}
					model={product.model}
					customizeRetailerId={activeSerie?.retailers?.filter(retailer =>
						activeSerie?.selected_retailers?.includes(retailer.id)
					)}
				/>
			)}
		</>
	)
}

export default React.memo(BlackFridayProductsItem)
