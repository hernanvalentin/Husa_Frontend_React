import React from 'react'

function ULEDTextBox({ data }) {
	let { structure } = data
	return (
		<section id={data?.name + data?.id}>
			<div className='container-fluid px-7 py-14 p-md-20'>
				<article className='row article'>
					<h4
						style={{ fontSize: '42px', lineHeight: 'unset' }}
						className='col-12 col-md-6 mb-7 my-md-auto px-0 px-md-8'>
						{structure?.title?.value}
					</h4>

					<div className='col-12 col-md-6 '>
						{structure?.paragraphOne?.value && (
							<p className='fw-light m-0'>{structure?.paragraphOne?.value}</p>
						)}
						{structure?.paragraphTwo?.value && (
							<p className='fw-light m-0'>{structure?.paragraphTwo?.value}</p>
						)}
					</div>
				</article>
			</div>
		</section>
		// 	<section id={data?.name + data?.id}>
		// 	<div className='uledx_textbox'>
		// 		<article className='content'>
		// 			<h4 className='title'>{structure?.title?.value}</h4>

		// 			<div>
		// 				{structure?.paragraphOne?.value && (
		// 					<div className='text'>
		// 						<p>{structure?.paragraphOne?.value}</p>
		// 					</div>
		// 				)}
		// 				{structure?.paragraphTwo?.value && (
		// 					<div className='text'>
		// 						<p>{structure?.paragraphTwo?.value}</p>
		// 					</div>
		// 				)}
		// 				{structure?.text?.value && (
		// 					<div
		// 						className='text'
		// 						dangerouslySetInnerHTML={{
		// 							__html: structure?.text?.value
		// 						}}></div>
		// 				)}
		// 			</div>
		// 		</article>
		// 	</div>
		// </section>
	)
}

export default ULEDTextBox
