import React from 'react'
import {Cart} from './Cart';

export const CartDelete = (props) => {
  return (
    <div>
    {props.cardContent.length===0 ? <h3>No todos to display</h3> :
            props.cardContent.map((cards) => {
                return(
                <div>
                <Cart cards={cards}  onDelete={props.onDelete}/>
                <hr/>
                </div>)
            })}</div>
  )
}
