import React from 'react';
import CartItem from './CartItem';


function Cart(props){
      
       // const arr=[1,2,3,"arun",4,5];
       const {property,onDeleteQuantity, onDecreaseQuantity, onIncreaseQuantity}=props;
        return(
        <div className="Cart">
        {
        property.map((product)=>{
            return (
            
                <CartItem product={product}
                 key={product.id}
                 onIncreaseQuantity={onIncreaseQuantity}
                 onDecreaseQuantity={onDecreaseQuantity}
                 onDeleteQuantity={onDeleteQuantity} 
                //  func={()=> console.log('hi')}
                //  isloggedin={false}
                //  jsx={<h1>Test</h1>}
                 />
            )
        })}
            </div> 
        ); 
    }

export default Cart;