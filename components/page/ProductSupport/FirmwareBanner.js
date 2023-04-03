import {
	faCircleExclamation,
	faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomImage from 'components/common/CustomImage'
import Link from 'next/link'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { getFirmWareModels } from 'services/servicePortal'
import FirmwareBannerModelNumberDialog from './FirmwareBannerModelNumberDialog'
import { RouteHandler } from 'utils/routeHandler'
import axios from 'axios'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'

const FirmwareBanner = ({ data }) => {
	const [content, setContent] = useState(null)
	const [showModal, setShowModal] = useState(false)
	const [searchTerm, setSearchTerm] = useState([])
	const [model, setModel] = useState({})
	const [loading, setLoading] = useState(false)

	const router = useRouter()

	useEffect(() => {
		setContent(data?.structure)
	}, [])

	useEffect(() => {
		if (model?.model?.title) getPageUrl(model?.model?.title)
	}, [model])

	const getPageUrl = async _value => {
		try {
			let response = await axios.get(
				`${process.env.NEXT_PUBLIC_CXM_API_ROUTE}/searchProduct?type=support&string=${_value}&brand_id=${process.env.NEXT_PUBLIC_BRAND_ID}`
			)
			if (response?.data?.data && response?.data?.data.length > 0) {
				console.log(response?.data?.data.length > 0)
				router.push(
					{
						pathname: response?.data?.data[0]?.route,
						query: { model: JSON.stringify(model?.files) }
					},
					response?.data?.data[0]?.route
				)
			}
		} catch (error) {
			console.log(error)
		}
	}

	const getModel = async _searchTerm => {
		setLoading(true)
		try {
			const response = await getFirmWareModels(_searchTerm)
			setModel(response?.data)
			setLoading(false)
		} catch (e) {
			toast.error(
				e?.response?.data?.message
					? e?.response?.data?.message
					: 'There was an error submitting your request.'
			)
			setLoading(false)
		}
	}

	return (
		<section>
			<div className='firmware_banner'>
				<div className='background'>
					<CustomImage
						src={content?.image?.src}
						alt={content?.image?.alt}
						wrapperHeight='100%'
						wrapperWidth='100%'
					/>
				</div>
				<div className='content'>
					<h2
						className='title'
						dangerouslySetInnerHTML={{ __html: content?.title?.value }}></h2>
					<div className={`search_container`}>
						<input
							onChange={e => setSearchTerm(e.target.value)}
							value={searchTerm}
							type='text'
							placeholder='Enter your model number'
						/>
						<button
							onClick={() => getModel(searchTerm)}
							className='n-btn outline-white transparent py-4 px-6'>
							{loading ? <Spinner size={20} /> : 'Search'}
						</button>
					</div>
					<button
						className='n-btn outline-white transparent p-4'
						type='button'
						onClick={() => setShowModal(prevState => !prevState)}>
						<FontAwesomeIcon
							icon={faCircleExclamation}
							size='lg'
							className='me-2'
						/>
						Where do I find my model number?
					</button>
				</div>
			</div>
			{showModal && (
				<FirmwareBannerModelNumberDialog
					text={content?.text?.value}
					onClose={() => setShowModal(false)}
				/>
			)}
		</section>
	)
}

export default FirmwareBanner