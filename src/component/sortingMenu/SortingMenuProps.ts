import { DestinationsConfig } from './../flightsTable/interfaces/DestinationsConfig';
import { Dispatch, SetStateAction } from 'react';

export default interface SortingMenuProps {
    destinations: DestinationsConfig,
    handleSorting: (element: number | string) => void,
    className?: string,
    resetSorting?: boolean
    setResetSorting: Dispatch<SetStateAction<boolean>>
}