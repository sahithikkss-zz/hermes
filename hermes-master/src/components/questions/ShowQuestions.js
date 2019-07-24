var React = require('react');
var PropTypes = require('prop-types');
  
class ShowQuestions extends React.Component {
    constructor(props){
        super();        
    }

    render() {
    return (
    <ul id="displayedQuestions" className="questions" onClick={this.props.onClick}>
        { !!this.props.questions && this.props.questions.length > 0
          ? this.props.questions.map(function (question, ind) {
          return (          
              <div className="slide slide-margin" data-dataurl="" data-rinterval="" data-appns="SERP" data-k="5491.1" tabIndex="0"
                  role="listitem" key={' slide key' + ind}>
                  <div className="rc_vlCard vlcard-height">
                      <div className="rc_vlImag" aria-label="question.answerString">
                          <div className="cico cico-style"><img height="110" width="197"
                                      data-src-hq="/th?id=ODL.eb76369e5bbaec2264def5d3ab5fc213&amp;w=197&amp;h=110&amp;c=7&amp;rs=1&amp;qlt=80&amp;pid=RichNav"
                                      alt="question.answerString"
                                      data-priority="2" id="emb294D0FE5" className="rms_img"
                                      src={question.imageSource}
                                      data-bm="36"/>
                                      </div>
                      </div>
                      <div className="rc_vlImgFact">
                          <ul className="b_dataList">
                              <li key={'key2' + ind } className="some-class"><a target="_blank"
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
    );}
  }
  
  export default ShowQuestions;

  ShowQuestions.propTypes = {
    questions: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
  }
