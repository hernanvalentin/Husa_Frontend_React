import React from 'react'

import Image from 'public/assets/images/4k-uled/heading.jpg'

function ContactUsAboutHisense() {
	return (
		<section>
			<div class='row mx-0'>
				<div class='col-12 col-md-6 px-0 bg-black'>
					<article class='article row justify-content-center align-items-center h-100 mx-0 p-10 p-sm-20 p-md-5 p-lg-20'>
						<div class='px-xl-20'>
							<h4 class='mb-10 fs-2hx text-white'>Hisense USA</h4>
							<div class='pb-8'>
								<p class='fs-base fw-normal text-white mb-0'>
									We’re striving to become the most trusted company and loved
									brand in the U.S. Consumer Electronic and Home Appliance
									industries by offering solutions that customers desire. We
									also strive to be a company that everyone wants to work for in
									the U.S..
								</p>
							</div>
							<ul class='p-0 list-unstyled pt-8 border-primary border-top'>
								<li class='text-white fs-base fw-normal'>
									105 SATELLITE BLVD SUITE I
								</li>
								<li class='text-white fs-base fw-normal'>SUWANEE, GA</li>
								<li class='text-white fs-base fw-normal'>30024</li>
								<li class='text-white fs-base fw-normal'>USA</li>
							</ul>
						</div>
					</article>
				</div>
				<div class='col-12 col-md-6 px-0 header-secondary'>
					<img
						src={Image.src}
						alt='featured image'
						width='100%'
						height='100%'
					/>
				</div>
			</div>
		</section>
	)
}

export default ContactUsAboutHisense