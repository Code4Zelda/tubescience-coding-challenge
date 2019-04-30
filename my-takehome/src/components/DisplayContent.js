import React from 'react';


function DisplayContent(props) {
const { contentA, hidden } = props
  return(
    <div className="main-container">
      <div className="contentA" style={{backgroundColor:"rgb(243, 192, 188)"}} >
        {hidden ? null:  <div>{contentA}</div>}

      
      </div>
    </div>
  )
}




export default DisplayContent; 