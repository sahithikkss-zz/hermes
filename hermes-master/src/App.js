import './bing-css1.css';
import './bing-css3.css';
import './bing-css3.css';
import './bing-ftrD_MmVert.css';
import './bing-mc_vtvc.css';
import './bing-b_bfb.css';
import './App.css';

var React = require('react');
// //import logo from './logo.svg';
// var css1 = require('./bing-css1.css');
// var css2 = require('./bing-css2.css');
// var css3 = require('./bing-ftrD_MmVert.css');
// var css4 = require('./bing-mc_vtvc.css');
// var css5 = require('./bing-b_bfb.css');
var Intents = require('./components/intents/Intents');
var Questions = require('./components/questions/Questions');

function App() {  
  return (
    <div className="leave-margin">
      <header className="App-header">
        <form action="/videos/search" id="sb_form">
          <a className="b_logoArea" href="/?FORM=Z9FD1" h="ID=video,5042.1">
          <h1 className="b_logo" title="Back to Bing search" aria-label="Go to Bing homepage" data-bm="1"><img src="https://www.bing.com/sa/simg/SharedSpriteDesktop_2x_040919.png" alt="Go to Bing homepage" title="Back to Bing search" data-bm="13"/></h1>
            </a>
            <div className="b_searchboxForm" role="search" data-bm="2">
              <input className="b_searchbox" id="sb_form_q" name="q" aria-autocomplete="both" aria-label="Enter your search here - Search suggestions will show as you type" 
              type="search" readOnly value="india culture" maxLength="1000" aria-controls="sw_as"/>
                <div id="sb_go_par" data-sbtip="Search the web"><input type="submit" className="b_searchboxSubmit" id="sb_form_go" tabIndex="0" name="go" value="Search"/>          
                </div>
                <input id="sa_qs" name="qs" value="ds" type="hidden"/>
                  <input type="hidden" value="QBVR" name="form"/>
                  <input type="hidden" value="video" name="scope"/>
                  <div id="sw_as"></div>
                </div>
        </form>
        <div className="intent-margin">        
          {
          <Intents query="Australia" />
          }
          </div> 

          <div className="questions-margin"> 
          {
            <Questions query="Australia"/>
          }
          </div>  
      </header>
    </div>
    
  );
}

export default App;
