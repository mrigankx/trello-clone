import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    cardContainer: {
        display: 'flex',
        width: '100%',
    }
    , card: {
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1)
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "bolder",
    }
}));


