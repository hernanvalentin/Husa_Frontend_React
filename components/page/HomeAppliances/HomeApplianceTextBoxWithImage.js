import React from 'react'
import Link from 'next/link'

const HomeApplianceTextBoxWithImage = ({ data: { structure } }) => {
	return (
		<section>
			<div
				className={`row mx-0 home-appliances-text-box-with-image ${structure?.theme?.value}`}>
				<div className='col-12 col-md-8 content py-10 py-lg-0'>
					<h2 className='title fs-2tx'>
						{structure?.title?.value}{' '}
						<span className='text-primary'>
							{structure?.coloredTitle?.value}
						</span>
					</h2>
					<p
						className='paragraph'
						dangerouslySetInnerHTML={{
							__html: structure?.paragraph?.value
						}}></p>
					{structure?.link && (
						<Link href={structure?.link?.value}>
							<a className='n-btn outline-white transparent'>
								{structure?.link?.title}
							</a>
						</Link>
					)}
				</div>
				<div className='col-12 col-md-4 p-0 '>
					<img
						src={structure?.image?.src}
						alt={structure?.image?.alt}
						width='100%'
						height='100%'
					/>
				</div>
			</div>
		</section>
	)
}

export default HomeApplianceTextBoxWithImage