import { makeStyles } from '@material-ui/core';
export default makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgb(245, 247, 249)"
    },
    sortingMenu: {
        '@media only screen and (max-width: 768px)': {
            width: "90%"
        },
        textAlign: "left",
        margin: "15px",
        '& .MuiSvgIcon-root': {
            marginRight: "8px"
        }
    }
})