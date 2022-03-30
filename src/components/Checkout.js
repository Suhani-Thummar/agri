import React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ImCross } from 'react-icons/im';
import Grid from '@mui/material/Grid';
import data from "../products";
export const Checkout = () => {
    return (
        <div style={{ position: "relative", backgroundColor: "lightgray" }}>
            <h3 style={{ marginBottom: "30px" }}>Your Order</h3>

                {data.map((postData) => {
                    console.log(postData);
                    return (
                        <Box sx={{ flexGrow: 1 ,margin:4,backgroundColor:"white"}}>
                        <Grid container spacing={2} >
                            <Grid item xs={8}>
                                    <Typography variant="h5" sx={{ml:1}}>
                                        {postData.name} <ImCross size={10} /> {postData.stock}
                                    </Typography>
                                    <p style={{ color: "grey",marginLeft:"1"}}>vendor:</p>
                            </Grid>
                            <Grid item xs={4} >
                                <Typography variant='h6'>
                                    ₹{postData.price}
                                </Typography>
                            </Grid>
                        </Grid>
                        </Box>
                    )
                })}
                <div style={{ position: "relative", backgroundColor: "lightgray" }}>
                <Grid sx={{ display: "flex", m: 3 }}>
                    <Grid item xs={8} sx={{ backgroundColor: "white" }}>
                        <Typography variant='h5' sx={{ m: 2 }}> SubTotal</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ backgroundColor: "white" }}>
                        <Typography variant='h5' sx={{ m: 2 }}> ₹</Typography>
                    </Grid>
                </Grid>
                <Grid sx={{ display: "flex", m: 3 }}>
                    <Grid item xs={8} sx={{ backgroundColor: "white", }}>
                        <Typography variant='h5' sx={{ m: 2 }}> Total</Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ backgroundColor: "white" }}>
                        <Typography variant='h5' sx={{ m: 2 }}> ₹</Typography>
                    </Grid>
                </Grid>    
                </div>
        </div>
    )

}
