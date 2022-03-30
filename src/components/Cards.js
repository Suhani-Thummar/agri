import React from 'react';
import onion1 from '../images/onion1.jpg';
import { Card } from 'react-bootstrap';
// import {Basket} from 'react-bootstrap-icons/';
import { BsBasketFill } from 'react-icons/bs';


  
export default   class Cards extends React.Component {
    render() {
      return (
        <Card style={{ width: '19rem', backgroundColor: 'lightgreen' }}>
        <Card.Body >
                    <Card.Img  
                    src={onion1}
                    alt=""
                    style={{ width: '105%', height: '150%' }}
                    onMouseOver={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })}
                    onMouseOut={(e) => (e.currentTarget.style = { transform: "scale(1)", overflow: "hidden" })}>
                    </Card.Img>
                    <Card.Link href="#" >
                    <h3><BsBasketFill/></h3>
                    </Card.Link>
                </Card.Body>
            <Card.Link href="#" >
            <h3><BsBasketFill/></h3>
            </Card.Link>
        <footer>
            <h4>
                <Card.Link href="#">Red Onion</Card.Link></h4>
            <h5 style={{ color: "green" }}>$6.00</h5>
            <Card.Text style={{ color: "gray" }}>per Kilogram</Card.Text>
        </footer>
    </Card>
      )
    }
  }

