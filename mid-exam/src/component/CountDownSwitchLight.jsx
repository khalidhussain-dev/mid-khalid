import React, { useState } from 'react'
import './CountDownSwitchLight.css'



function CountDownSwitchLight() {


    const [theme, setTheme] = useState(true);
    const [timer, setTimer] = useState(30);

    function changeTheme() {
        setTheme(!theme);
    }

    function timerTick() {

        setTimeout(() => {

            if (timer == 0) {
                exit;
            }

            setTimer(timer - 1)

        }, 1000)

    }

    function timerStart() {

    }


    return (

        <div className="container" >
            <div className="header">
                <h1>Countdown & Light Switch</h1>
                <div className="toggle-container">
                    <label className="toggle-switch">
                        <input typeName="checkbox" id="themeToggle" />
                        <span className="slider"></span>
                    </label>
                    <span>Light Mode</span>
                </div>
            </div>


            <div className="timer-section">
                <div className="progress-bar">
                    <div className="progress" id="progress"></div>
                </div>
                <div className="timer" id="timerDisplay">{timer}s</div>
                <div className="btn-group">
                    <button id="startButton"  >Start Timer</button>
                    <button id="resetButton" >Reset Timer</button>
                </div>
                <div className="message" id="messageArea"></div>
            </div>
        </div>

    )
}


export default CountDownSwitchLight
