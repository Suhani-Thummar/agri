import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import vendor1 from './images/vendor1.png';
import id1 from "./images/id1.jpg"
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { Box } from '@mui/system';
import { Grid, Typography } from '@mui/material';
// import { Card } from 'react-bootstrap';

export default function VendorCard() {
  return (
    <div style={{display: "flex"}}>
         <Grid sx={{ position: "relative", width: "20%", height: "50%" }}>
        <Box
          component="img"
          sx={{
            height: 200,
            width: 250,
          }}
          alt="The house from the offer."
          src={vendor1}
        />
        <Typography sx={{
          position: "absolute", top: "8px",
          left: '16px'
        }}>Hello</Typography>
        <Typography  sx={{
          position: "absolute", top: "30px",
          left: '16px',color: 'grey'
        }}>Vidikovacki Venac 33,<br />
          8 Beograd,<br />
          Belgrade, Serbia
          <br />
          +381646758050
        </Typography>
        <Avatar alt="Remy Sharp"
          src={id1}
          sx={{
            width: 70, height: 70, mb: 5, position: "absolute", bottom: "5px", border: 5, borderColor: "grey",
            right: '18px'
          }}
          aria-label="recipe">
        </Avatar>
        <Grid container sx={{ borderTop: "5" }}>
          <IconButton >
            <IoIosArrowDroprightCircle color='green' sx={{ mt: 5 ,position: "absolute", bottom: "5px",left:"18px"}} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid sx={{ position: "relative", width: "20%", height: "50%"}}>
      <Box
        component="img"
        sx={{
          height: 200,
          width: 250,
        }}
        alt="The house from the offer."
        src={vendor1}
      />
      <Typography sx={{
        position: "absolute", top: "8px",
        left: '16px'
      }}>Hello</Typography>
      <Typography  sx={{
        position: "absolute", top: "30px",
        left: '16px',color: 'grey'
      }}>Vidikovacki Venac 33,<br />
        8 Beograd,<br />
        Belgrade, Serbia
        <br />
        +381646758050
      </Typography>
      <Avatar alt="Remy Sharp"
        src={id1}
        sx={{
          width: 70, height: 70, mb: 5, position: "absolute", bottom: "5px", border: 5, borderColor: "grey",
          right: '18px'
        }}
        aria-label="recipe">
      </Avatar>
      <Grid container sx={{ borderTop: "5" }}>
      <hr style={{height:5,color:"green"}}></hr>
        <IconButton >
          <IoIosArrowDroprightCircle color='green' sx={{ mt: 5 ,position: "absolute", bottom: "5px",left:"18px"}} />
        </IconButton>
      </Grid>
    </Grid>
    </div>
  );
}
