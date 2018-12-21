import React, {Component} from 'react';
import './style.css';
import { Redirect } from 'react-router-dom'


class Draw extends Component{
  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/vote' />
    }
  }
  render(){
    return(
      <div>
        <h1>Build Your Prototype</h1>
        <iframe className="sketchPad" src="https://drawisland.com/"></iframe>
        <button className="next" onClick={this.setRedirect}>Next</button>
      </div>
    )
  }
}
export default Draw;
