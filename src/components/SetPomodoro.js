import React, { useContext, useState } from "react"
import { SettingsContext } from "../context/SettingsContext"
import Button from "./Button"

const SetPomodoro = () => {

    const {updateExecute} = useContext(SettingsContext)

    const [newTimer, setNewTimer] = useState({
        work: 0.3,
        shortBreak: 0.2,
        longBreak: 1,
        active: 'work'
    })

    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case "work":
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break
            case "shortBreak":
                setNewTimer({
                    ...newTimer,
                    shortBreak: parseInt(value)
                })
                break
            case "longBreak":
                setNewTimer({
                    ...newTimer,
                    longBreak: parseInt(value)
                })
                break
            default:
                break
        }

        console.log(newTimer)
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }

    return (
        <div className="form-container">
            <form noValidate>
                <div className="input-wrapper">
                    <input className="input" name="work" onChange={handleChange} value={newTimer.work} />
                    <input className="input" name="shortBreak" onChange={handleChange} value={newTimer.shortBreak} />
                    <input className="input" name="longBreak" onChange={handleChange} value={newTimer.longBreak} />
                </div>
                <div>
                    <Button title="Set timer" activeClass="" _callback={handleSubmit} />
                </div>
            </form>
        </div>
    )
}

export default SetPomodoro