import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import { useState } from 'react';
import ToList from './ToList';
const App=()=>{
  const[name,setName]=useState();
  const[Items,setItems]=useState([]);

  const eventt=(e)=>{
    console.log(e.target.value);
    setName(e.target.value);
  }
  const allVal=()=>{
    setItems((givenVal)=>{
     
     
     
     
      return [...givenVal,name];
    
    });
    setName("");
  }






  const toDelete=(id)=>{
    
    setItems((olditemms)=>{
      return olditemms.filter((arrElements,index)=>
      {
        return index!==id;
      })
    });
   
}




  return(
  <>
  <div className="main-div">
  <div className="center-div  col-10 col-md-4 col-sm-6">
  <br />
  <h1>ToDo List</h1>
  <br />
  <input style={{width:'80%',padding:'4px',}} type="text" 
  value={name} placeholder="Add a item" 
    onChange={eventt}
  />
  <button className="Butt" onClick={allVal}> + </button>
  
  
  
 

<div className="ss">

   { Items.map((itemval,index)=>{
      return <ToList key={index} 
      id={index}
      text={itemval} 
        onSelect={toDelete}
      />;
    })}
    </div>
 
  </div>
  <h6 style={{borderRightColor:"black",color:"yellow"}}>created by: Shivam singh</h6>
  </div>
 
  </>
  )};

export default App;
