import React, { Fragment }from 'react';
import './App.css';
import axios from 'axios'
import DisplayContentA from './components/DisplayContentA';
import DisplayContentB from './components/DisplayContentB';
import Header from './components/Header';


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
      this.setState({
        headerData:data.data.headerData,
        contentA:data.data.contentA,
        contentB:data.data.contentB,
      })
  }
  
  handleSignChange = () => {
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

  return (
  <>
    <Header 
    headerData={headerData}
    isClicked={isClicked}
    handleSignChange={this.handleSignChange}
    />
  <div style={{padding:'20px'}}>
    { hidden ? null: 
    <div className="content">
      <DisplayContentA
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
  </>
  )}
}

export default App;
