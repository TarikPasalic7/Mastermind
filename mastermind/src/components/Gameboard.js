
import React,{useEffect,useState}  from "react"
import Colorpicker from "./Colorpicker"
import PLayingboard from "./Playingboard"
import Rules from "./Rules"
const Gameboard =()=>{
   

    const [showrules,setShowrules]=useState(false);
    
    

    const rules =()=>{
    setShowrules(!showrules);
          
    }
    

    



return(

    
 
    <div className="boardcontainer">
    gameboard
    <div className="showrules"  onClick={rules}>{showrules?"Hide rules":"Show rules"}</div>



    {showrules?<Rules/>:""}
    <Colorpicker/>
    <PLayingboard/>
</div>

)
   


}

export default Gameboard;