import React from 'react';
import './App.css';
import axios from 'axios'
import { 
  IoIosRemoveCircleOutline, 
  IoIosAddCircleOutline
} from "react-icons/io";
import DisplayContent from './components/DisplayContent';
import DisplayContentB from './components/DisplayContentB';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      headerData:[],
      isClicked:false,
      hidden: true,
      contentA:'',
      contentB:'',
      hideText: true,
    }
  
  }
  // *fetch data
  async componentDidMount() {
    let data = await axios.get('./data.json');
     console.log(data.data.headerData)
      this.setState({
        headerData:data.data.headerData,
        contentA:data.data.contentA,
        contentB:data.data.contentB,
      })
  }
  
  handleSignChange = (e) => {
    console.log(e)
    const { isClicked, hidden } = this.state;
      this.setState({
        isClicked: !isClicked,
        hidden:!hidden
      })
    //  *change state back to original state when btn is clicked back to minus
      if(isClicked){
        this.setState({
          isClicked:false,
          hidden:true,
          hideText:true
        })
      }
  }
    
  handleHideText = (e) => {
    const { hideText } = this.state;
      this.setState({
      hideText:!hideText,
    })
    console.log(`This is my hideText state ${this.state.hideText}`)
  }
  
  render() {
    const { headerData, isClicked, hidden, contentA, contentB, hideText } = this.state;

    let headerInfo = headerData.map((el,i)=><ul>{el}</ul>)
    
  return (
  <div>
    <div className="menu-container">
     <div className="menu">
        {headerInfo[0]}
        {headerInfo[1]}  
        {headerInfo[2]}
        <div className="btn"  onClick={this.handleSignChange}>
         {isClicked ?  <IoIosAddCircleOutline/> :  <IoIosRemoveCircleOutline/>} 
        </div>
     </div>
   </div>
  <div style={{padding:'20px'}}>
   { hidden ? null: 
   <div className="content">
    <DisplayContent 
     hidden={hidden}
     contentA={contentA}
     hideText={hideText}
   />
    <DisplayContentB 
     contentB={contentB} 
     hideText={hideText} 
     handleHideText={this.handleHideText} 
   />
    </div> }
   </div>
  </div>
  )}
}

export default App;
