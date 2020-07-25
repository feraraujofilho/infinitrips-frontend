import React, { FC, useState } from 'react';
import SearchBox from '../../../component/searchBox/SearchBox';
import { Typography } from '@material-ui/core';
import useStyles from './HomeContentStyles';

const HomeContent: FC = () => {
	const [weekdaysFilter, setWeekdaysFilter] = useState<string[]>([])
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div className={classes.header}>
				<div className={classes.pageHeadings}>
					<Typography variant="h2" component="h1">
						Compare Your Next Destinations
				</Typography>
					<Typography>
						Compare side by side a roundtrip to up to 4 destinations for all possible dates in the next 6 months
				</Typography>
				</div>

				<SearchBox weekdaysFilter={weekdaysFilter} setWeekdaysFilter={setWeekdaysFilter} />
			</div>
		</div>
	);
};

export default HomeContent;
