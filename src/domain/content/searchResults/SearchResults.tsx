import React, { FC, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import FlightsTable from '../../../component/flightsTable/FlightsTable'
import { get, isNumber, isString } from 'lodash'
import SearchBox from '../../../component/searchBox/SearchBox'
import useUrlSearchParams from '../../../app/hooks/useUrlSearchParams'
import SortingMenu from '../../../component/sortingMenu/SortingMenu'
import useStyles from './SearchResultsStyles'
import ExplanationColors from '../../../component/explanationColors/ExplanationColors'
import axios from 'axios'
import { Row } from '../../../app/types/Row'

const SearchResults: FC = () => {
	const [weekdaysFilter, setWeekdaysFilter] = useState<string[]>([])
	const [dynamicTableData, setDynamicTableData] = useState([])
	const [rerender, setRerender] = useState(false)
	const [resetSorting, setResetSorting] = useState(false)

	const classes = useStyles()

	const location = useLocation()
	const { state } = location
	const query = useUrlSearchParams()

	const origin = query.get('origin')
	const destination1 = query.get('destination1')
	const destination2 = query.get('destination2')
	const destination3 = query.get('destination3')
	const destination4 = query.get('destination4')
	const nights = query.get('nights')

	const destinationsObject = {
		destination1: destination1,
		destination2: destination2,
		destination3: destination3,
		destination4: destination4,
	}

	const tableData = get(state, 'data', null)
	const filters = get(state, 'filters', [])

	useEffect(() => {
		if (filters.length > 0) {
			setWeekdaysFilter(filters)
		}
	}, [filters])

	useEffect(() => {
		if (tableData) {
			setDynamicTableData(tableData)
		} else {
			axios
				.post(`${process.env.REACT_APP_BACKEND_URL}/flights`, {
					origin: origin,
					destination1: destination1,
					destination2: destination2,
					destination3: destination3,
					destination4: destination4,
					nights: nights,
				})
				.then((response) => {
					let dataForFrontend = response.data
					if (weekdaysFilter.length > 0) {
						const dataFilteredByWeekDays = dataForFrontend.filter(
							(val: Row) => {
								let valueArray = val.departuredate.split(' - ')
								if (weekdaysFilter.indexOf(valueArray[0]) > -1) {
									return val
								}
							}
						)
						dataForFrontend = dataFilteredByWeekDays
					}
					setDynamicTableData(dataForFrontend)
				})
				.catch((err) => console.log(err))
		}
	}, [tableData])

	const handleSorting = (element: number | string) => {
		if (isNumber(element)) {
			let sortedData = tableData.sort((a: any, b: any) => {
				const aValue = a[element]
				const bValue = b[element]

				if (aValue === undefined || bValue === undefined) {
					// Handle cases where one or both values are undefined
					return aValue === undefined ? 1 : -1 // Put undefined values at the end
				}

				// Handle cases where both values are defined
				return aValue - bValue
			})

			setDynamicTableData(sortedData)
		}
		if (isString(element)) {
			let sortedDataByDate = tableData.sort((a: any, b: any) => {
				let dateA = a.departuredate.split(' - ')[1]
				let dateB = b.departuredate.split(' - ')[1]
				return new Date(dateA).getTime() - new Date(dateB).getTime()
			})
			setDynamicTableData(sortedDataByDate)
		}
		setRerender(!rerender)
	}

	return (
		<div className={classes.root}>
			<SearchBox
				searchInfo={{ origin: origin, nights, ...destinationsObject }}
				weekdaysFilter={weekdaysFilter}
				setWeekdaysFilter={setWeekdaysFilter}
				setResetSorting={setResetSorting}
			/>
			<div>
				<div className={classes.sortingAndExplanation}>
					<SortingMenu
						className={classes.sortingMenu}
						destinations={destinationsObject}
						handleSorting={handleSorting}
						resetSorting={resetSorting}
						setResetSorting={setResetSorting}
					/>
					<ExplanationColors />
				</div>
				<FlightsTable
					data={dynamicTableData}
					destinations={destinationsObject}
				/>
			</div>
		</div>
	)
}

export default SearchResults
