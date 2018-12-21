import React, {Component} from 'react';
import './style.css';

class Task extends Component{
  render(){
    return(
      <div>
        <h1>Empathize & Define</h1>

        <div id="Trow">
          <div id="Tcolumn" >
            <h2>Persona</h2>
            <h1 className="TquextionMark">?</h1>
            <p className="info">Astronaut<br/>
              Lorem ipsum dolor sit
              amet, consectetur adip
              iscing elit, sed do
            </p>
          </div>

          <div id="Tcolumn" >
            <h2>Problem</h2>
            <h1 className="TquextionMark">?</h1>
            <p className="info">Astronaut<br/>
            House
              Lorem ipsum dolor sit
              amet, consectetur adip
              iscing elit, sed do
            </p>
          </div>

          <div id="Tcolumn" >
            <h2>Subject</h2>
            <h1 className="TquextionMark">?</h1>
            <p className="info">
              Robot,<br/>
              Lorem ipsum dolor sit
              amet, consectetur adip
              iscing elit, sed do
            </p>
          </div>
        </div>

        {/* this button is to shhuffle the cards randomly */}
        <button className='shuffle'>SHUFFLE</button>


        <svg className="fillIn" width="644px" height="139px" viewBox="0 0 644 139">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="Avenir-Heavy, Avenir" font-size="27" font-weight="600">
                <g id="3)-Empathize,-Define" transform="translate(-44.000000, -674.000000)" fill="#4A4A4A">
                    <text id="Your-task-is-to-help">
                        <tspan x="45" y="695">Your task is to help</tspan>
                        <tspan x="286.461" y="695" font-family="Avenir-Book, Avenir" font-weight="normal"> ____(Persona)_________________</tspan>
                        <tspan x="45" y="732">with</tspan>
                        <tspan x="99.54" y="732" font-family="Avenir-Book, Avenir" font-weight="normal"> ___________(Problem)_______________________</tspan>
                        <tspan x="45" y="769">and you must include</tspan>
                        <tspan x="314.001" y="769" font-family="Avenir-Book, Avenir" font-weight="normal"> ________(Subject)___________</tspan>
                        <tspan x="45" y="806">in your design solution.</tspan>
                    </text>
                </g>
            </g>
        </svg>

        <button className='ideate'>IDEATE</button>

      </div>
    )
  }
}

export default Task;
