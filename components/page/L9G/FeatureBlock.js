import React from 'react'
import FeatureBlocksItem from './FeatureBlocksItem'

const FeatureBlock = ({ data: { structure } }) => {
	return (
		<section className='l9g'>
			hhhhhhhhhhhhhhhhhh
			<div className='feature-blocks'>
				{structure?.list?.value.map((item, index) => (
					<FeatureBlocksItem
						key={index}
						direction={item?.direction?.value}
						title={item?.title?.value}
						text={item?.text?.value}
						videoSrc={item?.video?.value}
					/>
				))}
			</div>
		</section>
	)
}

export default FeatureBlock