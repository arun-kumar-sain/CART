
import React from 'react';
import NavBar from "./MyComponents/NavBar";
import Cart from "./MyComponents/Cart";
// import * as firebase from "./firebase";
import  {app} from './firebase';
// import firestore from "firebase/app";
import { orderBy, limit ,setDoc, getFirestore,increment,onSnapshot,getDocs, query, where,updateDoc, collection, addDoc, doc ,getDoc,deleteDoc} from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore"; 
// import { doc, onSnapshot,firestore } from "firebase/firestore/app";

const db = getFirestore(app);//instance of database
// const col = collection(db, "collection_name");
 class App extends React.Component{
  constructor(){
        super();
        this.state={
        property:[],
        loading:true
    }
  }

  componentDidMount(){
    const ref=collection(db, "products");
    // const getDocument=async()=>{
      const q=query(ref,orderBy("price","desc"),limit(6));
const unsub = onSnapshot(q, (doc1) => {
const property=doc1.docs.map((doc1)=>{
  // return doc.data();
  // doc1=query(db,orderBy("salary"),limit(1)); 
  const data=doc1.data();
  data['id']=doc1.id;
  return data;
})
this.setState({
  property,
  loading:false
  // if same name or else property:property1
// })
})})

// };
  //  getDocument();

 }
//   componentDidMount(){
//     const getDocument=async()=>{
//     //   const ref=doc(db,"products","NEfDb53UGPvJjq0AHEY4");
//     //  const snap=await getDoc(ref);
//     // console.log(snap.data());
//  const collectionref=collection(db,"products");
//  const q=query(collectionref);
// const snapshot=await getDocs(q);
// //const property=snapshot.forEach((data)=>{ return data.data();});
// const property=snapshot.docs.map((doc)=>{
//   // return doc.data();
//   const data=doc.data();
//   data['id']=doc.id;
//   return data;
// })
// this.setState({
//   property,
//   loading:false
//   // if same name or else property:property1
// })
// };
//    getDocument();


//    }
// componentDidMount(){
//   firebase
//   .firestore()
// }

  handleIncreaseQuantity=(product)=>{
    
    const {property}=this.state;
    var index=property.indexOf(product);
    // var index=property[k].id;
    // this.setState({
    //   qty:temp
    // })
    // const docRef=this.db.collection('product').update({qty:temp});
   var w=property[index].id;
  //   const updateone=collection(db,"products",w);
  //  updateone.set({
  //   qty:property[index].qty+1
  //  });
  // property[index].qty +=1;
  const getDoc=async()=>{
  const ref=doc(db,'products',w);
 await updateDoc(ref,{
    qty: property[index].qty+1,
 });
  }
  getDoc();

  }
  handleDecreaseQuantity=(product)=>{
    
    const {property}=this.state;
    var index=property.indexOf(product);
    // if(property[k].qty===0){
    //   return;
    // }
    // property[k].qty -=1;
    // this.setState({
    //   property:property
    // })
    var w=property[index].id;
    const getDoc=async()=>{
      const ref=doc(db,'products',w);
      await updateDoc(ref,{
      qty: property[index].qty-1,
 });
    }
    getDoc();
  }
  handleDeleteQuantity=(id)=>{
    const{ property }=this.state;
    // const items=property.filter((item)=>item.id!==id);
    // // it will return the arrray 
    // this.setState({
    //   property:items
    // })
    // var index=property.indexOf(product);
    // var subdoc=property[index];
    const del=async()=>{
      await deleteDoc(doc(db,"products",id));
    }
  del();
  }
  TotalCount =() =>{
    let count=0;
    const{property}=this.state;
    for(var i=0;i<property.length;++i){
      count +=property[i].qty;
    }
   // product.forEach((item)=>{count +=item.qty;})
    return count;
  }
  TotalPrice=()=>{
    let price=0;
    const{property}=this.state;
    for(var i=0;i<property.length;++i){
      price +=(property[i].price)*(property[i].qty);
    }
    return price;
  }
  

   
    
  render() {
    const {property,loading}=this.state;
    const add=()=>{
addDoc(collection(db,"products"),{
  title:"Delhi",
  pincode:1234,
  lat:345,
  qty:1,
price:3,
});
    }
    // const getDocument=async()=>{
    //   const ref=doc(db,"products","NEfDb53UGPvJjq0AHEY4");
    //  const snap=await getDoc(ref);
    //  console.log(snap.data().title);
    // }
    // const writeData=async()=>{
    //   const result=await addDoc(collection(db,"cities"),{
    //     name:"delhi",
    //     pincode:1234,
    //   });
    //   console.log("result",result);
    //  }
      return (
       <div className="App">
         <NavBar 
          count={this.TotalCount}
          //count={this.TotalCount()}-->passing directly the value
          />
      
        <Cart 
        property={property}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteQuantity={this.handleDeleteQuantity} 
        />
        {loading && <h1>Loading...</h1>}
         <div style={{padding:10,fontSize:20}}>TOTAL :{this.TotalPrice()}</div> 
         <button onClick={add}>add</button>
      </div>

        );
        
      }
 }

export default App;
// important navbar and cart cannot share 
//as in react data can flow from parent to child
//and both navbar and cart are the child of APP.js
//so we have state in app so that both can access it