import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {socket} from "../../socket"

const registerContext = createContext();

const RegisterProvider = ({children})=>{
    const [room, setRoom] = useState("Java");
    const [nickname, setNickname] = useState("");

    const [isLoggedin, setIsLoggedin] = useState(false);
    const login = ()=> setIsLoggedin(true);
    const logout = ()=> setIsLoggedin(false);

    let navigate = useNavigate()
    const submitHandler = (e)=>{
        e.preventDefault();
        const data = {
            name: nickname,
            room: room
        }
        socket.emit("joinRoom", data);
        navigate(room)
        login();
    }
 
    return(
        <registerContext.Provider value = {{room, setRoom, nickname, setNickname, submitHandler, logout, isLoggedin}}>
            {children}
            </registerContext.Provider>
    )
}
const UseRegister = ()=>{
    const registerCntx = useContext(registerContext);
    return registerCntx
}

export {RegisterProvider, UseRegister}