import React from 'react'

function UnauthorizedList({ data }) {
	let { structure } = data
	return (
		<section>
			<article className='article unathorized-list'>
				<div className='container-md'>
					<div className='row justify-content-center align-items-stretch flex-wrap mx-auto px-3 pb-10'>
						{structure?.list?.value.map((item, index) => (
							<div
								key={index}
								className='list-container'
								style={{ width: `${100 / structure?.count?.value}%` }}>
								<div
									className='list'
									dangerouslySetInnerHTML={{ __html: item?.text?.value }}></div>
							</div>
						))}
					</div>
				</div>
			</article>
		</section>
	)
}

export default UnauthorizedList