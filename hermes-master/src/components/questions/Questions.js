import ShowQuestions from './ShowQuestions';
var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
var pmaapi = require('../utils/pmaapi/pmaapi');
//import ShowQuestions = require('./ShowQuestions');

class Questions extends React.Component {  
    constructor(props) {
      super();
      this.state = {
        query: props.query,
        questions: [],
        displayedQuestions: [],
        numClicks: 0
      }
    
    this.expandQuestions = this.expandQuestions.bind(this);
      
    }

    componentDidMount() {
      this.updateState(this.state.query);
    }

    updateState(query) {
      this.setState(function() {
        return {
          query: query,
          questions : [],
          displayedQuestions: [],
          numClicks: 0
        }
      });

      if(!!pmaapi && !!pmaapi.fetchQuestions)
      pmaapi.fetchQuestions(query)
      .then(function(data) {
        this.setState(function() {
          return {
            query: query,
            questions: data,
            displayedQuestions: !!data? data.filter((q, i) => i <  (4 + (this.state.numClicks * 2))) : [], 
            numClicks: 0
          }
        });
      }.bind(this))
      .catch(err => {
        console.log("Questions");
      });
    }

    expandQuestions() {
      var numClicks = this.state.numClicks + 1;
      this.state = {
        query: this.state.query,
        questions: this.state.questions,
        numClicks : numClicks, 
        displayedQuestions: !!this.state.questions ? this.state.questions.filter((q, i) => i <  (4 + (this.state.numClicks * 2))): []
      };
      ReactDOM.render(<ShowQuestions onClick={this.expandQuestions} questions={this.state.displayedQuestions}/>, document.getElementById('displayedQuestions'));
    }
    
    render() {
      return (
        <div className="rc_vlHorizontalImage rc_rnDesktop_vlHorizontalImage rc_vlwithdl">
        <div id="slideexp0_22935Ec" className="b_slideexp" data-control-id="slideexp0_22935E" data-appns="SERP" data-k="5500.1"
          data-stk="">
        <div className="b_overlay">
          <div id="slideexp0_22935Echevrons_prevbtn" className="btn  disabled prev rounded bld" data-dir="">
              <div className="bg"><span></span></div>
              <div className="vcac">
                  <div className="vcac-style">
                      <div className="cr">
                          <div></div>
                      </div>
                  </div>
              </div>
          </div>
          <div id="slideexp0_22935Echevrons_nextbtn" className="btn next rounded bld" data-dir="">            
              <div className="bg"><span></span></div>
              <div className="vcac">
              <div className="vcac-style">
                      <div className="cr">
                          <div></div>
                      </div>
                  </div>
              </div>              
          </div>
          <div className="questions-slides">      
          <div className="b_viewport scrollbar scrollbar-prop" nativescrollingenabled="1">            
              <div className="b_slidebar slidebar-height" id="slideexp0_22935E" role="list" aria-label="Please use arrow keys to navigate"></div>
                <ShowQuestions onClick={this.expandQuestions} questions={this.state.displayedQuestions}/>
              </div>
          </div>
        </div>        
        </div>
        </div>
      );
    }
  }

export default Questions;