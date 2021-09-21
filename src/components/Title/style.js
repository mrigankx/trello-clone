import { makeStyles } from '@material-ui/core'
import React from 'react'

export default makeStyles((theme) => ({
    titleContainer: {
        display: "flex",
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
        fontSize: "1.2rem",
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        margin: theme.spacing(1),
        fontSize: "1.2rem",
        fontWeight: "bold",
        textAlign: "center",
        "&:focus": {
            background: "#ddd"
        }
    },


}));


