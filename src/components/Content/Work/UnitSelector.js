// import React, {useState} from "react";
// import {makeStyles} from "@material-ui/core/styles";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
//
// export const UnitSelector = (props) => {
//     const {config} = props
//     const useStyles = makeStyles((theme) => ({
//         formControl: {
//             margin: theme.spacing(1),
//             minWidth: 120,
//         },
//         selectEmpty: {
//             marginTop: theme.spacing(2),
//         },
//     }));
//     const classes = useStyles();
//     const [unitId, setUnitId] = useState(0);
//
//     const handleChange = (event) => {
//         console.log(event.target.value)
//         setUnitId(event.target.value);
//     };
//     return (
//         <div>
//             <FormControl variant="outlined"  className={classes.formControl}>
//                 <InputLabel>Салон</InputLabel>
//                 <Select value={unit} onChange={handleChange} label="Салон">
//                     {config.units.map((unit, index) => <MenuItem value={index}>{unit.label}</MenuItem>)}
//                 </Select>
//             </FormControl>
//         </div>
//     )
// }
