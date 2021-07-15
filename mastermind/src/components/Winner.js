
import React  from "react"
const Winner =({reset})=>{

return(

    
 
    <div className="loserContainer">
        <h3>You win!</h3>
   
   <div><button onClick={reset}>PLay again</button></div>
      
</div>

)
   


}

export default Winner;