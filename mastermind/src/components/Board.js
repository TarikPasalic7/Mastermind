
import React,{useEffect,useState}  from "react"
import Row from "./Row"
let countattempts=0;
const Board =({color,code,updateWinner,updateLoser})=>{
   
   
    const [nextrow,setnextrow]=useState([{row:true},{row:false},{row:false},{row:false},{row:false},
        {row:false},{row:false},{row:false},{row:false},{row:false}]);
      
        const [pegGuess,setpegGuess] =useState([[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]
        ,[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]]);
        
        useEffect(() => {
            setpegGuess([[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]
            ,[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}],
            [{col:""},{col:""},{col:""},{col:""}],[{col:""},{col:""},{col:""},{col:""}]]);
            setnextrow([{row:true},{row:false},{row:false},{row:false},{row:false},
             {row:false},{row:false},{row:false},{row:false},{row:false}])
         }, [code])
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
 //debugger;
     /**
for (let j = 0; j < code.length; j++) {
  let same=0;
    for (let i = 0; i < usercode.length; i++) {
    if(code[j]===usercode[i].color && i===j){
            scolor[j]=true;
              break;
           
    
        if(code[j]===code[i].color && i!==j){
            
          
                same++;
               
                
             
           
        }
        if(code[j]===usercode[i].color && scolor[j]===false && equalcode[j]!==true){
            
            if(i!==j ){
                correctcolor++;
                scolor[j]=true;
               
                
             }
           
        }
         
        //correctcolor=correctcolor-same;
      
       
    }
  
    
    
    }    }*/
/**
 * 
 */
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

return(

    
  
    <div className="playcontainer">
     {console.log(code)}
        <Row check={check} color={color} index={0} code={code} pegGuess={pegGuess} isdisabled={nextrow[0].row} />
        <Row  check={check} color={color} index={1} code={code} pegGuess={pegGuess} isdisabled={nextrow[1].row} />
        <Row  check={check} color={color} index={2} code={code}  pegGuess={pegGuess} isdisabled={nextrow[2].row} />
        <Row  check={check} color={color} index={3} code={code} pegGuess={pegGuess}  isdisabled={nextrow[3].row} />
        <Row  check={check} color={color} index={4} code={code} pegGuess={pegGuess}  isdisabled={nextrow[4].row} />
        <Row  check={check} color={color} index={5} code={code} pegGuess={pegGuess} isdisabled={nextrow[5].row} />
        <Row   check={check} color={color} index={6} code={code} pegGuess={pegGuess} isdisabled={nextrow[6].row} />
        <Row  check={check} color={color} index={7} code={code} pegGuess={pegGuess} isdisabled={nextrow[7].row} />
        <Row  check={check} color={color} index={8} code={code} pegGuess={pegGuess} isdisabled={nextrow[8].row} />
        <Row  check={check} color={color} index={9}  code={code} pegGuess={pegGuess} isdisabled={nextrow[9].row} />
    
        
      
             
</div>

)
   


}

export default Board ;