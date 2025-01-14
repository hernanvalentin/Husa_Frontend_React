import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CompareIcon from 'components/icons/CompareIcon'
import useOutsideClick from 'hooks/useOutsideClick'
import { useWindowSize } from 'hooks/useWindowSize'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	changeCompareCondition,
	changeErrorModalCondition,
	removeCompare
} from 'redux/slices/compare'

function CompareModal({ route }) {
	const [width] = useWindowSize()
	const router = useRouter()
	const dispatch = useDispatch()
	const compareErrorModal = useRef()
	const compareErrorModalOutside = useOutsideClick(compareErrorModal)
	const [productsId, setProductsId] = useState([])
	const { compareCondition, compareList, compareErrorCondition } = useSelector(
		state => state.compareData
	)

	useEffect(() => {
		let _productsId = []
		compareList.forEach(item => {
			_productsId.push(item.id)
		})
		setProductsId(_productsId)
	}, [compareList])

	return (
		<>
			<section
				onClick={() => dispatch(changeCompareCondition(false))}
				className={`compare_modal_wrapper ${
					compareCondition ? '' : 'd-none'
				}`}></section>
			<div
				className={`compare_modal ${
					compareCondition ? 'compare_modal_active' : ''
				}`}>
				<button
					className='close_button'
					onClick={() => dispatch(changeCompareCondition(false))}>
					<FontAwesomeIcon icon={faXmark} color={'#818181'} />
				</button>
				<h6>COMPARE {compareList.length} PRODUCTS</h6>
				<div className='list__btns'>
					<div className='list'>
						{compareList.map((item, index) => (
							<div key={'compare-item-' + index} className='item'>
								<button onClick={() => dispatch(removeCompare(item.id))}>
									<FontAwesomeIcon icon={faXmark} color={'#818181'} />
								</button>
								<img src={item?.media?.url} />
								<h6>Model: {item?.model}</h6>
								<h5>{item?.name}</h5>
							</div>
						))}
					</div>
					<div className='btns'>
						<button
							className='clear_btn'
							onClick={() => dispatch(removeCompare('all'))}>
							Clear All
						</button>

						{productsId.length < 2 ? (
							<button
								className='n-btn medium primary'
								style={{
									fontSize: '14px',
									lineHeight: '17px'
								}}
								disabled={productsId.length < 2}>
								COMPARE
							</button>
						) : (
							<Link
								href={`${route ? route?.value : ''}${
									productsId.length !== 0
										? `?productsId=${JSON.stringify(productsId)}`
										: ''
								}`}>
								<a
									className='n-btn medium primary'
									style={{
										fontSize: '14px',
										lineHeight: '17px'
									}}>
									COMPARE
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>

			<section
				onClick={() =>
					compareErrorModalOutside && dispatch(changeErrorModalCondition(false))
				}
				className={`compare_error_wrapper ${
					compareErrorCondition ? '' : 'd-none'
				}`}>
				<div ref={compareErrorModal} className='compare_error_modal'>
					<button
						className='close_modal'
						onClick={() => dispatch(changeErrorModalCondition(false))}>
						<FontAwesomeIcon icon={faXmark} color={'#fff'} />
					</button>
					<p>
						You can compare a maximum of {width < 768 ? 2 : 3} products. Please
						remove a product before adding another one
					</p>
				</div>
			</section>

			{compareList.length !== 0 && (
				<>
					{/* {width < 768 ? (
						<Link
							href={`${route ? route?.value : ''}${
								productsId.length !== 0
									? `?productsId=${JSON.stringify(productsId)}`
									: ''
							}`}>
							<a className='compare_layout_button'>
								<CompareIcon />
								Compare ({compareList.length})
							</a>
						</Link>
					) : ( */}
					<button
						onClick={() => dispatch(changeCompareCondition(true))}
						className='compare_layout_button'>
						<CompareIcon />
						Compare
					</button>
					{/* )} */}
				</>
			)}
		</>
	)
}

export default CompareModal
