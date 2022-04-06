import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { BsFillCartFill, BsPlus, BsFillBagFill } from 'react-icons/bs';
import Button from '@mui/material/Button';
import { Chart } from 'react-google-charts';
import Grid from '@mui/material/Grid';

export const List = () => {
  function getLastWeeksDate() {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7);
  }
  const startDate = getLastWeeksDate();
  function incrementDate(increment) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let increasedDate = new Date(startDate.getTime() + (increment * 86400000));
    return ((increasedDate.getDate()) + " " + month[increasedDate.getMonth()]);
  }
  const data1 = [
    ["Task", "Hours per Day"],
    ["products", 4],
    ["Eat", 4],
    ["Commute", 4],
    ["Watch TV", 4],
    ["Sleep", 4]
  ];
  const data2 = [
    ["date", "sales per day"],
    [incrementDate(1), 6],
    [incrementDate(2), 4],
    [incrementDate(3), 3],
    [incrementDate(4), 5],
    [incrementDate(5), 2],
    [incrementDate(6), 1],
    [incrementDate(7), 8]
  ];

  const option1 = {
    title: "My Daily Activities",
    is3D: true
  };
  const option2 = {
    title: "My Daily Activities",
    is3D: false
  };

  return (
    <div style={{ height: 250, width: '100%' }}>

      <Box sx={{ width: '100%' }} display="flex" gridTemplateColumns="repeat(12, 2fr)">
        <Box sx={{ p: 2, width: 1 }} xs={6}>
          <Box sx={{  width: 1 }}>
            <Typography varient="h2" sx={{ bgcolor: "#325240", color: "#f9f9f9", p: 2 }}><BsFillCartFill size={20} /> ORDERS</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography  >Total</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography>Complated</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography>Pending</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography>Processing</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography>cancelled</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography>Refunded</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography>On hold</Typography>
            <Typography  >0</Typography>
          </Box>
        </Box>
        <Box sx={{ p: 2, width: 1 }} xs={6}>
          <Box sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#325240", color: "#f9f9f9", p: 1 }} >
            <Typography varient="h2" margin={1}><BsFillBagFill size={20} /> SALES THIS MONTH</Typography>
          </Box>
          <Box sx={{ display: "flex", width:1 }}>
            <Chart
              chartType="PieChart"
              data={data1}
              options={option1}
              width="500px"
              height="400px"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%' }} display="flex" gridTemplateColumns="repeat(12, 1fr)">
        <Box sx={{p:2 ,width: 1 }} xs={6}>
        <Box sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#325240", color: "#f9f9f9", p: 1 }} >
            <Typography varient="h2" margin={1}><BsFillBagFill size={20} /> SALES THIS WEEk</Typography>
          </Box>
          <Chart
            chartType="LineChart"
            data={data2}
            options={option2}
            width="500px"
            height="400px"
          />
        </Box>
        <Box sx={{p:2,width:1 }} xs={6}>
          <Box sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#325240", color: "#f9f9f9", p: 1 }} >
            <Typography varient="h2" ><BsFillBagFill size={20} /> PRODUCTS</Typography>
            <Button sx={{ color: "#f9f9f9" }}><Typography varient="h2"><BsPlus size={20} sx={{ pt: 5 }} /> ADD NEW PRODUCTS</Typography></Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography  >Total</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography>Live</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography>Offline</Typography>
            <Typography  >0</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", m: 2 }}>
            <Typography>Pending Review</Typography>
            <Typography  >0</Typography>
          </Box>
        </Box>

      </Box>
    </div>
  )
}
