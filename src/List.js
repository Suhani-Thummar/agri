import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import {BsFillCartFill,BsPlus,BsFillBagFill} from 'react-icons/bs';
import Button from '@mui/material/Button';
import { Chart } from 'react-google-charts';

export const List = () => {
    
     const data = [
        ["Task", "Hours per Day"],
        ["products", 4],
        ["Eat", 4],
        ["Commute", 4],
        ["Watch TV", 4],
        ["Sleep", 4]
      ];
      
       const options = {
        title: "My Daily Activities",
        is3D: true
      };
    return (
        <div style={{ height: 250, width: '30%' }}>
            
        <Box sx={{ width: 1 }}>
        <Box sx={{p:2}}>
          <Box gridRow="span 1">
            <Typography varient="h2" sx={{bgcolor: "#325240",color:"#f9f9f9",p:2}}><BsFillCartFill size={20} /> ORDERS</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography  >Total</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography>Complated</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography>Pending</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography>Processing</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography>cancelled</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography>Refunded</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography>On hold</Typography>
            <Typography  >0</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: 1 }}>
        <Box sx={{p:2}}>
          <Box sx={{display:"flex" ,justifyContent:"space-between",bgcolor: "#325240",color:"#f9f9f9",p:1}} >
            <Typography varient="h2" margin={1}><BsFillBagFill size={20} /> PRODUCTS</Typography>
            <Button sx={{color:"#f9f9f9"}}><Typography varient="h2"><BsPlus size={20} sx={{pt:5}}/> ADD NEW PRODUCTS</Typography></Button>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography  >Total</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography>Live</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography>Offline</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between",m:2}}>
            <Typography>Pending Review</Typography>
            <Typography  >0</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: 1 ,}}>
        <Box sx={{p:2}}>
          <Box sx={{display:"flex" ,justifyContent:"space-between",bgcolor: "#325240",color:"#f9f9f9",p:1}} >
            <Typography varient="h2" margin={1}><BsFillBagFill size={20} /> SALES THIS MONTH</Typography>
          </Box>
          <Box sx={{display:"flex" ,justifyContent:"space-between"}}>
          <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
          </Box>
          <Chart
          chartType="LineChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
        </Box>
        </Box>
        </div>
    )
}
