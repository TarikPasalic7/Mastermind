
import React,{useEffect,useState}  from "react"
import Peg from "./Peg"
let columnvalidation=[{col:""},{col:""},{col:""},{col:""}];
const Row =({isdisabled,check,color, pegGuess,index,code})=>{
    const [circle,setcircle]=useState([{iscolor:false,color:""},{iscolor:false,color:""},{iscolor:false,color:""},{iscolor:false,color:""}]);
    const [checkEnabled,setCheckEnabled]=useState(false);
    useEffect(() => {
       setcircle([{iscolor:false,color:""},{iscolor:false,color:""},{iscolor:false,color:""},{iscolor:false,color:""}])
    }, [code])

    const addcolor=(e)=>{
        let cir=e.target.id;
        console.log(cir)
    
        if(cir==="circle1"){
           
            let newArr = [...circle]; 
            newArr[0].iscolor=true; 
            newArr[0].color=color; 
            
          console.log(color)
        
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
if(circle[0].iscolor && circle[1].iscolor && circle[2].iscolor && circle[3].iscolor  )
    setCheckEnabled(true);

        }
   
    

return(

    
 
    <button className="boardrow" disabled={isdisabled?false:true} >
    {console.log(2)}
    {!circle[0].iscolor?<Peg  addcolor={addcolor} clsname=""  pegid={"circle1"} disabled={isdisabled?false:true}/> :<Peg addcolor={addcolor} pegid={"circle1"}   clsname={`${circle[0].color} `} disabled={isdisabled?false:true}/>}
    {!circle[1].iscolor?<Peg  addcolor={addcolor} clsname=""  pegid={"circle2"}  disabled={isdisabled?false:true}/> :<Peg addcolor={addcolor} pegid={"circle2"}   clsname={`${circle[1].color} `} disabled={isdisabled?false:true}/>}
    {!circle[2].iscolor?<Peg  addcolor={addcolor} clsname=""  pegid={"circle3"}  disabled={isdisabled?false:true}/> :<Peg addcolor={addcolor} pegid={"circle3"}   clsname={`${circle[2].color} `} disabled={isdisabled?false:true}/>}
    {!circle[3].iscolor?<Peg  addcolor={addcolor} clsname=""  pegid={"circle4"} disabled={isdisabled?false:true}/> :<Peg addcolor={addcolor}  pegid={"circle4"}  clsname={`${circle[3].color} `} disabled={isdisabled?false:true}/>}
     <button onClick={()=>check(circle,index)} disabled={checkEnabled?false:true} >check</button>
     <div  className="squarecontainer"> 
        

  <div className={`square  ${pegGuess[index][0].col}`}></div>
         <div className={`square  ${pegGuess[index][1].col}`}></div>
         <div className={`square  ${pegGuess[index][2].col}`}></div>
         <div className={`square  ${pegGuess[index][3].col}`}></div>

     </div>

</button>

)
   


}

export default Row;