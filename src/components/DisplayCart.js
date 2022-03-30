import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import data from "../products";
import { ImCross } from 'react-icons/im';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DisplayCart = () => {

    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 100) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    // let handleChange = (e) => {
    //     setNum(e.target.value);
    // }
    return (
        <div style={{ position: "relative", backgroundColor: "lightgray" }}>
            {data.map((postData) => {
                console.log(postData);
                return (

                    <Box sx={{ flexGrow: 1, margin: 3, backgroundColor: "white" }}>
                        <Grid container spacing={1} sx={{ display: "flex" }}>
                            <Grid item xs={4} sx={{ display: "flex" }}>

                                <CardMedia
                                    component="img"
                                    sx={{ width: 100, height: 90, margin: 2 }}
                                    image={postData.image}
                                    alt="Live from space album cover"
                                />
                                <CardContent>
                                    <Typography variant="h5">
                                        {postData.name}
                                    </Typography>
                                    <p style={{ color: "grey", margin: "0" }}>vendor:</p>
                                </CardContent>
                            </Grid>
                            <Grid item xs={2} spacing={2} >
                                <Typography variant='h5' align='right' sx={{ m: 2 }}>
                                    ₹{postData.price}
                                </Typography>
                            </Grid>

                            <Grid item xs={3} sx={{ display: "flex", flex: "1", justifyContent: "space-evenly" }}>
                                <Button
                                    sx={{ mb: 8, mt: 2 }}
                                    size="small"
                                    variant="contained"
                                    color='success'
                                    onClick={() => decNum(postData)}>-</Button>
                                <Typography sx={{ m: 2 }} variant='h6'> {num}</Typography>
                                <Button size="small"
                                    sx={{ mb: 8, mt: 2 }}
                                    variant="contained"
                                    color='success'
                                    onClick={() => incNum(postData)}>+</Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography variant='h5' sx={{ m: 2 }}>Total:₹{(postData.price * num).toFixed(2)}</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <ImCross size="20" color="darkgreen" style={{ margin: 10 }} />
                            </Grid>
                        </Grid>
                    </Box>
                )
            })}

            <div style={{ position: "relative", backgroundColor: "lightgray" }}>
                <Typography variant='h5' sx={{ m: 2 }}> Cart Totals</Typography>
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
                <Button size="medium"
                    sx={{ m: 3 }}
                    variant="contained"
                    color='success'>Proceed to pay</Button>
            </div>
        </div>
    )
}

export default DisplayCart;