import React, { FC, ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import citiesQueries from './apollo/citiesQueries';
import { TextField, MenuItem } from '@material-ui/core';
import { City } from './interfaces/City';
import DropdownSelectCityProps from './DropdownSelectCityProps';
import useStyles from './DropdownSelectCityStyles';
import LoadingSpinner from "../loadingSpinner/loadingSpinner"

const DropdownSelectCity: FC<DropdownSelectCityProps> = ({ label, handleInputChange, name, value }) => {
	const classes = useStyles();

	const { data, loading } = useQuery(citiesQueries.Cities);

	// const destinationCities = ["London (alle)","Mailand (alle)", "Barcelona (BCN)", "Madrid (MAD)","Rom (alle)", "Porto (OPO)", "Dublin (DUB)",  "Berlin (alle)", "Palma de Mallorca (PMI)", "Edinburgh (EDI)", "Ibiza (IBZ)", "Venedig (alle)", "Nizza (NCE)"]

	const originOptions = [<MenuItem value={'Berlin (alle)'} key={'Berlin (alle)'}> Berlin (alle) </MenuItem>,
	<MenuItem value={'London (alle)'} key={'London (alle)'}> London (alle) </MenuItem>]

	const renderMenuItems = (): ReactElement[] => {
		if (name === "origin") {
			return originOptions
		}
		else {
			return data?.cities.map((city: City) => {
				return (
					<MenuItem value={city.name} key={city.name}>
						{city.name}
					</MenuItem>
				);
			})
		}
	}


	return (
		<TextField
			variant="outlined"
			className={classes.root}
			size="small"
			select
			name={name}
			label={label}
			value={value}
			onChange={handleInputChange}
			fullWidth
		>
			<MenuItem value="">
				<em>None</em>
			</MenuItem>
			{loading ? <LoadingSpinner /> : renderMenuItems()}
		</TextField>
	);
};

export default DropdownSelectCity;
