import React, {Component} from 'react';
import './style.css';

class Draw extends Component{
  render(){
    return(
      <div>
        <h1>Draw</h1>
        <iframe className="sketchPad" height="900px" width="700px" src="https://drawisland.com/"></iframe>
      </div>
    )
  }
}
export default Draw;
