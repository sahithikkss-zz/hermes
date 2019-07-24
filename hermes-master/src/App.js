import './bing-css1.css';
import './bing-css3.css';
import './bing-css3.css';
import './bing-ftrD_MmVert.css';
import './bing-mc_vtvc.css';
import './bing-b_bfb.css';
import './App.css';
import './bing-swddbl.css';

import Intents from './components/intents/Intents';
import Questions from './components/questions/Questions';
import Header from './components/header/Header';
import PropTypes from 'prop-types';
import { KeyObject } from 'crypto';

var React = require('react');



class App extends React.Component {
  static propTypes = {
    userQuery: PropTypes.string.isRequired,
  };    
  static defaultProps = {
    userQuery: ''
  };


  constructor(props) {  
    super(props);
    
    this.readInput = this.readInput.bind(this);
  }

//   getInitialState() {
//     return {userQuery: ""};
//  }
  
componentDidMount() {
  this.render();
}

  readInput = function() {
    var searchBox =  this.refs.search;
    if(!!searchBox) {
      this.props = {
        userQuery: searchBox.readInput()
      }
      this.refs.intents.updateState(this.props.userQuery);
      this.refs.questions.updateState(this.props.userQuery);
      return this.props.userQuery;
    }
    return '';
  };

  readInputOnEnter = function(event) {
    if(event.key == 13){
      return this.readInput();
    }
  };

  // readInput(){    
  //   var input = this.refs.searchInput;
  //   this.userQuery = input.value;
  //   this.render();
  //   console.log(input.value);
  //   console.log(this.userQuery);
  // }

  render() {
    return (
      <div className="leave-margin">
        <header className="App-header">
          <div className="header-margin">
            {
              <Header ref="search" onClick={this.readInput} onKeyDown={this.readInputOnEnter} userQuery={this.props.userQuery}/>
            }
            </div>
          <div className="intent-margin">        
            {
            <Intents ref="intents" key={this.props.userQuery + "intents"} query={this.props.userQuery} />
            }
            </div> 

            <div className="questions-margin"> 
            {
              <Questions ref="questions" key={this.props.userQuery + "questions"} query={this.props.userQuery}/>
            }
            </div>  
        </header>
      </div>    
    );}
}

export default App;
