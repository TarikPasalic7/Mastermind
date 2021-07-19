
import React from "react"

const Peg =({addcolor,clsname,pegid,isdisabled})=>{

    
return(

    
 
    <button onClick={addcolor} className={`circle ${clsname}`} id={`${pegid}`}  disabled={isdisabled?false:true} ></button>
    

)
   


}

export default Peg;