
import React,{useEffect,useState}  from "react"
import Colorpicker from "./Colorpicker"
import Board from "./Board"
import Rules from "./Rules"
const Gameboard =()=>{
   

    const [showrules,setShowrules]=useState(false);
    const [color,setcolor]=useState("");
    const [code,setcode]=useState([]);

    useEffect(() => {
       let temp=[];
        let arr=["red","green","yellow","blue","orange","purple"];
       
     for (let index = 0; index <4; index++) {
        let idx = Math.floor(Math.random()*arr.length);
        temp[index]=arr[idx];
         
     }
     setcode(temp);

    }, [])
    

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
    <Board code={code} color={color}/>
</div>

)
   


}

export default Gameboard;