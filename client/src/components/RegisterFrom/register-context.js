import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {socket} from "../../socket"

const registerContext = createContext();

const RegisterProvider = ({children})=>{
    const [room, setRoom] = useState("Java");
    const [nickname, setNickname] = useState("");
    let navigate = useNavigate()
    const submitHandler = (e)=>{
        e.preventDefault();
        const data = {
            name: nickname,
            room: room
        }
        socket.emit("joinRoom", data);
        navigate(room)
    }
 
    return(
        <registerContext.Provider value = {{room, setRoom ,nickname, setNickname, submitHandler}}>
            {children}
            </registerContext.Provider>
    )
}
const UseRegister = ()=>{
    const registerCntx = useContext(registerContext);
    return registerCntx
}

export {RegisterProvider, UseRegister}