
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
       
        console.log(code);
 
       
        for (let index = 0; index < usercode.length; index++) {
           if(usercode[index].iscolor==true)
           counter++;
            
        }
        
        if(counter!=4)
        {
            return
        }
        else{
            let correct=0;
            let correctcolor=0;
           if(code[0]===usercode[0].color)
           {
               correct++;
           
           }    
           if(code[1]===usercode[1].color)
           {
               correct++;
           
           } 
           if(code[2]===usercode[2].color)
           {
            correct++;
           
           } 
            if(code[3]===usercode[3].color)
           {
            correct++;
            
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
           for (let j = 0; j < code.length; j++) {

               for (let i = 0; i < usercode.length; i++) {
                   if(code[i]==usercode[j].color && i!=j)
                   correctcolor++;
                   
               }
               
           }
      
           for (let j = 0; j < code.length; j++) {

            for (let i = 0; i < usercode.length; i++) {
                if(code[i]==usercode[j].color && i===j)
                correctcolor--;
                
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
           console.log(pegGuess[0][0]);
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