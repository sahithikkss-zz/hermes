var React = require('react');
var PropTypes = require('prop-types');
var pmaapi = require('../utils/pmaapi/pmaapi');


function ShowIntents (intents) {
  return (
  <ol className="items">
      { !!intents.intents && intents.intents.length > 0
        ? intents.intents.map(function (intent, index) {
        return (
          <li className="item col item-margin" key={'intent'+index}>              
          <a title={intent.Text} className="suggestion-item " href="#">
            <div className="suggestion-color noimage" ></div>
            <div className="suggestion-title-wrapper">
              <span className="suggestion-title"><strong>{intent.Text}</strong>
              </span>
            </div>
            </a>
        </li>)})
        : <li key={'loading intent'}>
              Loading intents!
        </li>}
    </ol>
  )
}

ShowIntents.propTypes = {
  intents: PropTypes.array.isRequired
}

module.exports = class Intents extends React.Component {  
    constructor(query) {
      super();
      this.state = {
        query: query,
        intents: []
      }
    }

    componentDidMount() {
      this.updateState(this.state.query);
    }

    updateState(query) {
      this.setState(function() {
        return {
          query: query,
          intents : []
        }
      });

      if(!!pmaapi && !!pmaapi.fetchIntents)
      pmaapi.fetchIntents(this.query).then(function(data) {        
        this.setState(function() {
          return {
            intents: data.item
          }
        });
      }.bind(this))
      .catch(err => {
        console.log("Intents");
      });
    }
    
    render() {
      return (
        <div className="rfvalid">
          <div className="touchQuery">
            <div className="carousel">
              <div className="carousel-controls lightcar">   
                <div className="carousel-content">
                  <div className="carousel-scroll-wrapper">  
                    <div className="carousel-scroll-content carousel_scroll">
                      <ShowIntents intents={this.state.intents}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }