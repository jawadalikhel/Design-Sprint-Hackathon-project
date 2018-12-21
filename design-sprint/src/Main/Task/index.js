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

        <button className='shuffle'>SHUFFLE</button>

      </div>
    )
  }
}

export default Task;
