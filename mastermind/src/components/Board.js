
import React,{useState}  from "react"
import Row from "./Row"

const Board =({color})=>{

    const [nextrow,setnextrow]=useState([{row1:true},{row2:false},{row3:false},{row4:false},{row5:false},
        {row6:false},{row7:false},{row8:false},{row9:false},{row10:false}]);

return(

    
 
    <div className="playcontainer">
        <Row color={color} isdisabled={nextrow[0].row1} />
        <Row isdisabled={nextrow[1].row2}/>
        <Row isdisabled={nextrow[2].row3}/>
        <Row isdisabled={nextrow[3].row4}/>
        <Row isdisabled={nextrow[4].row5}/>
        <Row isdisabled={nextrow[5].row6}/>
        <Row isdisabled={nextrow[6].row7}/>
        <Row isdisabled={nextrow[7].row8}/>
        <Row isdisabled={nextrow[8].row9}/>
        <Row isdisabled={nextrow[9].row10}/>
        
      
             
</div>

)
   


}

export default Board ;