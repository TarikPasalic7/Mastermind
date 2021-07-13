
import React,{useEffect,useState}  from "react"
import Colorpicker from "./Colorpicker"
import Board from "./Board"
import Rules from "./Rules"
const Gameboard =()=>{
   

    const [showrules,setShowrules]=useState(false);
    const [color,setcolor]=useState("");
    

    const rules =()=>{
    setShowrules(!showrules);
          
    }
    
 const pickAcolor=(e)=>{

 setcolor(e.target.value);
   

 }

    



return(

    
 
    <div className="boardcontainer">
    gameboard
    <div className="showrules"  onClick={rules}>{showrules?"Hide rules":"Show rules"}</div>



    {showrules?<Rules/>:""}
    <Colorpicker pickAcolor={pickAcolor}/>
    <Board color={color}/>
</div>

)
   


}

export default Gameboard;