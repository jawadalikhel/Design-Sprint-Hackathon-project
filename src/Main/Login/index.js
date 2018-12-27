import React, {Component} from 'react';
import './style.css';

class Login extends Component{
  render(){
    return(
      <div id ="LoginContainer">
        <h1 className="title">Design Sprint</h1>

        <form className="form">
          <input className="input" type="text" placeholder="Lesson Code" /><br /><br />
          <input className="input" type="text" placeholder="Enter Username" /><br />
          <a href="#" className="newCode">No Code? Create one</a>
        </form>

        <svg className="logo" width="651px" height="464px" viewBox="0 0 651 464">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Home-Page" transform="translate(-57.000000, -403.000000)">
                  <g id="Group" transform="translate(48.000000, 404.000000)" fill="#4A4A4A" stroke="#979797">
                      <polygon id="Polygon" points="75.5 0 140.884918 34 140.884918 102 75.5 136 10.115082 102 10.115082 34"></polygon>
                      <polygon id="Polygon-Copy" points="297.5 108 362.884918 142 362.884918 210 297.5 244 232.115082 210 232.115082 142"></polygon>
                      <polygon id="Polygon-Copy-2" points="154.5 108 219.884918 142 219.884918 210 154.5 244 89.115082 210 89.115082 142"></polygon>
                      <polygon id="Polygon-Copy-3" points="517.5 218 582.884918 252 582.884918 320 517.5 354 452.115082 320 452.115082 252"></polygon>
                      <polygon id="Polygon-Copy-4" points="373.5 218 438.884918 252 438.884918 320 373.5 354 308.115082 320 308.115082 252"></polygon>
                  </g>
                  <text id="Prototype" font-family="Avenir-Medium, Avenir" font-size="27" font-weight="400" fill="#FFFFFF">
                      <tspan x="359.71" y="698">Prototype</tspan>
                  </text>
                  <text id="Test" font-family="Avenir-Medium, Avenir" font-size="27" font-weight="400" fill="#FFFFFF">
                      <tspan x="541.2545" y="703">Test</tspan>
                  </text>
                  <polygon id="Polygon" stroke="#979797" fill="#4A4A4A" points="641.5 736 706.884918 768.5 706.884918 833.5 641.5 866 576.115082 833.5 576.115082 768.5"></polygon>
                  <text id="Ideate" font-family="Avenir-Medium, Avenir" font-size="27" font-weight="400" fill="#FFFFFF">
                      <tspan x="307.485" y="590">Ideate</tspan>
                  </text>
                  <text id="Empathize" font-family="Avenir-Medium, Avenir" font-size="25" font-weight="400" fill="#FFFFFF">
                      <tspan x="66.275" y="479">Empathize</tspan>
                  </text>
                  <text id="Define" font-family="Avenir-Medium, Avenir" font-size="25" font-weight="400" fill="#FFFFFF">
                      <tspan x="166.225" y="589">Define</tspan>
                  </text>
                  <text id="Share" font-family="Avenir-Medium, Avenir" font-size="27" font-weight="400" fill="#FFFFFF">
                      <tspan x="607.2235" y="808">Share</tspan>
                  </text>
              </g>
          </g>
        </svg>

        <a href="/team"><button className='findTeam'>FIND YOUR TEAM</button></a>
      </div>
    )
  }
}

export default Login;
