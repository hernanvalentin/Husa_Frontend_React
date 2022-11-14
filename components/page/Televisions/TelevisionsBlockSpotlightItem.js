import Link from 'next/link'
import React from 'react'

const TelevisionsBlockSpotlightItem = ({ data }) => {
	return (
		<div className='col-12 col-sm-6 col-lg-3 televisions-spotlight-item'>
			<img src={data?.image?.src} alt={data?.image?.alt} className='image' />
			<div className='content'>
				<h4>{data?.title?.value}</h4>
				{data?.productLink?.value ? (
					<Link href={data?.productLink?.value}>
						<a className='n-btn outline-white transparent d-block w-fit mx-auto mb-4'>
							{data?.productLink?.title}
						</a>
					</Link>
				) : null}
				{data?.link?.value ? (
					<Link href={data?.link?.value}>
						<a className='n-btn outline-white transparent d-block w-fit mx-auto'>
							{data?.link?.title}
						</a>
					</Link>
				) : null}
			</div>
		</div>
	)
}

export default TelevisionsBlockSpotlightItem