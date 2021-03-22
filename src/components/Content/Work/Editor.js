import ScheduleSelector from 'react-schedule-selector'
import React, {useState} from "react";
import Moment from 'react-moment';
import 'moment/locale/ru';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import hex2rgba from 'hex2rgba';



export const Editor = (props) => {
    const {config} = props
    const [schedules, setSchedules] = useState(config.units.map(unit=>unit.schedule));
    const [unitId, setUnitId] = useState(0);
    const [schedule, setSchedule] = useState(schedules[unitId]);
    const updateSchedule = (newSchedule) => {
        setSchedule(newSchedule)
        schedules[unitId] = newSchedule
        config.units[unitId].schedule = newSchedule
    }
    const handleChange = (event) => {
        const newSchedules = schedules;
        newSchedules[unitId] = schedule;
        setSchedules(schedules => newSchedules);
        setUnitId(unitId => event.target.value);
        setSchedule(schedule => schedules[event.target.value]);
    }
    const renderTimeLabel = (time) => (
        <div>
            <Moment format="HH:mm">{time}</Moment>-<Moment format="HH:mm" add={{hours: 1}}>{time}</Moment>
        </div>
    )
    const renderDateLabel = (date) => (
        <div style={{textAlign: 'center'}}>
            <Moment format="ddd, DD.MM">{date}</Moment>
        </div>
    )
    return (
        <>
            <FormControl variant="outlined">
                <InputLabel>Салон</InputLabel>
                <Select value={unitId} onChange={handleChange} label="Салон">
                    {config.units.map((unit, index) => <MenuItem key={index} value={index}>{unit.label}</MenuItem>)}
                </Select>
            </FormControl>
            <ScheduleSelector
                selection={schedule}
                numDays={7}
                minTime={config.minTime}
                maxTime={config.maxTime}
                hourlyChunks={1}
                selectionScheme={"linear"}
                startDate={config.startDate}
                selectedColor={hex2rgba(config.units[unitId].color, 1)}
                unselectedColor={hex2rgba(config.units[unitId].color, 0.1)}
                hoveredColor={hex2rgba(config.units[unitId].color, 0.5)}
                renderDateLabel={renderDateLabel}
                onChange={updateSchedule}
                renderTimeLabel={renderTimeLabel}
            />
        </>
    )
}


