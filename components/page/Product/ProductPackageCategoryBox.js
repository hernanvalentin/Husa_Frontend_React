import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useRef, useEffect } from 'react'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'
const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))

function ProductPackageCategoryBox({ data, pim }) {
	let { structure } = data

	const [chanelAdviserHandler, setChanelAdviserHandler] = useState(false)
	const [fix, setFix] = useState(false)
	const menu = useRef()

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (menu?.current?.offsetTop <= window.scrollY + 72) {
				setFix(true)
			} else {
				setFix(false)
			}
		})
	}, [])

	const dataLayerHandler = () => {
		setChanelAdviserHandler(!chanelAdviserHandler)
		// window.dataLayer.push({
		// 	event: 'view_product',
		// 	eventData: {
		// 		product_id: pim?.model,
		// 		category: pim?.Category?.name
		// 	}
		// })
		window.dataLayer.push({
			event: 'Online redirect',
			category: 'PriceSpider Click',
			action: 'PS-Redirect',
			label: pim?.name
		})
	}

	return (
		<>
			{' '}
			<div
				id={data.name + data.id}
				className='catalog-navbar'
				style={{ backgroundColor: structure?.backgroundColor?.value }}
				ref={menu}>
				<nav className=''>
					<ul className='row justify-content-evenly justify-content-md-start align-items-center p-0 m-0'>
						{/* <li className='me-md-auto'>
							<span className='underline-on-hover text-uppercase'>
								{pim?.model}
							</span>
						</li> */}
						{structure?.tags?.value.map((item, index) => (
							<li className='me-md-auto' key={`category-item-${index}`}>
								<Link
									target={item.target?.target ? item.target?.target : '_self'}
									href={item.target.value ? item.target.value : '/'}>
									<a
										target={
											item.target?.target ? item.target?.target : '_self'
										}>
										<span className='underline-on-hover text-uppercase'>
											{item.title.value}
											{item.target?.target === '_blank' && (
												<img
													style={{ marginLeft: '10px' }}
													src={OpenPageOnNewTab.src}
												/>
											)}
										</span>
									</a>
								</Link>
							</li>
						))}
						{/* 
						{structure?.tags?.value.map((item, index) => (
							<li key={`category-item-${index}`}>
								<Link href={item.target.value ? item.target.value : '/'}>
									<a>
										<span className='underline-on-hover text-uppercase'>
											{item.title.value}
										</span>
									</a>
								</Link>
							</li>
						))} */}

						{/* <li className=''>
							<Link
								href={
									// structure?.support?.value ? structure?.support.value : '/'
									`/support/${
										router.pathname.split('/').at(-1).startsWith('H')
											? router.pathname.split('/').at(-1).replace('H', 'h')
											: router.pathname.split('/').at(-1)
									}`
								}>
								<a>
									<span className='underline-on-hover text-uppercase'>
										{' '}
										Support
									</span>
								</a>
							</Link>
						</li> */}
						<li className='ms-md-auto '>
							<button
								className={`${
									pim?.buy_status === 'ChannelAdvisor' ||
									pim?.buy_status === 'Internal'
										? ''
										: 'disabled'
								}`}
								style={{ padding: fix ? '20px 20px' : '14px 20px' }}
								onClick={() =>
									pim?.buy_status === 'ChannelAdvisor' ||
									pim?.buy_status === 'Internal'
										? dataLayerHandler()
										: {}
								}>
								{pim?.buy_status === 'ChannelAdvisor' ||
								pim?.buy_status === 'Internal'
									? 'Where To Buy'
									: 'Coming Soon'}
							</button>
						</li>
					</ul>
				</nav>
				<ModalChanelAdviser
					product={pim}
					productId={pim?.id}
					type={pim?.buy_status}
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={pim?.model}
				/>
			</div>
		</>
	)
}

export default ProductPackageCategoryBox
