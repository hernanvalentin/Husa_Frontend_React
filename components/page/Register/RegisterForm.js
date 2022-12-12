import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleInfo,
	faCheck,
	faXmark
} from '@fortawesome/free-solid-svg-icons'
import CustomSelectBox from 'components/common/selectBox'
import CustomInput from 'components/common/Input'
import RoleModal from '../ContactUs/RoleModal'
import { GetCategoriesApi, GetSeriesModelsApi } from 'services/category'
import { useRouter } from 'next/router'
import Spinner from 'components/common/Spinner'
import { toast } from 'react-toastify'
import axios from 'axios'

function RegisterForm({ data }) {
	let { structure } = data
	let router = useRouter()
	const [disabled, setDisabled] = useState(false)
	const [categories, setCategories] = useState([])
	const [series, setSeries] = useState([])
	const [models, setModels] = useState([])
	const [activeCheckBox, setActiveCheckBox] = useState(false)
	const [modalCondition, setModalCondition] = useState(false)
	const [loading, setLoading] = useState(false)
	const [file, setFile] = useState(null)
	const [imageLoading, setImageLoading] = useState(null)
	const [dataSchema, setDataSchema] = useState({
		first_name: null,
		last_name: null,
		product_series: null,
		email: null,
		phone_number: null,
		postal_code: null,
		product_category: null,
		product_model: null,
		product_serial_number: null,
		purchased_from: null,
		date_of_purchase: null,
		receipt_image: null,
		future_news: '0'
	})

	useEffect(() => {
		getCategories()
	}, [])

	const dataSchemaHandler = (_key, _value) => {
		setDataSchema({ ...dataSchema, [_key]: _value })
	}

	const getCategories = async () => {
		setCategories('loading')
		try {
			let response = await GetCategoriesApi(router)
			if (response.status === 200) {
				setCategories(response.data.data)
			}
		} catch (error) {
			setCategories([])
			console.log(error)
		}
	}

	const getSeriesModels = async _categoryId => {
		setSeries('loading')
		setModels('loading')
		try {
			let response = await GetSeriesModelsApi(
				router,
				`category_id=${_categoryId}`
			)
			if (response.status === 200) {
				setSeries(response.data.series)
				setModels(
					response.data.models.map(item => {
						return { name: item }
					})
				)
			}
		} catch (error) {
			setSeries([])
			setModels([])
			console.log(error)
		}
	}

	const submitData = async e => {
		e.preventDefault()

		setLoading(true)
		try {
			let response = await axios.post(
				`${process.env.NEXT_PUBLIC_CRM_API_ROUTE}/F639711a39b936`,
				{ ...dataSchema }
			)
			if (response.status === 200) {
				toast.success('ticket sended', { toastId: 'ticket-sended' })
				e.target.reset()
				setFile(null)
			} else {
				toast.error('ticket didn"t sended', { toastId: 'ticket-error' })
			}
			setLoading(false)
		} catch (error) {
			toast.error('ticket didn"t sended', { toastId: 'ticket-error' })
			setLoading(false)
			console.log(error)
		}
	}

	const uploadFile = async e => {
		setFile(e.target.files[0])
		setImageLoading(true)
		const formData = new FormData()
		formData.append('attachment', e.target.files[0])

		try {
			let response = await axios({
				method: 'post',
				url: process.env.NEXT_PUBLIC_ASSETS_API_ROUTE,
				data: formData,
				headers: { 'Content-Type': 'multipart/form-data' }
			})
			if (response.status === 200) {
				toast.success('image uploaded', { toastId: 'image-uploaded' })
				dataSchemaHandler('receipt_image', response.data.view_link)
			}
			setImageLoading(false)
		} catch (error) {
			setImageLoading(false)

			toast.error('image flailed', { toastId: 'image-flailed' })
			console.log(error)
		}
	}

	return (
		<section className={disabled && `d-none`}>
			<div className='container form-container px-8 px-md-20 mt-20 py-10'>
				<article className='article'>
					<h2 className='text-center mb-17'>{structure?.title?.value}</h2>
				</article>
				<form
					action=''
					onSubmit={submitData}
					className='form-container-inner row active'
					id='form-tab-1'>
					<div className='col-12 mb-10 custom-select-box'>
						<CustomSelectBox
							title={'PLEASE SELECT YOUR PRODUCT'}
							required={true}
							options={categories}
							onChange={_value => {
								dataSchemaHandler('product_category', _value.name)
								getSeriesModels(_value.id)
							}}
						/>
					</div>
					<div className='col-12 mb-10 custom-select-box'>
						<CustomSelectBox
							title={'PLEASE SELECT YOUR SERIES'}
							required={true}
							options={series}
							onChange={_value =>
								dataSchemaHandler('product_series', _value.name)
							}
						/>
					</div>
					{dataSchema.product_category && (
						<div className='col-12 mb-10 custom-select-box'>
							<CustomSelectBox
								title={'PLEASE SELECT YOUR MODEL'}
								required={true}
								options={models}
								onChange={_value =>
									dataSchemaHandler('product_model', _value.name)
								}
							/>
						</div>
					)}

					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							placeholder={'SERIAL NUMBER'}
							required={true}
							onChange={_value =>
								dataSchemaHandler('product_serial_number', _value)
							}
						/>
					</div>
					<div className='col-12 col-md-6 mb-10 d-flex'>
						<button
							className='modal-btn'
							type='button'
							onClick={() => setModalCondition(true)}>
							<FontAwesomeIcon icon={faCircleInfo} size={'xl'} />
							<span className='ms-2'> Where do I find the serial number?</span>
						</button>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							placeholder={'FIRST NAME'}
							onChange={_value => dataSchemaHandler('first_name', _value)}
							required={true}
							value={dataSchema.first_name}
						/>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							placeholder={'LAST NAME'}
							onChange={_value => dataSchemaHandler('last_name', _value)}
							required={true}
							value={dataSchema.last_name}
						/>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							placeholder={'EMAIL'}
							onChange={_value => dataSchemaHandler('email', _value)}
							required={true}
							value={dataSchema.email}
						/>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							placeholder={'POSTAL CODE/ZIP'}
							onChange={_value => dataSchemaHandler('postal_code', _value)}
							required={true}
							value={dataSchema.postal_code}
						/>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							placeholder={'PHONE NUMBER'}
							required={true}
							onChange={_value => dataSchemaHandler('phone_number', _value)}
							value={dataSchema.phone_number}
						/>
					</div>
					<div className='col-12 col-md-6 mb-10'>
						<CustomInput
							onChange={_value => dataSchemaHandler('purchased_from', _value)}
							placeholder={'PURCHASED FROM'}
							required={true}
							value={dataSchema.purchased_from}
						/>
					</div>
					<div className='col-12 mb-10'>
						<label htmlFor='date-input'>Date of Purchase</label>
						<CustomInput
							type='date'
							onChange={_value => dataSchemaHandler('date_of_purchase', _value)}
							required={true}
							value={dataSchema.date_of_purchase}
						/>
					</div>
					<div className='col-12 mb-10 file-upload position-relative'>
						<div className='file-upload-box position-relative'>
							{imageLoading && (
								<div className='image_loading'>
									<Spinner size={35} />
								</div>
							)}
							{file ? (
								<>
									<button className='remove_img' onClick={() => setFile(null)}>
										<FontAwesomeIcon icon={faXmark} />
									</button>
									<img src={URL.createObjectURL(file)} />
								</>
							) : (
								<>
									<input
										type='file'
										className=' position-absolute top-0 start-0 opacity-0 w-100 h-100'
										style={{ zIndex: 1 }}
										id='contact-file-input'
										accept='.jpg, .png, .jpeg'
										multiple='multiple'
										onChange={uploadFile}
									/>
									<div>Drag & Drop a File Here</div>
									<p>Upload Images</p>
								</>
							)}
						</div>
					</div>
					<div className='col-12 mb-10 news-check'>
						<span
							className='form-checkbox-span'
							onClick={() => {
								setActiveCheckBox(!activeCheckBox)
								dataSchemaHandler('future_news', !activeCheckBox ? '1' : '0')
							}}>
							{/* <i className='fa-solid fa-check d-none' id='form-checkbox-check'></i> */}
							{activeCheckBox && <FontAwesomeIcon icon={faCheck} />}
						</span>
						<label htmlFor='news'>
							<input
								type='checkbox'
								name='news'
								id='form-checkbox-input'
								className='d-none'
							/>
							Sign me up for future news
						</label>
					</div>
					<div className='col-12 text-center'>
						<button
							disabled={loading}
							type='submit'
							className='form-submit-btn d-flex mx-auto align-items-center'>
							<span className='me-2 underline-on-hover'>
								{' '}
								{structure?.subtitle?.value}
							</span>
							{loading && <Spinner size={25} />}
						</button>
					</div>
				</form>
			</div>
			{modalCondition && (
				<RoleModal
					data={structure?.modelText?.value}
					modalHandler={setModalCondition}
				/>
			)}
		</section>
	)
}

export default RegisterForm
