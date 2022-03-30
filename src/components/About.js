import React from 'react';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import about from "../images/about5.webp"

const About = () => {
  return (
    <div style={{ position: "relative" }}>
    <Image src={about} style={{ width: "100%", height: "600px" }} />
                <div style={{
                    position: "absolute",
                    top:"50%" ,
                    left: "70%",
                    backgroundColor: "white",
                    transform: "translate(-50%, -50%)",
                    padding:"50px"
                }}>
                    <h3>About Us</h3>
                    <p>Podcasting operational change management inside of workflows to establish a framework.
                        Taking seamless key performance indicators offline.
                        Quickly maximize timely deliverables for real-time schemas.<br></br><br></br>
                        Dynamically procrastinate B2C users after installed base benefits.
                        Dramatically visualize customer directed the start-up mentality to derive convergence.</p>
                    <Button variant="success">Read More</Button>
                </div>
    </div>
  )
}
export default About
