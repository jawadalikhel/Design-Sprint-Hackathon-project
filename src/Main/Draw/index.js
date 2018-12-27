import React, {Component} from 'react';
import './style.css';
import Vote from '../Vote';

class Draw extends Component{

  render(){
    return(
      <div>
        <h1>Build Your Prototype</h1>
        <iframe className="sketchPad" src="https://drawisland.com/"></iframe>
        <a href="/vote"><button className="next">Next</button></a>
        <a href="/task"><button className="back">Back</button></a>
      </div>
    )
  }
}
export default Draw;
