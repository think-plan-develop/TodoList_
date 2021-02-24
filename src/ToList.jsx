import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const ToList=(props)=>{
   
   
   
   
    return (
    <div className="SStyle ">
   
    <button className="But" style={{color:"blue"}} onClick={()=>{props.onSelect(props.id)}}>X</button>
 
 
    <ol><li style={{color:"purple", textTransform:"capitalize"}}> {props.text}</li></ol>
     
     </div>)
   

}
export default ToList;