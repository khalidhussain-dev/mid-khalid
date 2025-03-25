import React, { useState } from 'react'
import './CountDownSwitchLight.css'



function CountDownSwitchLight() {


    const [theme, setTheme] = useState(false);
    const [timer, setTimer] = useState(30);
    const [modemsg, setmodemsg] = useState('Night Mode')

    function changeTheme() {
        setTheme(!theme);
        if (theme) {
            setmodemsg('Night Mode')
        }
        else {
            setmodemsg('Light Mode')
        }

    }

    function timerTick() {



        setInterval(() => {
            setTimer(timer - 1);
            if (timer == 0) {
                return;
            }

        }, 1000)

    }

    function timerStart() {
        if (!theme) {
            return
        }

        else {
            timerTick();

        }

    }


    return (

        <div className="container" style={{ background: theme ? 'white' : 'black', color: theme ? 'black' : 'white' }} >
            <div className="header">
                <h1>Countdown & Light Switch</h1>
                <div className="toggle-container">
                    <label className="toggle-switch">
                        <input type="checkbox" id="themeToggle" onClick={changeTheme} />
                        <span className="slider"></span>
                    </label>
                    <span>{modemsg}</span>
                </div>
            </div>


            <div className="timer-section">
                <div className="progress-bar">
                    <div className="progress" id="progress" style={{}} ></div>
                </div>
                <div className="timer" id="timerDisplay">{timer}s</div>
                <div className="btn-group">
                    <button id="startButton" onClick={timerStart} >Start Timer</button>
                    <button id="resetButton" >Reset Timer</button>
                </div>
                <div className="message" id="messageArea"></div>
            </div>
        </div>

    )
}


export default CountDownSwitchLight
