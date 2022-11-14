import React from 'react'
import Link from 'next/link'

const TelevisionsBlockBanner = ({ data: { structure } }) => {
	structure = {
		image: {
			src: 'https://assets.hisense-usa.com/assets/ContentBuilderImages/458eb01487/Soundbar-Main__ScaleMaxWidthWzMwNDhd.jpg-wlpjvr.jpg',
			alt: 'Hero'
		},
		title: {
			value: '<h2>2023 Lineup is here.</h2>'
		},
		subtitle: {
			value: '<h4>MINI-LED.  Bigger sizes.  More platforms.</h4>'
		},
		link: {
			value: '/',
			title: 'Shop the lineup'
		}
	}
	return (
		<section>
			<div className='televisions-banner'>
				<img
					src={structure?.image?.src}
					alt={structure?.image?.alt}
					className='image'
				/>
				<div className='content'>
					<div
						className='title mb-3 mb-md-7'
						dangerouslySetInnerHTML={{ __html: structure?.title?.value }}></div>
					<div
						className='subtitle mb-3 mb-md-7'
						dangerouslySetInnerHTML={{
							__html: structure?.subtitle?.value
						}}></div>
					{structure?.link?.value ? (
						<Link href={structure?.link?.value}>
							<a className='n-btn outline-white transparent d-block w-fit'>
								{structure?.link?.title}
							</a>
						</Link>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default TelevisionsBlockBanner