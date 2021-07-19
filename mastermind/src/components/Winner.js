
import React  from "react"
const Winner =({reset,code})=>{

return(

    
 
    <div className="loserContainer">
        <h3>You win!</h3>
        <h4>Solution</h4>
     <button    className={`${code[0]} `}  ></button>
     <button    className={`${code[1]} `}  ></button>
     <button   className={`${code[2]} `} ></button>
     <button    className={`${code[3]} `} ></button>
   
   <div><button onClick={reset}>PLay again</button></div>
      
</div>

)
   


}

export default Winner;