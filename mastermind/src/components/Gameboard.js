
import React,{useEffect,useState}  from "react"
import Colorpicker from "./Colorpicker"
import Board from "./Board"
import Rules from "./Rules"
import Loser from "./Loser"
import Winner from "./Winner"
const Gameboard =()=>{
   

    const [showrules,setShowrules]=useState(false);
    const [color,setcolor]=useState("");
    const [code,setcode]=useState([]);
    const [winner,setwiner]=useState(false);
    const [loser,setloser]=useState(false);

    useEffect(() => {
       let temp=[];
        let arr=["redc","green","yellow","blue","orange","purple"];
       
     for (let index = 0; index <4; index++) {
        let idx = Math.floor(Math.random()*arr.length);
        temp[index]=arr[idx];
         
     }
     setcode(temp);
    

    }, [])
    
    const updateWinner=()=>{
     
    setwiner(true);

    }
    const updateLoser=()=>{
     
        setloser(true);
    
        }
     
    const rules =()=>{
    setShowrules(!showrules);
          
    }
    
 const pickAcolor=(e)=>{

 setcolor(e.target.value);
   

 }

 const reset=()=>{

  setcolor("");
  setwiner(false);
  setloser(false);
  let temp=[];
  let arr=["redc","green","yellow","blue","orange","purple"];
 
for (let index = 0; index <4; index++) {
  let idx = Math.floor(Math.random()*arr.length);
  temp[index]=arr[idx];
   
}
setcode(temp);


 }

    



return(

    
 
    <div className="boardcontainer">
   <h2>MASTERMIND</h2>
    <div className="showrules"  onClick={rules}>{showrules?"Hide rules":"Show rules"}</div>



    {showrules?<Rules/>:""}
    <Colorpicker pickAcolor={pickAcolor}/>
    <Board code={code} color={color}  updateLoser={updateLoser} updateWinner={updateWinner}/>
    {winner?<Winner  code={code} reset={reset}/>:null}
    {loser?  <Loser code={code} reset={reset}/>:null}
  
</div>

)
   


}

export default Gameboard;