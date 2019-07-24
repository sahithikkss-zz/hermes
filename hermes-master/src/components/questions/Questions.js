var React = require('react');
var PropTypes = require('prop-types');
var pmaapi = require('../utils/pmaapi/pmaapi');


function ShowQuestions (questions) {
  return (
  <ul className="questions">
      { !!questions.questions && questions.questions.length > 0
        ? questions.questions.map(function (question, ind) {
        return (          
            <div className="slide slide-margin" data-dataurl="" data-rinterval="" data-appns="SERP" data-k="5491.1" tabIndex="0"
                role="listitem" key={' slide key' + ind}  >
                <div className="rc_vlCard vlcard-height">
                    <div className="rc_vlImag" aria-label="20 must do activities in Australia - Tourism Australia">
                        <div className="cico cico-style"><a
                                title="20 must do activities in Australia - Tourism Australia"
                                href="https://www.australia.com/en-us/things-to-do/australian-adventure/20-must-do-activities-in-australia.html"
                                h="ID=SERP,5473.1"><img height="110" width="197"
                                    data-src-hq="/th?id=ODL.eb76369e5bbaec2264def5d3ab5fc213&amp;w=197&amp;h=110&amp;c=7&amp;rs=1&amp;qlt=80&amp;pid=RichNav"
                                    alt="20 must do activities in Australia - Tourism Australia"
                                    data-priority="2" id="emb294D0FE5" className="rms_img"
                                    src={question.imageSource}
                                    data-bm="36"/></a>
                                    </div>
                    </div>
                    <div className="rc_vlImgFact">
                        <ul className="b_dataList">
                            <li key={'key2' + ind } className="some-class"><a
                                    href={question.hyperLinkUrl}
                                    h="ID=SERP,5474.1">{question.question}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          )})
        : <li key={'loading questions'}>
              Loading questions!
        </li>}
    </ul>
  )
}

ShowQuestions.propTypes = {
  questions: PropTypes.array.isRequired
}

class Questions extends React.Component {  
    constructor() {
      super();
      this.state = {
        query: '',
        questions: []
      }
    }
    
    componentDidMount() {
      this.updateState(this.state.query);
    }

    updateState(query) {
      this.setState(function() {
        return {
          query: query,
          questions : []
        }
      });

      if(!!pmaapi && !!pmaapi.fetchQuestions)
      pmaapi.fetchQuestions(this.query)
      .then(function(data) {
        this.setState(function() {
          return {
            questions: data
          }
        });
      }.bind(this))
      .catch(err => {
        console.log("Questions");
      });
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
                <ShowQuestions questions={this.state.questions}/>
              </div>
          </div>
        </div>        
        </div>
        </div>
      );
    }
  }
module.exports = Questions;