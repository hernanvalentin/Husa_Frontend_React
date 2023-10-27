import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdobeAcrobat from 'components/icons/AdobeAcrobat'
import DownloadIconV2 from 'components/icons/DownloadIconV2'
import Link from 'next/link'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FirmWareDownloadSectionResponsiveItem = ({
	data,
	windowSize,
	openStatus
}) => {
	const [open, setOpen] = useState(true)
	const accordionItem = useRef()
	const accordionItemHeight = useRef()
	const accordionButtonHeight = useRef()

	useEffect(() => {
		setOpen(openStatus)
	}, [])
	useEffect(() => {
		if (open) {
			accordionItem.current.style.maxHeight =
				accordionItemHeight.current.offsetHeight +
				accordionButtonHeight.current.offsetHeight +
				85 +
				'px'
		} else {
			accordionItem.current.style.maxHeight =
				accordionButtonHeight.current.offsetHeight + 30 + 'px'
		}
	}, [open, windowSize])
	return (
		<div className='table_row' ref={accordionItem}>
			<div
				className={`button_row ${open ? 'open' : ''}`}
				ref={accordionButtonHeight}
				onClick={() => setOpen(prev => !prev)}>
				<div
					className='file_type'
					style={
						data.type && {
							backgroundColor: data.type === 'firmware' ? '#76BECC' : '#F05B71'
						}
					}>
					{data.type ? (
						<>
							<span>{data.type}</span>
						</>
					) : (
						'-'
					)}
				</div>
				<div className='size'>{data?.title.split('_').pop()}</div>
				<FontAwesomeIcon
					className='icon'
					icon={faChevronCircleRight}
					size='lg'
					color={'#000'}
				/>
			</div>

			{/* <div
				className='file_title'
				onClick={() => setOpen(prev => !prev)}
				>
				{data.caption ? data.caption : data.title}
			</div> */}
			<div className='w-100' ref={accordionItemHeight}>
				<div>
					{data.download_link ? (
						<a
							href={data.download_link}
							download={true}
							className='download_item'>
							<span>Download Update</span>
							<DownloadIconV2 color='#00AAA6' />
						</a>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default FirmWareDownloadSectionResponsiveItem
