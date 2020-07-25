import { makeStyles } from '@material-ui/core';
export default makeStyles({
    root: {
        width: "50%",
        '& .MuiInputLabel-animated': {
            color: "rgb(75, 160, 180)",
        },
        '& .MuiSelect-select.MuiSelect-select': {
            color: "rgb(75, 160, 180)"
        },

    },
    checkbox: {
        color: "rgb(75, 160, 180)",
        '& .Mui-checked': {
            color: "rgb(75, 160, 180)"
        },
    }
})