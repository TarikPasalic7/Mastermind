
import React  from "react"
const Loser =({code,reset})=>{

return(

    
 
    <div className="loserContainer">
        <h3>Solution</h3>
     <button    className={`${code[0]} `}  ></button>
     <button    className={`${code[1]} `}  ></button>
     <button   className={`${code[2]} `} ></button>
     <button    className={`${code[3]} `} ></button>
   <div><button onClick={reset}>PLay again</button></div>
      
</div>

)
   


}

export default Loser;