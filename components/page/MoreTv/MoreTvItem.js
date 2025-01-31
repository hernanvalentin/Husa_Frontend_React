import React from 'react'
import Link from 'next/link'
import CustomImage from 'components/common/CustomImage'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function MoreTVItem({ image, title, model, description, link, comingSoon }) {
	return (
		<div className='col-12 col-sm-6 col-lg-4 col-xxl-2 py-3'>
			<div className='d-flex flex-column align-items-center justify-content-between'>
				<Link target={link?.target ? link?.target : '_self'} href={link.value}>
					<a
						target={link?.target ? link?.target : '_self'}
						style={{ opacity: comingSoon ? 0.5 : 1 }}
						className=''>
						<CustomImage src={image.src} alt={image.alt} wrapperWidth='100%' />
					</a>
				</Link>

				<div className='text-center'>
					<h4 className='fs-2 fw-normal'>
						{title}
						{model && <span className='fs-8 ms-2'>"{model}"</span>}
					</h4>
					<p className='fw-normal text-muted mb-6'>{description}</p>
					<Link
						target={link?.target ? link?.target : '_self'}
						href={link.value}>
						<a
							target={link?.target ? link?.target : '_self'}
							className='text-black text-uppercase fw-normal'
							style={{ fontSize: '14px' }}>
							{link.title}
							{link?.target === '_blank' && (
								<img
									style={{ marginLeft: '10px' }}
									src={OpenPageOnNewTab.src}
								/>
							)}
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default MoreTVItem
