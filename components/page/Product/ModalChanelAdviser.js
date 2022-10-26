import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useOutsideClick from 'hooks/useOutsideClick'
import React, { useRef } from 'react'

function ModalChanelAdviser({ condition, handler, model }) {
	const modalOverView = useRef()
	const outside = useOutsideClick(modalOverView)
	return (
		<div
			onClick={() => outside && handler(false)}
			id='where-to-buy-drawer-backdrop'
			class='backdrop'>
			<div
				ref={modalOverView}
				id='where-to-buy-drawer'
				class={`where-to-buy-drawer fixed-top ${condition ? 'open' : ''}`}>
				<button class='btn close-btn' onClick={() => handler(false)}>
					<FontAwesomeIcon size='xl' icon={faXmark} />
				</button>
				{/* <div>
						<img
							src='/static/images/hisense-u8-uled-4k/related-product-item-2.png'
							alt='featured image'
							width='90%'
						/>
						<div class='product-details'>
							<span class='model'>Model: 75U9DG</span>
							<strong class='name'>U9DG Dual Cell Android TV</strong>
						</div>
						<div>
							<a href='#' class='btn btn-primary mt-6 mb-3'>
								75"
							</a>
						</div>
						<div class='authorized-dealer'>
							<span>Hisense Authorized Dealers</span>
							<button
								class='btn modal-btn'
								type='button'
								data-toggle='modal'
								data-target='#authorized-dealers-modal'>
								Why Buy from an Authorized Dealer?
								<i class='ms-2 fa-solid fa-up-right-from-square'></i>
							</button>
						</div>
					</div>
					<div>
						<div class='row justify-content-between align-items-center mx-0 bottom-border py-3'>
							<a href='#'>
								<img
									src='/static/images/hisense-u8-uled-4k/best-buy.png'
									alt='best buy'
								/>
							</a>
							<a href='#' class='btn dealer-link'>
								SHOP NOW
							</a>
						</div>
						<div class='row justify-content-between align-items-center mx-0 py-3'>
							<a href='#'>
								<img
									src='/static/images/hisense-u8-uled-4k/value-electronics.png'
									alt='value electronics'
								/>
							</a>
							<a href='#' class='btn dealer-link'>
								SHOP NOW
							</a>
						</div>
					</div> */}
				<iframe
					width={'100%'}
					height={'100%'}
					src={`https://where-to-buy.co/widgets/core/BuyOnlineBuyLocalV2/index.html?pid=12040849&model=${model}`}
					frameborder='0'></iframe>
			</div>
		</div>
	)
}

export default ModalChanelAdviser