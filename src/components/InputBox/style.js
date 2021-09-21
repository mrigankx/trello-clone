import { makeStyles, alpha } from '@material-ui/core'
import React from 'react'

export default makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2)
    },
    addCardContainer: {
        padding: theme.spacing(1, 1, 1, 2),
        textAlign: 'center',
        background: "#ebecf0"
    },
    "&:hover": {
        backgroundColor: alpha("#000", 0.25)
    }
}));


