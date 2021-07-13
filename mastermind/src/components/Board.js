
import React,{useState}  from "react"
import Row from "./Row"

const Board =({color,code})=>{
    const [usercode,setusercode]=[];
    const [nextrow,setnextrow]=useState([{row1:true},{row2:false},{row3:false},{row4:false},{row5:false},
        {row6:false},{row7:false},{row8:false},{row9:false},{row10:false}]);

        const check =()=>{
        

       let arr=[...nextrow];
       arr[0].row1=false;
       arr[1].row2=true;
        setnextrow(arr);

        }

return(

    
 
    <div className="playcontainer">
        <Row color={color} check={check}  isdisabled={nextrow[0].row1} />
        <Row color={color} check={check}  isdisabled={nextrow[1].row2} />
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