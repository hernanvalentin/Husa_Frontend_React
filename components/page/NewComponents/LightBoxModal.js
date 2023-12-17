import React from 'react'
import Link from 'next/link'
import DownloadIconV2 from 'components/icons/DownloadIconV2'
import useOutsideClick from 'hooks/useOutsideClick'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const LightBoxModal = ({
	id,
	caption,
	video,
	image,
	link,
	isVisible,
	visibleHandler
}) => {
	const boxRef = useRef()

	const outSide = useOutsideClick(boxRef)

	function validateCaptions(_caption) {
		let temp = _caption?.split('<p>')[1]?.split('</p>')[0]
		if (temp?.length > 100) temp = temp?.substring(0, 100) + '...'
		return temp
	}

	return (
		isVisible && (
			<>
				<div
					onClick={() => outSide && visibleHandler()}
					className='dropdown-select-box-backdrop light_box_backdrop'></div>
				<div ref={boxRef} className='lightbox'>
					<div className='lightbox___top_bar'>
						<button
							className='lightbox___top_bar___back'
							onClick={visibleHandler}>
							<FontAwesomeIcon icon={faChevronLeft} />
							<span>Back</span>
						</button>
						{(link?.value || image?.src) && link?.title && (
							<Link
								target={link?.target ? link?.target : '_self'}
								href={
									link?.value
										? link?.value.split('.com')[0] +
										  '.com/download/f' +
										  link?.value.split('.com')[1]
										: image?.src
										? image?.src.split('.com')[0] +
										  '.com/download/f' +
										  image?.src.split('.com')[1]
										: '#'
								}>
								<a
									target={link?.target ? link?.target : '_self'}
									className='n-btn outline-black transparent d-flex gap-2 align-items-center w-fit medium'>
									{link?.title}
									<DownloadIconV2 color='#000' width='16' height='16' />
								</a>
							</Link>
						)}
						<button
							className='lightbox___top_bar___close'
							onClick={visibleHandler}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'>
								<rect width='32' height='32' rx='16' fill='black' />
								<mask
									id='mask0_10508_7226'
									style={{ maskType: 'alpha' }}
									maskUnits='userSpaceOnUse'
									x='5'
									y='5'
									width='22'
									height='22'>
									<rect
										x='5.91992'
										y='5.7511'
										width='20.48'
										height='20.48'
										fill='#D9D9D9'
									/>
								</mask>
								<g mask='url(#mask0_10508_7226)'>
									<path
										d='M11.3812 21.9645L10.1865 20.7698L14.9652 15.9912L10.1865 11.2125L11.3812 10.0178L16.1599 14.7965L20.9385 10.0178L22.1332 11.2125L17.3545 15.9912L22.1332 20.7698L20.9385 21.9645L16.1599 17.1858L11.3812 21.9645Z'
										fill='white'
									/>
								</g>
							</svg>
						</button>
					</div>
					<div className='w-100 my-auto my-md-0'>
						<div className='px-md-10 w-100'>
							<div className='lightbox___wrapper'>
								{video?.value ? (
									<iframe
										id={'LightBox' + id + video?.title}
										src={video?.value}
										alt={'LightBox' + id + video?.title}
										title={'LightBox' + id + video?.title}
										width='100%'
										height='100%'
										allow='autoplay; fullscreen; picture-in-picture'
										mozallowfullscreen
										webkitallowfullscreen
										allowfullscreen
										dataready={true}></iframe>
								) : image?.src ? (
									<img src={image?.src} alt={image?.alt} />
								) : null}
							</div>
						</div>
						{caption?.value && caption?.value.length && (
							<div
								className='lightbox___caption'
								dangerouslySetInnerHTML={{
									__html: validateCaptions(caption?.value)
								}}></div>
						)}
					</div>
				</div>
			</>
		)
	)
}

export default LightBoxModal