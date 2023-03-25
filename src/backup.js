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

  const [name, setName] = useState("");

  return (
    <div>
      <h1>Title of the Page</h1>
      <div>
        <div className="circle active"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>


      <div className="list-column">
        <div className="player-list left">
            <h2> Left Column</h2>
        <ul>
          
            {/* <li>
                <input>
                    type="text"
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder = "Player's Name"
                </input>
            </li>

            <li>
                <input>
                    type="text"
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder = "Player's Name"
                </input>
            </li> */}

            <li>
                <input
                    className='inputBox'
                    type="text"
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder = "Next Player"
                ></input>
                <span className="cross">
                        X
                </span>
            </li>

            {/* <li>
                <input>
                    type="text"
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder = "Player's Name"
                </input>
            </li> */}
        </ul>
              
                
        </div>
      
        <div className="player-list right">
            <h2> Right Column</h2>
          {players.map((player) => (
            <div className="player" key={player.id}>
              <input
                type="text"
                value={player.name}
                onFocus={(e) => e.target.value === "Player's name" && (e.target.value = "")}
                onBlur={(e) => e.target.value === "" && (e.target.value = "Player's name")}
              />
              <span className="cross" onClick={() => handleDeletePlayer(player.id)}>
                X
              </span>
            </div>
          ))}
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
