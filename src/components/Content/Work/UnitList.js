import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

export const UnitList = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            listStyle: 'none',
            padding: theme.spacing(0.5),
            margin: 0,
        },
        chip: {
            margin: theme.spacing(0.5),
        },
    }));
    const classes = useStyles();
    const {config} = props
    return (
        <div className={classes.root}>
            {config.units.map((unit, index) => {
                return (
                    <Chip
                        key={index}
                        size="small"
                        avatar={<Avatar style={{backgroundColor: '#fff', color: unit.color, }}>{unit.label.substring(0, 1)}</Avatar>}
                        style={{backgroundColor: unit.color, color: '#fff'}}
                        label={unit.label}
                        className={classes.chip}
                    />
                );
            })}
        </div>
    );
}





