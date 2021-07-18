
import React  from "react"
const Colorpicker =({pickAcolor})=>{

   
return(

    
 
    <div className="colorpicker">
    <button className="red" id="red" value="redc" onClick={pickAcolor} ></button>
    <button className="green" id="green" value="green"  onClick={pickAcolor} ></button>
    <button className="yellow" id="yellow" value="yellow"  onClick={pickAcolor} ></button>
    <button className="blue"   id="blue" value="blue"  onClick={pickAcolor}></button>
    <button className="orange"  id="orange" value="orange" onClick={pickAcolor} ></button>
    <button className="purple"  id="purple" value="purple"  onClick={pickAcolor} ></button>
   
</div>

)
   


}

export default Colorpicker;