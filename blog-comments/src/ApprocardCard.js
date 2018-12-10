import React from 'react';

const ApprovalCard = (props) =>{

return(
  <div className= "ui card">
   <div className="content" >{props.children}</div>
     <div className ="extra content">
       <div className="ui buttons" >
         <div className="ui basic green button">Approved</div>
         <div className="ui basic red button">Reject</div>
         
      </div>
   </div>
  </div>
  )
}

export default ApprovalCard;