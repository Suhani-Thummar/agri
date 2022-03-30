import React from 'react';
import Grid from '@mui/material/Grid';
// import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@mui/system';

const TimeCard = () => {
    const gridblock= {
       
        // paddingLeft:" 20px",
        // paddingRight: '20px',
    };
    const useStyles = makeStyles(() => ({
        container: {
          borderLeft: '1px solid black', 
        textAlign:"center"       }
    }));
    const classes = useStyles();

    return (
        <div>
            <Box sx={{ m: "5%" ,width: "18%",padding:"10px", backgroundColor:" red",
            color: "white",textAlign:"center" }}>
                    <Typography sx={{mb:1}}>Time Left:</Typography>

                <Grid container  spacing={0.5}>
                    <Grid item  xs={3} sx={{textAlign:"center"}}>
                        <Typography >
                            56<br />
                            Days
                        </Typography>
                    </Grid>
                    <Grid item  xs={3} className={classes.container}>
                        <Typography >
                            87<br />
                            Hours
                        </Typography>
                    </Grid>
                    <Grid item  xs={3} className={classes.container}>
                        <Typography >
                           25
                           
                        </Typography>
                        <Typography>
                        Minutes</Typography>
                    </Grid>
                    <Grid item xs={3} className={classes.container}>
                        <Typography >
                            75<br />
                            Seconds
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default TimeCard;