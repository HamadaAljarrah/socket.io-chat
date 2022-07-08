import React, { useEffect } from 'react'
import { UseRegister } from './register-context'
import classes from "./RegisterForm.module.css"

export const RegisterFrom = () => {
    const {room, setRoom,disconnect, setdisconnect, setNickname, submitHandler} = UseRegister();

    if(disconnect){
        window.location.reload(false)
        setdisconnect(false)
    }

    return (
        <form className={classes.container} onSubmit={submitHandler}>
            <h1>Login</h1>
            <div className={classes.inputContainer}>
                <label htmlFor="name">Nickname</label>
                <input autoFocus type="text" id='name' autoComplete='off' placeholder='write your name...' onChange={(e)=>setNickname(e.target.value)}/>
            </div>
            <div className={classes.inputContainer}>
                <label htmlFor="rooms">Choose a room</label>
                <select name="rooms" id="rooms" value={room} onChange={(e)=>setRoom(e.target.value)}>
                    <option value="Java">Java</option>
                    <option value="Javascript">Javascript</option>
                    <option value="C++">C++</option>
                    <option value="Python">Python</option>
                    <option value="React">React</option>
                </select>
            </div>
            <button type='submit'>Join</button>
        </form>
    )
    }
