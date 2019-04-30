import React from 'react';


function DisplayContentB(props) {

const { hideText, contentB, backgroundColor } = props
  return(
    <div className="main-container">
      <div className="contentB" onClick={props.handleHideText} style={{backgroundColor:backgroundColor}}>
        {hideText? null: contentB}
       
        
      </div>
  
    </div>
  )
}




export default DisplayContentB; 