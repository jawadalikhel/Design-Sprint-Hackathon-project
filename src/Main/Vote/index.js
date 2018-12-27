import React, {Component} from 'react';
import './style.css';

class Vote extends Component{
  render(){
    return(
      <div>
        <header>
          <h1>Ideation Pool</h1>
          Vote on the most useful idea!
        </header>

        <div id="box0">
          <img className="astro" src="http://3.bp.blogspot.com/-UTXQBE-Mgqo/T9DcBbqBgII/AAAAAAAAAiM/NXIIGSN2H7s/s1600/Astro.jpg"/>
          <div className="innerBox">
            <h2>Project Name</h2>
            <p>Team member names</p>
            <p>Description of Solution</p>
            <input className="check" type="checkbox" />
          </div>
        </div>

        <div id="box">
          <img className="astro" src="http://3.bp.blogspot.com/-UTXQBE-Mgqo/T9DcBbqBgII/AAAAAAAAAiM/NXIIGSN2H7s/s1600/Astro.jpg"/>
          <div className="innerBox">
            <h2>Project Name</h2>
            <p>Team member names</p>
            <p>Description of Solution</p>
            <input className="check" type="checkbox" />
          </div>
        </div>

        <div id="box2">
          <img className="astro" src="http://3.bp.blogspot.com/-UTXQBE-Mgqo/T9DcBbqBgII/AAAAAAAAAiM/NXIIGSN2H7s/s1600/Astro.jpg"/>
          <div className="innerBox">
            <h2>Project Name</h2>
            <p>Team member names</p>
            <p>Description of Solution</p>
            <input className="check" type="checkbox" />
          </div>
        </div>

        <div id="box3">
          <img className="astro" src="http://3.bp.blogspot.com/-UTXQBE-Mgqo/T9DcBbqBgII/AAAAAAAAAiM/NXIIGSN2H7s/s1600/Astro.jpg"/>
          <div className="innerBox">
            <h2>Project Name</h2>
            <p>Team member names</p>
            <p>Description of Solution</p>
            <input className="check" type="checkbox" />
          </div>
        </div>



        <button className='vote'>SUBMIT VOTE</button>
        <a href="/draw"><button className='back2draw'>Back</button></a>
      </div>
    )
  }
}
export default Vote;
