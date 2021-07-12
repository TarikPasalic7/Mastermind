
import React  from "react"
const Row =({isdisabled})=>{
console.log(isdisabled);
return(

    
 
    <button className="boardrow" disabled={isdisabled?false:true}>
     <button className="circle" ></button>
     <button className="circle" ></button>
     <button className="circle" ></button>
     <button className="circle"></button>
     <button  >check</button>
     <div className="squarecontainer"> 
         <div className="square"></div>
         <div className="square"></div>
         <div className="square"></div>
         <div className="square"></div>

     </div>

</button>

)
   


}

export default Row;