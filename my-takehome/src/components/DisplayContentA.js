import React from 'react';
                       
/**
 * 
 * @param {*} props 
 */

const DisplayContentA=(props) => {
const { contentA, hideText } = props
  return(                                 
    <div className={ !hideText? "isInactive":"isAvtive" }>
        {hideText? contentA : null}
    </div>                     
  )
}                                                                                                                           
export default DisplayContentA; 