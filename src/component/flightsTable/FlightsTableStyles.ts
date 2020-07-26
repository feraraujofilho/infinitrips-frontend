import { makeStyles } from '@material-ui/core';
export default makeStyles({
    table: {
        width: "80%",
        margin: "auto",
        textAlign: "center"

    },
    elementCard: {
        padding: "5px",
    },
    cardTable: {
        maxWidth: "800px",
        maxHeight: "100vh",
        overflow: "auto",
        '@media only screen and (max-width: 768px)': {
            width: "100%",
        },
        margin: "auto"
    }
})