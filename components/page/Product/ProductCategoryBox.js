import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useRef, useEffect } from 'react'

const ModalChanelAdviser = dynamic(() => import('./ModalChanelAdviser'))

function ProductCategoryBox({ data, pim }) {
	const router = useRouter()
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


	let { structure } = data
	return (
		<>
			{' '}
			<div id={data.name + data.id} className='catalog-navbar bg-dark' ref={menu}>
				<nav className=''>
					<ul className='row justify-content-evenly justify-content-md-end align-items-center p-0 m-0'>
						<li className='me-md-auto'>
							<span>{pim?.model}</span>
						</li>
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
						))}

						<li>
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
						</li>
						<li>
							<button
								style={{ padding: fix ? '20px 20px' : '14px 20px' }}
								onClick={() =>
									pim?.retailers.length !== 0
										? setChanelAdviserHandler(!chanelAdviserHandler)
										: {}
								}>
								{pim?.retailers.length !== 0 ? 'Where To Buy' : 'Coming Soon'}
							</button>
						</li>
					</ul>
				</nav>
				<ModalChanelAdviser
					condition={chanelAdviserHandler}
					handler={setChanelAdviserHandler}
					model={pim?.model}
				/>
			</div>
		</>
	)
}

export default ProductCategoryBox
