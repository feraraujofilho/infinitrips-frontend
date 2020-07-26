import React, { FC, useState } from "react"
import { Button, Menu, MenuItem } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import { DestinationsConfig } from "../flightsTable/interfaces/DestinationsConfig";

interface SortingMenuProps {
    destinations: DestinationsConfig,
    handleSorting: (element: number | string) => void,
    className?: string
}


const SortingMenu: FC<SortingMenuProps> = ({ destinations, handleSorting, className }) => {
    const [chosenOption, setChosenOption] = useState("Dates")
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOption = (index: number, destination: string) => {
        setChosenOption(`Cheapest - ${destination}`)
        console.log(index)
        setAnchorEl(null);
        handleSorting(index)
    }

    const handleDateOption = (option: string) => {
        setChosenOption(option)
        setAnchorEl(null);
        handleSorting(option)
    }

    return (
        <div className={className}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <SortIcon /> Sort by {chosenOption}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleDateOption("Dates")}>Dates</MenuItem>
                {Object.values(destinations).map((destination: string, index: number) => {
                    if (destination) {
                        return <MenuItem onClick={() => handleOption(index, destination)}>Cheapest To {destination}</MenuItem>
                    }
                })}
            </Menu>
        </div>
    );
}

export default SortingMenu