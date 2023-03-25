// import React from 'react';
import './FrontPage.css';


import React, { useState } from "react";

function FrontPage() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player Name 1" },
    { id: 2, name: "Player Name 2" },
    { id: 3, name: "Player Name 3" },
    { id: 4, name: "Player Name 4" }
  ]);

  const handleDeletePlayer = (id) => {
    const newPlayers = players.map((player) => {
      if (player.id === id) {
        return { ...player, name: "Player's name" };
      } else {
        return player;
      }
    });
    setPlayers(newPlayers);
  };

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");
  const [name5, setName5] = useState("");

  return (
    <div>
      <div className='title'><h1>Enter Player names</h1>
      <div className='circle-row'>
        <div className="circle active"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      </div>


      <div className="list-column">
        <div className="player-list left">
          <div className='subheading'><h2> Left Column</h2></div>
            
        <ul>
          {/* 1st text box */}
          <li>
              <div className='inputBox-complete'> 
                <input
                      className='inputBox'
                      type="text"
                      value= {name1}
                      onChange={(e) => setName1(e.target.value)}
                      placeholder = "Next Player"
                      
                  />
                  <button className='cross-button'>x</button>
              </div>
              
                {/* <span className="cross">
                        X
                </span> */}
                
            </li>

          {/* 2nd text box */}
          <li>
              <input
                    className='inputBox'
                    type="text"
                    value= {name2}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder = "Next Player"
                />
                <button className='cross-button'>x</button>
            </li>

          {/* 3rd text box */}
          <li>
              <input
                    className='inputBox'
                    type="text"
                    value= {name3}
                    onChange={(e) => setName3(e.target.value)}
                    placeholder = "Next Player"
                /><button className='cross-button'>x</button>
            </li>

          {/* 4th text box */}
          <li>
              <input
                    className='inputBox'
                    type="text"
                    value= {name4}
                    onChange={(e) => setName4(e.target.value)}
                    placeholder = "Next Player"
                /><button className='cross-button'>x</button>
            </li>

          {/* 5th text box */}
          <li>
              <input
                    className='inputBox'
                    type="text"
                    value= {name5}
                    onChange={(e) => setName5(e.target.value)}
                    placeholder = "Next Player"
                /><button className='cross-button'>x</button>
            </li>
        </ul>   
        </div>
      
        <div className="player-list right">
            <div className='subheading'><h2> Right Column</h2></div>
        <ul>
          {/* 1st text box */}
          <li>
              <input
                    className='inputBox'
                    type="text"
                    value= {name1}
                    onChange={(e) => setName1(e.target.value)}
                    placeholder = "Next Player"
                /><button className='cross-button'>x</button>
                </li>

          {/* 2nd text box */}
          <li>
              <input
                    className='inputBox'
                    type="text"
                    value= {name2}
                    onChange={(e) => setName2(e.target.value)}
                    placeholder = "Next Player"
                /><button className='cross-button'>x</button>
            </li>

          {/* 3rd text box */}
          <li>
              <input
                    className='inputBox'
                    type="text"
                    value= {name3}
                    onChange={(e) => setName3(e.target.value)}
                    placeholder = "Next Player"
                /><button className='cross-button'>x</button>
            </li>

          {/* 4th text box */}
          <li>
              <input
                    className='inputBox'
                    type="text"
                    value= {name4}
                    onChange={(e) => setName4(e.target.value)}
                    placeholder = "Next Player"
                /><button className='cross-button'>x</button>
            </li>

          {/* 5th text box */}
          <li>
              <input
                    className='inputBox'
                    type="text"
                    value= {name5}
                    onChange={(e) => setName5(e.target.value)}
                    placeholder = "Next Player"
                /><button className='cross-button'>x</button>
            </li>
        </ul>
              
                
        </div>
        
      </div>





      <div className="dropdown">
        <button className="dropbtn">
          No. of overs
          <i className="fa fa-caret-down"></i>
        </button>

        <div className="dropdown-content">
          <a href="#">10 overs</a>
          <a href="#">20 overs</a>
          <a href="#">50 overs</a>
        </div>
      </div>

      <div className="navigation">
        <i className="fa fa-chevron-left"></i>
        <i className="fa fa-chevron-right"></i>
      </div>
    </div>
  );
}

export default FrontPage;
