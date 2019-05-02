import React from "react"
import { 
  IoIosRemoveCircleOutline, 
  IoIosAddCircleOutline
} from "react-icons/io";

/**
 * 
 * @param {*} props 
 */

const Header = (props) => {
  const { headerData, isClicked, handleSignChange } = props
  const headerInfo = headerData.map((el,i)=><ul>{el}</ul>)
  
  return(
    <div className="header-container">
     <div className="header">
        {headerInfo[0]}
        {headerInfo[1]}  
        {headerInfo[2]}
        <div className="btn"  onClick={handleSignChange}>
         {isClicked ?  <IoIosAddCircleOutline/> :  <IoIosRemoveCircleOutline/>} 
        </div>
     </div>
   </div>
  )
}

export default Header;