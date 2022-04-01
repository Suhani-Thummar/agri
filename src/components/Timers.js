import * as React from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';

// import TimeCard from './TimeCard';

const Timers = () => {
  const [value, setValue] = React.useState({
    start: "",
    end: "",
  });
  const { start, end } = value;
  const [time ,setTime] = React.useState({
    day:0,
    hour:0,
    min:0,
    sec:0
  });
  const useStyles = makeStyles(() => ({
    container: {
        borderLeft: '1px solid black',
        textAlign: "center"
    }
}));
const classes = useStyles();
const submit = (e) =>{
  e.preventDefault();
      alert("start time or end time can not be blanked!!");
}

//   const timecard = (start, end) => {
//     setInterval(() => {
//     console.log("Adding this todo", start, end);
//     const d = new Date();
//     if (
//       (end.getTime() - d.getTime()) >= 0 && start.getTime() <= d.getTime()) {
//       const d = new Date();
//       const diff = end.getTime() - d.getTime();
//       <TimeCard timecard={timecard}/>
//     }
//     else if ((end.getTime() - d.getTime()) <= 0) {
//       console.log("time ended");
//       <h1>Time ended</h1>
//     }
//     else {
//       console.log("comimg soon");
//       <h1>coming soon</h1>
//     }
//     const myTime = {
//       start: start,
//       end: end,
//     }
//     setValue([...value, myTime]);
//     console.log(myTime);
//   },1000)
// }
  // const [diff, setdiff] = React.useState();

  const displayTimebox =()=>{
      if(start !== "" && end !=="")
      {
          setInterval(() => {
            const d = new Date();
            if (
              (end.getTime() - d.getTime()) >= 0 && start.getTime() <= d.getTime()) {
              const d = new Date();
              const diff = end.getTime() - d.getTime();
              const day =  Math.floor(diff / (1000 * 60 * 60 * 24));
              const hour =  Math.floor((diff / (1000 * 60 * 60)) % 24);
              const min =  Math.floor((diff / (1000 * 60)) % 60);
              const sec = Math.floor((diff / 1000) % 60);
              setTime({
                day:day,
                hour:hour,
                min:min,
                sec:sec
              })
              console.log("diff: ", diff);
              console.log("day diff : ", day);
              console.log("Hours diff : ", hour);
              console.log("Minutes diff : ", min);
              console.log("Seconds diff : ", sec);
            } else if ((end.getTime() - d.getTime()) <= 0) {
              console.log("time ended");
              setTime({
                day:0,
                hour:0,
                min:0,
                sec:0
              })
            }
            else {
              console.log("comimg soon");
              setTime({
                day:0,
                hour:0,
                min:0,
                sec:0
              })
            }
          }, 1000)
        return (<div>
          <Box sx={{
            m: "5%", width: "25%", padding: "10px", backgroundColor: "green",
            color: "white", textAlign: "center"}}>
            <Typography sx={{ mb: 1 }}>Time Left:</Typography>
            <Grid container spacing={0.5}>
                <Grid item xs={3} sx={{ textAlign: "center" }}>
                    <Typography>
                    <h5>{time.day}</h5>
                        Days
                    </Typography>
                </Grid>
                <Grid item xs={3} className={classes.container}>
                    <Typography >
                        <h5>{time.hour}</h5>
                        Hours
                    </Typography>
                </Grid>
                <Grid item xs={3} className={classes.container}>
                    <Typography >
                        <h5>{time.min}</h5>
                        Min</Typography>
                </Grid>
                <Grid item xs={3} className={classes.container}>
                    <Typography >
                        <h5>{time.sec}</h5>
                        Sec
                    </Typography>
                </Grid>
            </Grid>
        </Box>
          </div>);
      }else{
        return(<h1>select time</h1>)
      }
  }
  return (
    <div style={{ marginTop: "100px", display: "flex", flexDirection: "column" }}>
    <form onSubmit={submit}>
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
      <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ mt: 10 }}>
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
      <br/>
      <Button>
        Submit
      </Button>
      </form>
      <br />
       <p>{JSON.stringify(value)}</p>
      <div>
      {displayTimebox()}</div>
      <br />
    </div>
  );
}
export default Timers