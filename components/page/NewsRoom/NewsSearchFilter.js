import AngleArrow from 'components/icons/AngleArrow'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import { useWindowSize } from 'hooks/useWindowSize'
import React, { useState } from 'react'

const NewsSearchFilter = ({ title = 'Featured News' }) => {
	const [openFilter, setOpenFilter] = useState(false)
	const [width] = useWindowSize()
	return (
		<div className='news_room_search_filter'>
			<div className='container'>
				<div className='content'>
					<span>{title}</span>

					<div
						style={{
							height: width > 980 ? 'fit-content' : openFilter ? '300px' : '0'
						}}>
						<div className='select_box_custom'>
							<span>
								Year <AngleArrow />
							</span>
							<div>
								<ul>
									<li>
										<button>2004</button>
									</li>
								</ul>
							</div>
						</div>
						<div className='select_box_custom product_select_box'>
							<span>
								Product <AngleArrow />
							</span>
							<div>
								<ul>
									<li>
										<button>2004</button>
									</li>
								</ul>
							</div>
						</div>
						<div className='custom_input_box'>
							<input placeholder='search newsroom' />
							<MagnifierIcon />
						</div>
						<button>Reset Filter</button>
					</div>
					<button
						className={!openFilter && 'close_button'}
						onClick={() => setOpenFilter(state => !state)}>
						Filters
						<AngleArrow />
					</button>
				</div>
			</div>
		</div>
	)
}

export default NewsSearchFilter
