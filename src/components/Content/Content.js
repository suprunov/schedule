import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import {TestTask} from "./TestTask";
import {Work} from "./Work/";

export const Content = (props) => {
    const {view} = props;
    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(1200 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
        },
    }));

    const content = () => {
        switch (view) {
            case 'task': return (<TestTask />);
            case 'schedule': return (<Work />)
            default: return null
        }
    }

    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={5} >
            {content()}
        </Paper>
    )
}
