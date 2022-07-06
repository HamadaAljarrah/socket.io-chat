import React from 'react'
import { UseRegister } from './register-context'

export const RegisterFrom = () => {
    const {room, setRoom, nickname, setNickname, submitHandler} = UseRegister();

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Nickname</label>
                <input type="text" id='name' autoComplete='off' placeholder='write your name...' onChange={(e)=>setNickname(e.target.value)}/>
            </div>
            <div>
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
