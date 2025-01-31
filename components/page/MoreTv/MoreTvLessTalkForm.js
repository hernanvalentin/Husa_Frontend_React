import React, { useState, useEffect } from 'react'

// image
import TvFlipped from 'public/assets/images/more-tv/tv-flipped.png'
import CustomInput from 'components/common/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import OpenPageOnNewTab from 'public/assets/images/OpenNewPageIcon.png'

function MoreTVLessTalkForm({ data }) {
	const { structure } = data
	const [activeCheckbox, setActiveCheckbox] = useState(false)
	// const [content, setContent] = useState(null)
	// useEffect(() => {
	// 	setContent(structure)
	// }, [])
	return (
		<section>
			<div className='blue-bg-more-tv '>
				<div className='bg-bubble-dim-effect'>
					<div className='container px-md-8 py-20'>
						<div className='row align-items-center'>
							<div className='col-12 col-md-6 pe-lg-10'>
								<h4 className='fs-3qx fw-normal text-white mb-10 mb-md-20'>
									{structure?.whiteTitle?.value}
									<span className='d-block opacity-75'>
										{structure?.title?.value}
									</span>
								</h4>
								<div
									className='fs-2 text-white fw-normal mb-7'
									dangerouslySetInnerHTML={{
										__html: structure?.paragraph?.value
									}}></div>
								<img
									src={structure?.image?.src}
									alt={structure?.image?.alt}
									width='80%'
									className='d-none d-md-block'
								/>
							</div>
							<div className='col-12 col-md-6 ps-lg-10'>
								<form action=''>
									<div
										dangerouslySetInnerHTML={{
											__html: structure?.formText?.value
										}}
										className='fw-normal text-white mb-11'></div>
									<p className='fw-normal text-white mb-2'>Select answer</p>
									<div className='d-flex justify-content-start align-items-center flex-wrap mb-8'>
										<div className='custom-radio my-2'>
											<input
												type='radio'
												id='8'
												name='proportion'
												className='d-none'
											/>
											<label
												htmlFor='8'
												className='fw-normal text-white mb-0 ms-1'>
												8/10
											</label>
										</div>
										<div className='custom-radio my-2'>
											<input
												type='radio'
												id='6'
												name='proportion'
												className='d-none'
											/>
											<label
												htmlFor='6'
												className='fw-normal text-white mb-0 ms-1'>
												6/10
											</label>
										</div>
										<div className='custom-radio my-2'>
											<input
												type='radio'
												id='1'
												name='proportion'
												className='d-none'
											/>
											<label
												htmlFor='1'
												className='fw-normal text-white mb-0 ms-1'>
												1/10
											</label>
										</div>
									</div>
									<div className='form-group'>
										<CustomInput
											placeholder={'First Name'}
											className='form-control custom-input'
										/>
									</div>
									<div className='form-group'>
										<CustomInput
											placeholder={'Last Name'}
											className='form-control custom-input'
										/>
									</div>
									<div className='form-group'>
										<CustomInput
											placeholder={'Email'}
											className='form-control custom-input'
										/>
									</div>
									<div className='form-group'>
										<CustomInput
											placeholder={'Phone Number'}
											className='form-control custom-input'
										/>
									</div>
									<div className='d-flex justify-content-start align-items-center mb-10'>
										<div
											onClick={() => setActiveCheckbox(!activeCheckbox)}
											className='custom-checkbox'>
											<span className='custom-border'>
												{activeCheckbox && (
													<FontAwesomeIcon color='#fff' icon={faCheck} />
												)}
											</span>

											<label
												htmlFor='checkbox'
												className='fw-normal text-white mb-0 ms-1 text-nowrap'>
												I agree to the
												<Link
													target={
														structure?.termsAndConditionsUrl?.target
															? structure?.termsAndConditionsUrl?.target
															: '_self'
													}
													href={
														structure?.termsAndConditionsUrl?.value
															? structure?.termsAndConditionsUrl?.value
															: '/'
													}>
													<a
														target={
															structure?.termsAndConditionsUrl?.target
																? structure?.termsAndConditionsUrl?.target
																: '_self'
														}
														className='text-white ms-2'>
														terms & conditions{' '}
														{structure?.termsAndConditionsUrl?.target ===
															'_blank' && (
															<img
																style={{ marginLeft: '10px' }}
																src={OpenPageOnNewTab.src}
															/>
														)}
													</a>
												</Link>
											</label>
										</div>
									</div>
									<div className='text-end'>
										<button
											type='submit'
											className='btn btn-info-light text-navy text-uppercase rounded-5 px-4'>
											submit
										</button>
									</div>
								</form>
							</div>
							<div className='col-12 d-block d-md-none'>
								<img src={TvFlipped.src} alt='featured image' width='100%' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoreTVLessTalkForm
