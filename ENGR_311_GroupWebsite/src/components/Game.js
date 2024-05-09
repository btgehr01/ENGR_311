import React from "react";
import "./Game.css";
import sample2 from "../assets/sample2.png";
import sample3 from "../assets/sample3.png";
import picture1 from "../assets/picture1.png";
import picture2 from "../assets/picture2.png";
import picture3 from "../assets/picture3.png";

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
                Test yourself! This is a simple trivia game based on the videos
                found on the website. Aim to get every question right, but if
                you get one wrong, you’ll lose a life. Try to get through all
                the questions before you run out of lives!
              </p>
            </div>
            <div className="game-des-step" style={{ backgroundColor: "black" }}>
              <div className="game-des-step-left">
                <h2>STEP 1</h2>
                <p>Select a topic based on the videos on the website!</p>
              </div>
              <div className="game-des-step-right">
                <img alt="demo1" src={picture1} />
              </div>
            </div>
            <div className="game-des-step-second">
              <div className="game-des-step-letf-second">
                <img alt="demo2" src={picture2} />
              </div>
              <div className="game-des-step-right-second">
                <h2>STEP 2</h2>
                <p>
                  Choose your best guess to the answer at the top. Your score
                  will be consider as a percent of right answers out of the
                  total amount of questions in the topic and is displayed at the
                  top left. You have five lives – that means you can only answer
                  wrong five times. Watch your life count with the bar on the
                  far right.
                </p>
              </div>
            </div>
            <div
              className="game-des-step"
              style={{ backgroundColor: "#282828" }}
            >
              <div className="game-des-step-left">
                <h2>STEP 3</h2>
                <p>
                  Once you select an answer, each answer will light up based on
                  if they are correct or not. Red means incorrect and green
                  means correct. Once you are ready, click Next Question at the
                  top right to move to the next question.
                </p>
              </div>
              <div className="game-des-step-right">
                <img alt="demo1" src={picture3} />
              </div>
            </div>
            <a
              className="game-download-container shadowInner"
              href="https://bryangreenwood.github.io/PhaserTriviaGame/"
              target="_blank"
            >
              <h4>Click here to play</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
