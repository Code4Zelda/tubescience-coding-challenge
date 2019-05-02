import React from 'react';
                       

function DisplayContent(props) {
const { contentA, hideText } = props
  return(                                 
    <div className="main-container">
      <div className={ !hideText? "isInactive":"isAvtive" }>
         {hideText? contentA : null}
      </div>
    </div>                     
  )
}                                                                                                                                               

export default DisplayContent; 