import { makeStyles } from '@material-ui/core';
import backgroundImage from "../../../images/Mallorca.jpg"


export default makeStyles({
    root: {
        minHeight: "100vh",
    },
    content: {
        minHeight: "100vh",
        backgroundImage: `URL(${backgroundImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
    },
    pageHeadings: {
        maxWidth: "80%",
        textAlign: "center",
        color: "white"
    },
    logo: {
        width: "200px",
        marginTop: "20px"
    }
})