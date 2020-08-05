import React, { FC, useState, useEffect } from "react"
import { Button, Menu, MenuItem } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import { DestinationsConfig } from "../flightsTable/interfaces/DestinationsConfig";
import SortingMenuProps from "./SortingMenuProps";


const SortingMenu: FC<SortingMenuProps> = ({ destinations, handleSorting, className, resetSorting, setResetSorting }) => {
    const [chosenOption, setChosenOption] = useState("Dates")
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        if (resetSorting) {
            setChosenOption("Dates")
        }
    }, [resetSorting])

    const handleClick = (event: any): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const handleOption = (index: number, destination: string): void => {
        setChosenOption(`Cheapest - ${destination}`)
        setAnchorEl(null);
        handleSorting(index)
        setResetSorting(false)
    }

    const handleDateOption = (option: string): void => {
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