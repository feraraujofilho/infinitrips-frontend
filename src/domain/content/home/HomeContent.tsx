import React, { FC, useState } from 'react';
import SearchBox from '../../../component/searchBox/SearchBox';
import { Typography } from '@material-ui/core';
import useStyles from './HomeContentStyles';
import logo from "../../../images/Log_Fina_Branca_2.png"
import HeaderNavigation from '../../header/HeaderNavigation';


const HomeContent: FC = () => {
	const [weekdaysFilter, setWeekdaysFilter] = useState<string[]>([])
	const classes = useStyles();
	return (

		<div className={classes.content}>

			<div className={classes.pageHeadings}>
				<Typography variant="h3" component="h1">
					Compare Your Next Destinations
				</Typography>
				<Typography>
					Compare side by side a roundtrip to up to 4 destinations for all possible dates in the next 6 months
				</Typography>
			</div>
			<div className={classes.header}>
				<SearchBox weekdaysFilter={weekdaysFilter} setWeekdaysFilter={setWeekdaysFilter} />
			</div>
		</div>
	);
};

export default HomeContent;
