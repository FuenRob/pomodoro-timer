import React, { createContext, useState } from "react";

export const SettingsContext = createContext()

const SettingsContextProvider = (props) => {

    const [pomodoro, setPomodoro] = useState(0)
    const [executing, setExecuting] = useState({})
    const [startAnimate, setStartAnimate] = useState(false)

    function startTimer() {
        setStartAnimate(true)
    }

    function pauseTimer() {
        setStartAnimate(false)
    }

    function stopTimer() {
        setStartAnimate(false)
    }

    const SettingBtn = () => {
        setExecuting({})
        setPomodoro(0)
    }

    function setCurrentTimer(active_state) {
        updateExecute({
            ...executing,
            active: active_state
        })
        setTimerTime(executing)
    }

    const updateExecute = updatedSettings => {
        setExecuting(updatedSettings)
        setTimerTime(updatedSettings)
    }

    const setTimerTime = evaluate => {
        switch (evaluate.active) {
            case "work":
                setPomodoro(evaluate.work)
                break;
            case "shortBreak":
                setPomodoro(evaluate.shortBreak)
                break;
            case "longBreak":
                setPomodoro(evaluate.longBreak)
                break;
            default:
                setPomodoro(0)
                break;
        }
    }

    const children = ({remainingTime}) => {
        const minuts = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60

        return `${minuts}:${seconds}`
    }

    return (
        <SettingsContext.Provider 
        value={{
            pomodoro,
            executing,
            startAnimate,
            stopTimer, 
            updateExecute,
            startTimer,
            pauseTimer,
            SettingBtn,
            setCurrentTimer,
            children
        }}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export default SettingsContextProvider