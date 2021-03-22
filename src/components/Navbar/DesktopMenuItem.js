import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import {I} from '../I'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 48,
        height: 48,
    },

}));
export const DesktopMenuItem = props => {
    const classes = useStyles();
    const {title, icon, pos, checked, onClick, active, ...other} = props;
    return (
        <Tooltip title={title} arrow>
            <IconButton
                edge={pos}
                aria-label={title}
                color="inherit"
                onClick={onClick}
                {...other}
                className={classes.root}
                style={{backgroundColor: active ? '#006c72':''}}
            >
                <I>{icon}</I>
            </IconButton>
        </Tooltip>
    )
}
