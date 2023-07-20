import ResponsiveFilterIcon from 'components/icons/ResponsiveFilterIcon'
import XIcon from 'components/icons/XIcon'
import React, { useEffect, useState } from 'react'
import FilterDropDown from './FilterDropDown'
import { useRouter } from 'next/router'
import SortFilterDropDown from './SortFilterDropDown'

const ProductFilterResponsive = ({
	selectedFilter,
	allFilters,
	filterRequest,
	setFilters,
	sortValue,
	sortOnChange
}) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [filterCounter, setFilterCounter] = useState(0)
	const [dropdownStatus, setDropdownStatus] = useState(-1)
	const router = useRouter()
	const filterController = (e, _filter, _filterType) => {
		let _filtersBox = router?.query?.filter
			? JSON?.parse(decodeURIComponent(router?.query?.filter))
			: []
		let filterWrapperExisted = _filtersBox.find(
			item => item.id === _filter.filterId
		)
		// e.target.checked = true

		if (filterWrapperExisted) {
			if (filterWrapperExisted.values.indexOf(_filter.title) < 0) {
				let removeExitItemOfFilters = (_filtersBox = selectedFilter.filter(
					item => item.id !== _filter.filterId
				))
				_filtersBox = [
					...removeExitItemOfFilters,
					{
						id: filterWrapperExisted.id,
						type: _filterType,
						values: [...filterWrapperExisted.values, _filter.title]
					}
				]
			} else {
				let removeExitItem = filterWrapperExisted.values.filter(
					item => item !== _filter.title
				)
				let removeExitItemOfFilters = (_filtersBox = selectedFilter.filter(
					item => item.id !== _filter.filterId
				))
				if (removeExitItem.length === 0) {
					_filtersBox = [...removeExitItemOfFilters]
				} else {
					_filtersBox = [
						...removeExitItemOfFilters,
						{
							id: filterWrapperExisted.id,
							type: _filterType,
							values: removeExitItem
						}
					]
				}
			}
		} else {
			_filtersBox.push({
				id: _filter.filterId,
				type: _filterType,
				values: [_filter.title]
			})
		}
		setFilters(_filtersBox)
		filterRequest(_filtersBox)
	}

	const checkboxClearHandler = () => {
		setModalIsOpen(false)
		sortOnChange()
		setFilters([])
		filterRequest([])
	}

	useEffect(() => {
		filterCountHandler()
	}, [router?.query?.filter])

	const filterCountHandler = () => {
		if (router?.query?.filter) {
			let filters = JSON.parse(decodeURIComponent(router.query.filter))
			let filterItems = []
			filters.forEach(element => {
				filterItems.push(...element.values)
			})
			setFilterCounter(filterItems?.length)

			return
		}

		setFilterCounter(0)
	}

	return (
		<>
			<div className='product_filter_responsive'>
				<div className='clear__all_filter_button'>
					<button
						onClick={() => {
							setModalIsOpen(true)
							setDropdownStatus(0)
						}}>
						All Filters <ResponsiveFilterIcon />
					</button>
					<button onClick={checkboxClearHandler}>
						Clear Filter ({filterCounter})
					</button>
				</div>
				<ul>
					{allFilters && (
						<li>
							<button
								onClick={() => {
									setModalIsOpen(true)
									setDropdownStatus(1)
								}}>
								sort
							</button>
						</li>
					)}
					{allFilters?.map(filter => (
						<li>
							<button
								onClick={() => {
									setModalIsOpen(true)
									setDropdownStatus(filter.id)
								}}>
								{filter?.name}
							</button>
						</li>
					))}
				</ul>
			</div>
			<div
				style={{ left: modalIsOpen ? 0 : '-100%' }}
				className='product_filter_responsive_modal'>
				<div className='buttons'>
					<button onClick={checkboxClearHandler}>
						Clear Filter ({filterCounter})
					</button>
					<button
						onClick={() => {
							setModalIsOpen(false)
							setDropdownStatus(-1)
						}}>
						<XIcon />
					</button>
				</div>
				<div className='filters'>
					{dropdownStatus === 1 || dropdownStatus === 0 ? (
						<SortFilterDropDown
							sortValue={sortValue}
							dropdownStatus={dropdownStatus}
							setDropdownStatus={() => setDropdownStatus(1)}
							sortOnChange={value => {
								sortOnChange(value.value)
							}}
						/>
					) : null}
					{allFilters?.map(filter =>
						dropdownStatus === filter.id || dropdownStatus === 0 ? (
							<FilterDropDown
								{...filter}
								dropdownStatus={dropdownStatus}
								setDropdownStatus={() => setDropdownStatus(filter.id)}
								filterController={filterController}
								allFilters={allFilters}
							/>
						) : null
					)}
				</div>
			</div>
		</>
	)
}

export default ProductFilterResponsive