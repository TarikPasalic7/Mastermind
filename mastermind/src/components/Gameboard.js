
import React,{useEffect,useState}  from "react"
import Colorpicker from "./Colorpicker"
import Board from "./Board"
import Rules from "./Rules"
import Loser from "./Loser"
import Winner from "./Winner"
let countattempts=0;
const Gameboard =()=>{
   

    const [showrules,setShowrules]=useState(false);
    const [color,setcolor]=useState("");
    const [code,setcode]=useState([]);
    const [winner,setwiner]=useState(false);
    const [loser,setloser]=useState(false);



    const [nextrow,setnextrow]=useState([{row:true},{row:false},{row:false},{row:false},{row:false},
      {row:false},{row:false},{row:false},{row:false},{row:false}]);

      const [pegGuess,setpegGuess] =useState([[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]
      ,[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]]);
      


    useEffect(() => {
       let temp=[];
        let arr=["redc","green","yellow","blue","orange","purple"];
       
     for (let index = 0; index <4; index++) {
        let idx = Math.floor(Math.random()*arr.length);
        temp[index]=arr[idx];
         
     }
     setcode(temp);
    

    }, [])


    useEffect(() => {
      setpegGuess([[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]
      ,[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],
      [{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]]);
      setnextrow([{row:true},{row:false},{row:false},{row:false},{row:false},
       {row:false},{row:false},{row:false},{row:false},{row:false}])
   }, [code])
/**
 * 
 * 
 * Cheeck
 */



 const check =(usercode,index)=>{
  let counter=0;

  let equalcode=[false,false,false,false];
 
  for (let index = 0; index < usercode.length; index++) {
     if(usercode[index].iscolor===true)
     counter++;
      
  }
  
  if(counter!==4)
  {
      return
  }

  else{
      let correct=0;
      let correctcolor=0;
     if(code[0]===usercode[0].color)
     {
         correct++;
          equalcode[0]=true;
     }    
     if(code[1]===usercode[1].color)
     {
         correct++;
         equalcode[1]=true;
     } 
     if(code[2]===usercode[2].color)
     {
      correct++;
      equalcode[2]=true;
     } 
      if(code[3]===usercode[3].color)
     {
      correct++;
      equalcode[3]=true;
      
     }
     if(correct===4)
     {
         
         updateWinner();
         return;
     }
     countattempts++;
     if(countattempts===10)
     {
         updateLoser();
         return;
         
     }
 
 
let tempCode=[];
for (let i = 0; i < code.length; i++) {
 tempCode.push(code[i]);
  

}
let tempUserCode=[{color:""},{color:""},{color:""},{color:""}];
for (let i = 0; i < code.length; i++) {
 tempUserCode[i].color=usercode[i].color;
   
}

 correct=0;

for (let i = 0; i < tempUserCode.length; i++) {
if(tempUserCode[i].color ===tempCode[i])
{
correct++;
tempUserCode[i].color=-1;
tempCode[i]=-1;
}

}

for (let i = 0; i < tempCode.length; i++) {
let notIncluded = true;
if(tempCode[i]===-1) continue;
for (let j = 0; j < tempUserCode.length; j++) {
  if(tempUserCode[j].color===-1) continue;
    else if(tempCode[i]===tempUserCode[j].color){
        correctcolor++;
        tempUserCode[j].color=-1;       
       break;
    }
   
     

  
   
}



}







   
   
         let arr2=[...pegGuess];
   
    for (let i = 0; i < correct; i++) {
     arr2[index][i].col="col-green";
     
        
    }
    for (let i = correct; i < correct+correctcolor; i++) {
       
      arr2[index][i].col="col-yellow";
        
    }
     setpegGuess(arr2)

     for (let i = 0; i < nextrow.length; i++) {
        if(nextrow[i].row===true)
        {
          let arr=[...nextrow];
          arr[i].row=false;
          arr[++i].row=true;
          setnextrow(arr);
          break;
        }
         
     }


  }
  
  

  }








//******************************* */
    
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
countattempts=0;
setpegGuess([[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]
,[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]])
setnextrow([{row:true},{row:false},{row:false},{row:false},{row:false},
  {row:false},{row:false},{row:false},{row:false},{row:false}]);
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
    <Board code={code} color={color}  updateLoser={updateLoser} updateWinner={updateWinner} check={check} pegGuess={pegGuess} nextrow={nextrow}/>
    {winner?<Winner  code={code} reset={reset}/>:null}
    {loser?  <Loser code={code} reset={reset}/>:null}
  
</div>

)
   


}

export default Gameboard;