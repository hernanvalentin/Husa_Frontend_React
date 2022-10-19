import React, { useEffect, useState } from 'react'

// component
import HamburgerMenu from './HamburgerMenu'

// icon
import HamburgerMenuIcon from 'components/icons/HamburgerMenuIcon'
import Logo from 'components/icons/Logo'
import MagnifierIcon from 'components/icons/MagnifierIcon'
import SubMenuHeader from './SubMenuHeader'
import axios from 'axios'
import { setHeaderData } from 'redux/slices/layout'
import { useDispatch, useSelector } from 'react-redux'
import NavBarDropDown from './NavBarDropDown'

function Header({ isBlog = false, data: { structure } }) {
	const dispatch = useDispatch()
	const { headerData } = useSelector(state => state.layoutData)
	const [asideMenu, setAsideMenu] = useState(false)
	const [topNavCondition, setTopNavCondition] = useState(false)
	const [searchInputCondition, setSearchInputCondition] = useState(false)

	useEffect(() => {
		if (!searchInputCondition) {
			setTimeout(() => {
				setTopNavCondition(true)
			}, 800)
		} else {
			setTopNavCondition(false)
		}
	}, [searchInputCondition])
	useEffect(() => {
		!headerData && getMenu()
	}, [])

	const getMenu = async () => {
		try {
			let response = await axios.get(
				'https://imcxm.dev-api.hisenseportal.com/api/husa/getMenus'
			)
			console.log(response.data.data)
			dispatch(
				setHeaderData(response.data.data.find(item => item.title === 'header'))
			)
			console.log(response.data.data);
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<header>
			<nav
				style={{ transitionDelay: '2s' }}
				className={`navbar navbar-expand justify-content-center  
					theme-${structure.theme.value}
				 top-nav py-4 px-sm-4 fixed-top flex-wrap ${
						!topNavCondition && 'search-mode'
					} ${asideMenu || searchInputCondition ? 'hidden' : ''}`}>
				<div className='container-fluid'>
					<div className='row justify-content-between align-items-center w-100 m-auto'>
						<a
							href='/pages/landing/index.html'
							className='navbar-brand m-0 col-xl-4 text-start'>
							<Logo />
						</a>
						<h1>Hisense</h1>
						<ul className='navbar-nav col-xl-4 d-none d-lg-flex justify-content-center p-0'>
							{headerData?.widgets?.centerOption.map((item, index) => (
								<NavBarDropDown key={`right-${index}`} data={item} />
							))}
						</ul>
						<ul className='navbar-nav align-items-center justify-content-end p-0 col-4'>
							{headerData?.widgets?.rightOption.map((item, index) => (
								<NavBarDropDown key={`right-${index}`} data={item} />
							))}

							<li className='nav-item-button' data-button='search'>
								<button
									className={`btn search-icon p-2  ${
										searchInputCondition && 'open'
									}`}
									onClick={() => setSearchInputCondition(!searchInputCondition)}
									aria-label='search'>
									<MagnifierIcon />
								</button>
							</li>
							<li className='nav-item-button' data-button='menu'>
								<button
									className={`btn hamburger-icon p-2 ${
										asideMenu || searchInputCondition ? 'close' : ''
									}`}
									onClick={() =>
										searchInputCondition
											? setSearchInputCondition(false)
											: setAsideMenu(!asideMenu)
									}
									aria-label='hamburger menu toggler'>
									<HamburgerMenuIcon />
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div className='container-fluid'>
					<form
						className={`search-form col-12 col-sm-7 ${
							searchInputCondition && 'visible'
						}`}>
						<button className='btn py-0' type='button' aria-label='search item'>
							<MagnifierIcon />
						</button>
						<input placeholder='SEARCH' className='search-box' type='text' />
					</form>
				</div>
				{/* <SubMenuHeader /> */}
			</nav>

			{/* <div className='container-fluid home-top-advertisement'>
				<a href='https://www.hisense-usa.com/product-safety-recall'>
					Recall Information: French Door Refrigerator
				</a>
			</div> */}
			{headerData && <HamburgerMenu data={headerData} asideMenu={asideMenu} />}
		</header>
	)
}

export default Header
