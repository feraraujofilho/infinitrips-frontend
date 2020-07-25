import { makeStyles } from '@material-ui/core';
import backgroundImage from "../../../images/Mallorca.jpg"


export default makeStyles({
    root: {
        backgroundImage: `URL(${backgroundImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    },
    header: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center"
    },
    pageHeadings: {
        maxWidth: "80%"
    }
})