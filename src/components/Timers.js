import * as React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
// import { Box } from '@mui/system';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import { TransformTwoTone } from '@mui/icons-material';
const Timers = () => {
  const [value, setValue] = React.useState({
    start: "",
    end: "",
  });
  const { start, end } = value;

  // const [diff, setdiff] = React.useState();
  const onSubmit = () => {
    setInterval(() => {
      const d = new Date();

      if (
        (end.getTime() - d.getTime()) >= 0 && start.getTime() <= d.getTime()) {
        const d = new Date();
        // console.log("month diff : ",end.getMonth()-d.getMonth())
        const diff = end.getTime() - d.getTime();

        // d.setMonth(end.getMonth())
        
        console.log("diff: ", diff)
        console.log("day diff : ", Math.floor(diff / (1000 * 60 * 60 * 24)))
        console.log("Hours diff : ", Math.floor(diff / (1000 * 60 * 60)) % 24)
        console.log("Minutes diff : ", Math.floor(diff / (1000 * 60)) % 60)
        console.log("Seconds diff : ", Math.floor(diff / 1000) % 60)

      } else if ((end.getTime() - d.getTime()) <= 0) {

        console.log("time ended")
      }
      else {
        console.log("comimg soon")
      }
    }, 1000)
  }
  return (
    <div style={{ marginTop: "100px", display: "flex", flexDirection: "column" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ mt: 4 }}>
        <DateTimePicker
          clearable
          label="Start Date"
          value={start}
          minDate={new Date()}
          onChange={(newValue) => {
            setValue({
              ...value,
              start: newValue,
            });
          }}
          renderInput={(props) => <TextField {...props} />}

        />
      </LocalizationProvider>
      <br />
      <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ mt: 4 }}>
        <DateTimePicker
          clearable
          label="End Date"
          value={end}
          minDate={start}
          onChange={(newValue) => {
            setValue({
              ...value,
              end: newValue,
            });
          }}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
      <Button
        onClick={onSubmit}>
        Submit
      </Button>
      <br />
      <p>{JSON.stringify(value)}</p>
      <br />
    </div>
  )
}

export default Timers