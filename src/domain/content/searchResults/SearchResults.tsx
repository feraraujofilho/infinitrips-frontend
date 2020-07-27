import React, { FC, useState, useEffect, MouseEvent, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import FlightsTable from '../../../component/flightsTable/FlightsTable';
import { get, isNumber, isString } from 'lodash';
import SearchBox from '../../../component/searchBox/SearchBox';
import HeaderNavigation from '../../header/HeaderNavigation';
import useUrlSearchParams from '../../../app/hooks/useUrlSearchParams';
import SortingMenu from '../../../component/sortingMenu/SortingMenu';
import useStyles from "./SearchResultsStyles"
import Airplane from "../../../images/airplan.png"
import AnimatedBackground from '../../../template/AnimatedBackground';


const SearchResults: FC = () => {
	const [weekdaysFilter, setWeekdaysFilter] = useState<string[]>([])
	const [dynamicTableData, setDynamicTableData] = useState([])
	const [rerender, setRerender] = useState(false)

	const classes = useStyles()

	const location = useLocation();
	const { state } = location;
	const query = useUrlSearchParams();

	const origin = query.get('origin');
	const destination1 = query.get('destination1');
	const destination2 = query.get('destination2');
	const destination3 = query.get('destination3');
	const destination4 = query.get('destination4');
	const nights = query.get('nights');

	const destinationsObject = {
		destination1: destination1,
		destination2: destination2,
		destination3: destination3,
		destination4: destination4
	};

	const tableData = get(state, 'data', null);
	const filters = get(state, 'filters', [])


	useEffect(() => {
		if (filters.length > 0) {
			setWeekdaysFilter(filters)
		}
	}, [filters])


	useEffect(() => {
		if (tableData) {
			setDynamicTableData(tableData)
		}
	}, [tableData])

	const handleSorting = (element: number | string) => {
		if (isNumber(element)) {
			let sortedData = tableData.sort((a: any, b: any) => a[element] - b[element])
			setDynamicTableData(sortedData)
		}
		if (isString(element)) {
			let sortedDataByDate = tableData.sort((a: any, b: any) => {
				let dateA = a.departuredate.split(" - ")[1]
				let dateB = b.departuredate.split(" - ")[1]
				return new Date(dateA).getTime() - new Date(dateB).getTime()
			})
			setDynamicTableData(sortedDataByDate)
		}
		setRerender(!rerender)
	}


	return (
		<div className={classes.root}>
			<SearchBox searchInfo={{ origin: origin, nights, ...destinationsObject }} weekdaysFilter={weekdaysFilter} setWeekdaysFilter={setWeekdaysFilter} />
			<SortingMenu className={classes.sortingMenu} destinations={destinationsObject} handleSorting={handleSorting} />
			<FlightsTable data={dynamicTableData} destinations={destinationsObject} />
		</div>
	);
};

export default SearchResults;
