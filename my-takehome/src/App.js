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
      head:[],
      isClicked:false,
      hidden: true,
      contentA:'',
      contentB:'',
      hideText: true,
      backgroundColor:'#EEEEEE'

    }

  }
  async componentDidMount() {
    let data = await axios.get('./data.json');
     console.log(data.data.headerData)
      this.setState({
        head:data.data.headerData,
        contentA:data.data.contentA,
        contentB:data.data.contentB,
      })
      // console.log(this.state.contentA)
  }
  
  handleSignChange = (e) => {
    console.log(e)
    const { isClicked, hidden } = this.state;
    this.setState({
      isClicked: !isClicked,
      hidden:!hidden
    })
    
  }

  handleHideText = (e) => {
    const { hideText,hidden } = this.state
    this.setState({
      hideText:!hideText,
    })
    if(!hideText){
      this.setState({backgroundColor:"#EEEEEE"})
    }else{
      this.setState({backgroundColor:"#FFFFFF"})
    }
    // if(hidden){
    //   this.setState({backgroundColor:"rgb(243, 192, 188)"})
    // }else{
    //   this.
    // }
    console.log(`This is my hideText state ${this.state.hideText}`)
  }

  
  render(){
    const { head, isClicked, hidden, contentA, contentB, hideText, backgroundColor } = this.state;
    let headerInfo = head.map((el,i)=><ul>{el}</ul>)
    
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
   <div className="main-content-container">
   <DisplayContent 
   hidden={hidden}
   contentA={contentA}
   backgroundColor={backgroundColor}
  
   />
   <DisplayContentB 
   contentB={contentB} 
   hideText={hideText} 
   handleHideText={this.handleHideText} 
   backgroundColor={backgroundColor}
   />
   </div>
  </div>
  )}
}

export default App;
