import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function ProductResourceBox({ pim, data }) {
	let { structure } = data
	const router = useRouter()
	return (
		<div id={data.name + data.id} className='resources py-7 py-sm-18'>
			<h2>Resources</h2>
			<ul>
				{pim?.assets.map(
					(item, index) =>
						item.type_id === 3 && (
							<li key={index}>
								<a href={item.url ? item.url : ''} download>
									<span className='underline-on-hover text-uppercase'>{item.caption}</span>
								</a>
							</li>
						)
				)}
				<li>
					<Link href={`/support/${router.pathname.split('/').at(-1)}`}>
						<a>
							<span className='underline-on-hover text-uppercase'>PRODUCT SUPPORT</span>
						</a>
					</Link>
				</li>
				{structure?.installationUrl?.value && (
					<li>
						<Link href={structure?.installationUrl?.value}>
							<a>
								<span className='underline-on-hover text-uppercase'>INSTALLATION REQUEST</span>
							</a>
						</Link>
					</li>
				)}
			</ul>
		</div>
	)
}

export default ProductResourceBox
