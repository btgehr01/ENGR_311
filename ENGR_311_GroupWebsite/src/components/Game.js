import React from "react";
import "./Game.css";
import sample2 from "../assets/sample2.png";
import sample3 from "../assets/sample3.png";
//#013a34
const Game = () => {
  return (
    <div className="game-section">
      <div className="game-container">
        <div className="game-des">
          <div className="game-des-container">
            <div className="game-des-introduction">
              <h2>INTRODUCTION</h2>
              <p>
                As she sat watching the world go by, something caught her eye.
                It wasn't so much its color or shape, but the way it was moving.
                She squinted to see if she could better understand what it was
                and where it was going, but it didn't help. As she continued to
                stare into the distance, she didn't understand why
              </p>
            </div>
            <div className="game-des-step">
              <div className="game-des-step-left">
                <h2>STEP 1</h2>
                <p>
                  this uneasiness was building inside her body. She felt like
                  she should get up and run. If only she could make out what it
                  was. At that moment, she comprehended what it was and where it
                  was heading, and she knew her life would never be the same.
                </p>
              </div>
              <div className="game-des-step-right">
                <img alt="demo1" src={sample2} />
              </div>
            </div>
            <div className="game-des-step-second">
              <div className="game-des-step-letf-second">
                <img alt="demo2" src={sample3} />
              </div>
              <div className="game-des-step-right-second">
                <h2>STEP 2</h2>
                <p>
                  this uneasiness was building inside her body. She felt like
                  she should get up and run. If only she could make out what it
                  was. At that moment, she comprehended what it was and where it
                  was heading, and she knew her life would never be the same.
                </p>
              </div>
            </div>
            <div className="game-download-container shadowInner">
              <button className="game-download-button">Download</button>
              <h4>Download and play here</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
