
import React,{useEffect,useState}  from "react"
import Row from "./Row"

const Board =({color,code,check,pegGuess,nextrow})=>{
   
   
      
      
   
       

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