import React, { useEffect, useContext } from 'react'
import Button from './components/Button'
import CountDownAnimation from './components/CountDownAnimation'
import SetPomodoro from './components/SetPomodoro'
import { SettingsContext } from './context/SettingsContext'

const App = () => {

  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn } = useContext(SettingsContext)

    useEffect(() => updateExecute(executing), [executing, startAnimate, updateExecute])

  return (
    <div className="container">
      <h1>Pomodoro App</h1>
      <small>Be productive the right way.</small>
      {pomodoro !== 0 ?
      <>
        <ul className="labels">
          <li>
            <Button 
              title="Work" 
              activeClass={executing.active === 'work' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('work')} 
            />
          </li>
          <li>
            <Button 
              title="Short Break" 
              activeClass={executing.active === 'shortBreak' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('shortBreak')} 
            />
          </li>
          <li>
            <Button 
              title="Long Break" 
              activeClass={executing.active === 'longBreak' ? 'active-label' : undefined} 
              _callback={() => setCurrentTimer('longBreak')} 
            />
          </li>
        </ul>
        <Button title="Settings" _callback={SettingsBtn} />
        <div className="timer-container">
          <div className="time-wrapper">
              <CountDownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountDownAnimation>
          </div>
        </div>
        <div className="button-wrapper">
          <Button title="Start" activeClass={!startAnimate ? 'active' : undefined} _callback={startTimer} />
          <Button title="Pause" activeClass={startAnimate ? 'active' : undefined} _callback={pauseTimer} />
        </div>
      </> : <SetPomodoro />}
    </div>
  )
}

export default App