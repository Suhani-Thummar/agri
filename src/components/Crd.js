import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import pexelsphoto2 from '../images/pexelsphoto2.jpeg';
import { BsCart4 } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { RiProductHuntLine, RiAccountPinBoxLine } from "react-icons/ri";

export default class Crd extends Component {
    render() {
        return (
            <>
            
            <div>
                <div>
                    <Image src={pexelsphoto2} style={{
                        opacity: "0.9",
                        backgroundSize: "cover",
                        height: "40vh",
                        width: "100%",
                        backgroundpPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                    </Image>
                </div>
                <div style={{
                    textAlign: "center",
                    position: "absolute",
                    top: "60px",
                    left: "50px",
                    color: "white",
                }}>

                    <h1><BsCart4 sx={{ height: "800px", width: "200px" }}/>8523<br></br></h1>
                    <h4 style={{left: "55px"}}>AUCTIONS</h4>
                </div>
                <div style={{
                    textAlign: "center",
                    position: "fixed",
                    top: "60px",
                    left: "400px",
                    color: "white",

                }}>
                    <h1 style={{ fontSize: "15" }}><RiProductHuntLine sx={{ height: "800px", width: "200px" }} />  116<br></br></h1>
                    <h4>PRODUCTS</h4>
                </div>
                <div style={{
                    textAlign: "center",
                    position: "fixed",
                    top: "60px",
                    left: "700px",
                    color: "white"
                }}>
                    <h1 style={{ fontSize: "15" }}><BiDollarCircle sx={{ height: "800px", width: "200px" }} />  458<br></br></h1>
                    <h4>SELLER ACOUNTS</h4>
                </div>
                <div style={{
                    textAlign: "center",
                    position: "fixed",
                    top: "60px",
                    left: "1100px",
                    color: "white"
                }}>
                    <h1 style={{ fontSize: "15" }}><RiAccountPinBoxLine sx={{ height: "800px", width: "200px" }} />  4523<br></br></h1>
                    <h4>TOTAL ACOUNTS</h4>
                </div>
            </div>
            </>
        )
        
    }
}
