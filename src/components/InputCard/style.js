import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    cardContainer: {
        padding: theme.spacing(1),
        background: "#a1fffa",
        borderRadius: "10px",
    },
    card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1)
    },
    input: {
        margin: theme.spacing(1)
    },
    addButton: {
        background: "green",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#8ad945"
        }
    },

}));


