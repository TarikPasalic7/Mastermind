
import React,{useEffect,useState}  from "react"
import Row from "./Row"

const Board =({color,code})=>{
    const [usercode,setusercode]=[];
   
    const [nextrow,setnextrow]=useState([{row1:true},{row2:false},{row3:false},{row4:false},{row5:false},
        {row6:false},{row7:false},{row8:false},{row9:false},{row10:false}]);
  
      const checkeduser=(arr)=>{
         


      }

        const check =(usercode)=>{
        let counter=0;
        for (let index = 0; index < usercode.length; index++) {
           if(usercode[index].iscolor==true)
           counter++;
            
        }
        console.log(counter);
        
       let arr=[...nextrow];
       arr[0].row1=false;
       arr[1].row2=true;
        setnextrow(arr);

        }

return(

    
 
    <div className="playcontainer">
        <Row check={check} color={color}  isdisabled={nextrow[0].row1} />
        <Row  check={check} color={color}   isdisabled={nextrow[1].row2} />
    
        
      
             
</div>

)
   


}

export default Board ;