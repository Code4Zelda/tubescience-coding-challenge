import React from 'react';
                       
/**
 * 
 * @param {*} props 
 */

function DisplayContent(props) {

const { contentA, hideText } = props
  return(                                 
    <div className={ !hideText? "isInactive":"isAvtive" }>
        {hideText? contentA : null}
    </div>                     
  )
}                                                                                                                           
export default DisplayContent; 