
import React,{useEffect,useState}  from "react"
const Row =({isdisabled,color,check})=>{
console.log(isdisabled);
console.log(color)
const [circle,setcircle]=useState([{iscolor:false,color:""},{iscolor:false,color:""},{iscolor:false,color:""},{iscolor:false,color:""}]);
const addcolor=(e)=>{
let cir=e.target.id;
console.log(cir);
if(cir==="circle1"){
   
    let newArr = [...circle]; 
    newArr[0].iscolor=true; 
    newArr[0].color=color; 
    
  

    setcircle(newArr);
    
}
if(cir==="circle1"){
   
    let newArr = [...circle]; 
    newArr[0].iscolor=true; 
    newArr[0].color=color; 
    
  

    setcircle(newArr);
    
}
if(cir==="circle2"){
   
    let newArr = [...circle]; 
    newArr[1].iscolor=true; 
    newArr[1].color=color; 
    
  

    setcircle(newArr);
    
}
if(cir==="circle3"){
   
    let newArr = [...circle]; 
    newArr[2].iscolor=true; 
    newArr[2].color=color; 
    
  

    setcircle(newArr);
    
}
if(cir==="circle4"){
   
    let newArr = [...circle]; 
    newArr[3].iscolor=true; 
    newArr[3].color=color; 
    
  

    setcircle(newArr);
    
}
   
    
}
return(

    
 
    <button className="boardrow" disabled={isdisabled?false:true}>
     {!circle[0].iscolor?<button onClick={addcolor} className="circle" id="circle1"  disabled={isdisabled?false:true}></button>:<button onClick={addcolor}  id="circle1" className={circle[0].color} disabled={isdisabled?false:true} ></button>}
     {!circle[1].iscolor?<button onClick={addcolor} className="circle" id="circle2" disabled={isdisabled?false:true} ></button>:<button onClick={addcolor}  id="circle2" className={circle[1].color} disabled={isdisabled?false:true}></button>}
     {!circle[2].iscolor?<button onClick={addcolor} className="circle" id="circle3" disabled={isdisabled?false:true} ></button>:<button onClick={addcolor}  id="circle3" className={circle[2].color} disabled={isdisabled?false:true}></button>}
     {!circle[3].iscolor?<button onClick={addcolor} className="circle" id="circle4"  disabled={isdisabled?false:true}></button>:<button onClick={addcolor}  id="circle4" className={circle[3].color}disabled={isdisabled?false:true} ></button>}
     <button onClick={check}>check</button>
     <div  className="squarecontainer"> 
         <div className="square"></div>
         <div className="square"></div>
         <div className="square"></div>
         <div className="square"></div>

     </div>

</button>

)
   


}

export default Row;