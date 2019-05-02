import React from 'react';

/**
 * 
 * @param {*} props 
 */
function DisplayContentB(props) {

const { hideText, contentB, handleHideText } = props
  return(
    <div className={!hideText? "isActive":"isInactive"} onClick={handleHideText} >
        {hideText? null: contentB}
    </div>
  )
}

export default DisplayContentB; 