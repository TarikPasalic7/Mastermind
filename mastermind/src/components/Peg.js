
import React,{useEffect,useState}  from "react"

const Peg =({addcolor,clsname,pegid})=>{

    
return(

    
 
    <button onClick={addcolor} className={`circle ${clsname}`} id={`${pegid}`}  ></button>
    

)
   


}

export default Peg;