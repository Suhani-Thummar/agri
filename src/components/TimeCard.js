import React from 'react';
import Grid from '@mui/material/Grid';
// import {Timers} from './Timers';
// import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';

const TimeCard = ({onSubmit}) => {
    const useStyles = makeStyles(() => ({
        container: {
            borderLeft: '1px solid black',
            textAlign: "center"
        }
    }));
    const classes = useStyles();
    // const d = new Date();
    // const diff = end.getTime() - d.getTime();
    // const day =  new
    //     Math.floor(onSubmit.diff / (1000 * 60 * 60 * 24));
    
    // const hour =  new
    //     Math.floor((onSubmit.diff / (1000 * 60 * 60)) % 24);
    
    // const min = new
    //     Math.floor((onSubmit.diff / (1000 * 60)) % 60);
    
    // const sec = new
    //     Math.floor((onSubmit.diff / 1000) % 60);
    return (
        <div>

            <Box sx={{
                m: "5%", width: "20%", padding: "10px", backgroundColor: " red",
                color: "white", textAlign: "center"
            }}>
                <Typography sx={{ mb: 1 }}>Time Left:</Typography>

                <Grid container spacing={0.5}>
                    <Grid item xs={3} sx={{ textAlign: "center" }}>
                        <Typography>
                            <h5>15</h5>
                            Days
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.container}>
                        <Typography >
                            <h5>20</h5>
                            Hours
                        </Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.container}>
                        <Typography >
                            <h5>30</h5>
                            Min</Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.container}>
                        <Typography >
                            <h5>49</h5>
                            Sec
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default TimeCard;