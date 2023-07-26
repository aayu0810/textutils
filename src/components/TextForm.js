import React, { useState } from 'react'

export default function TextForm(props) {

 const handleUpClick = ()=>{
console.log("Uppercase was clicked"+ text); 
let newText = text.toUpperCase();
setText(newText)

 }
 const handleOnchange = (event) =>{
    console.log("On change");
    setText(event.target.value)
 }

 const handleClearClick = (event) =>{
    let newText=" ";
    setText(newText)
 }

   const handleLoClick=() => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }


    const handleCapClick = ()=>{
        console.log("Capitalize First Word"+ text); 
        let newText = text.slice(0,1).toUpperCase()+ text.slice(1,text.length);
        setText(newText)
        
         }

         const handleCopy = ()=>{
            console.log("Copy the Text"); 
             var text = document.getElementById("myBox");
            text.select();
            text.setSelectionRange(0,9999);
            navigator.clipboard.writeText(text.value);
             }

             const[text,setText]= useState('');
  return (
  <>
    <div className="container" style = {{color: props.mode === 'dark'?'white':'#0e2f1f'}}>
     <h2>{props.heading}</h2>   
<div className="mb-3 ">
  <textarea className="form-control" value={text} onChange = {handleOnchange} style={{backgroundColor : props.mode ==='dark'?'grey':'white' , color : props.mode==='dark'?'white':'#0e2f1f'}}id="myBox" rows="8"></textarea>
</div>
    <button className="btn btn-success mx-1 my-1" onClick ={handleUpClick}>Convert to Uppercase</button>  
    <button className="btn btn-success mx-1 my-1" onClick ={handleUpClick}>Convert to Lowercase</button> 
    <button className="btn btn-success mx-1 my-1" onClick ={handleCapClick}>Capitalize first letter </button> 
    <button className="btn btn-success mx-1 my-1" onClick ={handleCopy}>Copy Text </button>   
    <button className="btn btn-success mx-1 my-1" onClick ={handleClearClick}>Clear Text </button>      
 </div>
<div className ="container my-2" style = {{color: props.mode === 'dark'?'white':'#0e2f1f'}}>

    <h4> YOUR TEXT SUMMARY</h4>
    <p>{text.split(" ").length } words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes required to read</p>
    <h4> PREVIEW </h4>
    <p>{text.length>0?text: "Enter something in the textbox above to preview here"}</p>

</div>

</>

  )
} 



   