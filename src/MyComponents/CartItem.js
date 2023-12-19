import React from 'react';
//before it was the class and need to use this for props
const CartItem=(props)=>{
  //function should be in class
    // constructor(){
    //   super();
    //   this.state={
    //     price:999,
    //     title:'MOBILE PHONE',
    //     qty:1,
    //     img:'',
    //   }
    // // this.testing();
    // }
//  testing(){
//   const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve('done');
//     },5000);
//   })
//   promise.then(()=>{
//     //setState is asynchronous means it will 
//     //react perform batching
//     this.setState({qty:this.state.qty+10});
//     this.setState({qty:this.state.qty+10});
//     this.setState({qty:this.state.qty+13},()=>{ console.log(this.state);});
//   //result will be 1+13=14
   
//   })
//  }
 //need to use arrow function to have the reference in 'this' or we can use the bind
 //this.increase=this.increase.bind(this);
//  increase=()=> {
 //shallow merging
 //this.state.qty +=1 -->can be understand by javascript to increase object but not by react
 //method =1 object form (it will follow batching when multiple copy)
//this.setState({ qty: this.state.qty+1 },()=>{});-->2nd argument is call back function
//method=2 function form (used when previous state is required)
//remember () not in return 
// setTimeout(()=>{
// this.setState((prevstate)=>{return{qty:prevstate.qty+1 }  }
//             ,()=>{console.log(this.state)});
// },10)
// }
//setState is asynchronus don't know when it will finish that previous thing update will be seen but 
//at back process will still go
//so to see update in console we use call back function at 2nd ARGUMENT of SETSTATE
//callback is called after the state finished updating
// decrease=()=>{
//   const{qty}=this.state;
//   if(qty==0){
//     return;
//   }
//   this.setState((prestate)=>{ return{ qty: prestate.qty-1 } });
// }


  // console.log("entered");
/*can store the value has:
var k=this.state;
can use has {k["title"]} or {k.title}
var {title,r,q}=this.state;-->in this name should be exact */


  const {title,price,qty}=props.product;
  const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteQuantity}=props;
    return(
<div className="cart-item" >
  {/* {this.props.jsx} */}
  <div className="left-block">
      <img  style={styles.image} src={product.img}/>
      {/*  BOTH ARE SAME    <img alt="Item" style={styles["image"]}*/}
  </div>
  <div className="right-block">
    <div style={{fontSize:20,margin:5}}>{title}</div>
    <div style={{color:'#777',fontSize:20,margin:5}}>RS.{price}</div>
    <div style={{color:'#777',fontSize:20,margin:5}}>QTY:{qty}</div>
    <div className="cart-item-actions">
      {/*Buttton*/}
      <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
      onClick={()=>{onIncreaseQuantity(product)}}/>
      <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
      onClick={()=>{onDecreaseQuantity(product)}}/>
      {/* has we have wrote const for product ,onDecreaseQuantity */}
      <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/484/484662.png"
      onClick={()=>{onDeleteQuantity(product.id)}}/>

      
    </div>
  </div>
</div>
    );
    } 

const styles={
  image:{
    height:140,
    width:110,
    borderRadius:4,
    backgroundColor:'#ccc',

  }
}
export default CartItem;