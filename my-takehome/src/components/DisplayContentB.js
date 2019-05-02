import React from 'react';


function DisplayContentB(props) {

const { hideText, contentB, handleHideText } = props
  return(
    <div className="main-container">
      <div className={!hideText? "isActive":"isInactive"} onClick={handleHideText} >
        {hideText? null: contentB}
      </div>
    </div>
  )
}




export default DisplayContentB; 