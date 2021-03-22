import ScheduleSelector from 'react-schedule-selector'
import React, {useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import {I} from '../../I'
import 'moment/locale/ru';
import moment from "moment";
import {UnitList} from "./UnitList";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        '& > div': {
            width: theme.spacing(3),
            height: theme.spacing(3),
            fontSize: 12,
            fontWeight: 900,
        }
    },
}));


export const Schedule = (props) => {
    const {config} = props
    const m = config.units.map((unit) => {
        return unit.schedule
    })
    const schedule = [];
    for (let i=0; i<m.length; i++) {
        for (let j = 0; j<m[i].length; j++) {
            // console.log(`i=${i}, j=${j}, s=${schedule[i][j]}`);
            if(schedule[m[i][j]]) {
                schedule[m[i][j]] += `${i},`
            }
            else {
                schedule[m[i][j]] = `${i},`
            }
        }
    }

    const UnitsAvatars = (props) => {
        const classes = useStyles();
        const {units} = props
        return (
            <>
                <AvatarGroup max={4} className={classes.small}>
                    {units.map((unit, index) => {
                        return <Avatar key={index} style={{backgroundColor: unit.color}} alt={unit.title}>{unit.title.substring(0, 1)}</Avatar>
                    })}
                </AvatarGroup>
            </>
        )
    }
    const renderCustomDateCell = (time, selected, innerRef) => (
        <div style={{ textAlign: 'center', backgroundColor: selected ? "#99f8c3" : "#FFCCD4", height: 24 }} ref={innerRef}>
            {selected ? <I>open</I>: <I>lock</I>}
        </div>
    )
    const renderTimeLabel = (time) => (
        <div>
            <Moment format="HH:mm">{time}</Moment>-<Moment format="HH:mm"add={{ hours: config.hourlyChunks }}>{time}</Moment>
        </div>
    )
    const renderDateLabel = (date) => (
        <div style={{textAlign:'center'}}>
            <Moment format="ddd, DD.MM">{date}</Moment>
        </div>
    )
    return (
        <>
            <UnitList config={config} />
            <ScheduleSelector
                selection={Object.keys(schedule)}
                numDays={7}
                minTime={config.minTime}
                maxTime={config.maxTime}
                hourlyChunks={1}
                selectionScheme={"linear"}
                startDate={config.startDate}
                renderDateCell={renderCustomDateCell}
                renderDateLabel={renderDateLabel}
                renderTimeLabel={renderTimeLabel}
            />
        </>
    )
}


