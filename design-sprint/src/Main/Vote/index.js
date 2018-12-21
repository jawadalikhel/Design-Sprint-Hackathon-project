import React, {Component} from 'react';
import './style.css';

class Vote extends Component{
  render(){
    return(
      <div>
        <header>
          <h1>Ideation Pool</h1>
          <p>Vote on the most useful idea!</p>
        </header>

        <div id="Vrow">
          <div className="Vcolumn" >
            <img className="solutionImg" src="http://3.bp.blogspot.com/-UTXQBE-Mgqo/T9DcBbqBgII/AAAAAAAAAiM/NXIIGSN2H7s/s1600/Astro.jpg"/>
            <div className="solutionDes">
              <h1>Idea Name</h1>
              <p>Team member name</p>
              <p>Description of solution</p>
              <input className="checkbox" type="checkbox" />
            </div>
          </div>

          <div className="Vcolumn2" >
            <img className="solutionImg2" src="http://3.bp.blogspot.com/-UTXQBE-Mgqo/T9DcBbqBgII/AAAAAAAAAiM/NXIIGSN2H7s/s1600/Astro.jpg"/>
            <div className="solutionDes2">
              <h1>Idea Name</h1>
              <p>Team member name</p>
              <p>Description of solution</p>
              <input className="checkbox2" type="checkbox" />
            </div>
          </div>



          <div className="Vcolumn3" >
            <img className="solutionImg3" src="http://3.bp.blogspot.com/-UTXQBE-Mgqo/T9DcBbqBgII/AAAAAAAAAiM/NXIIGSN2H7s/s1600/Astro.jpg"/>
            <div className="solutionDes3">
              <h1>Idea Name</h1>
              <p>Team member name</p>
              <p>Description of solution</p>
              <input className="checkbox3" type="checkbox" />
            </div>
          </div>


          <div className="Vcolumn4" >
            <img className="solutionImg4" src="http://3.bp.blogspot.com/-UTXQBE-Mgqo/T9DcBbqBgII/AAAAAAAAAiM/NXIIGSN2H7s/s1600/Astro.jpg"/>
            <div className="solutionDes4">
              <h1>Idea Name</h1>
              <p>Team member name</p>
              <p>Description of solution</p>
              <input className="checkbox4" type="checkbox" />
            </div>
          </div>
        </div>

        <button className='vote'>SUBMIT VOTE</button>
      </div>
    )
  }
}
export default Vote;
