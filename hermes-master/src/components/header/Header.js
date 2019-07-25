var React = require('react');
var PropTypes = require('prop-types');
var pmaapi = require('../utils/pmaapi/pmaapi');

// var Intents = require('../intents/Intents');
// var Questions = require('../questions/Questions');


class Header extends React.Component {
    constructor(props) {
    super();
    this.userQuery = 'australia';
    //this.searchForImages = this.searchForImages.bind(this);
  }


  componentDidMount() {
    this.render();
  }

  render(){
      return (
          <div>
        <form action="/videos/search" id="sb_form">
        <a className="b_logoArea" href="/?FORM=Z9FD1" h="ID=video,5042.1">
        <h1 className="b_logo" title="Back to Bing search" aria-label="Go to Bing homepage" data-bm="1"><img src="https://www.bing.com/sa/simg/SharedSpriteDesktop_2x_040919.png" alt="Go to Bing homepage" title="Back to Bing search" data-bm="13"/></h1>
          </a>
          <div className="b_searchboxForm" role="search" data-bm="2">
            <input className="b_searchbox" ref="searchInput" id="sb_form_q" name="q"
            aria-label="Enter your search here - Search suggestions will show as you type"
            type="search" placeholder="Enter your query" maxLength="1000"/>
              <div id="sb_go_par" data-sbtip="Search the web">
                  <input type="button" className="b_searchboxSubmit" id="sb_form_go" tabIndex="0" name="go" onClick={this.props.onClick}/>
              </div>
              {/* <input id="sa_qs" name="qs" value="ds" type="hidden"/>
                <div id="sw_as"></div> */}
              </div>
      </form>
        </div>
      );

  }

  readInput() {
      return this.refs.searchInput.value;
  }
}


Header.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Header;