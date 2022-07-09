import React, { createContext, useContext, useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import { socket } from '../../socket';
import { UseRegister } from '../RegisterFrom/register-context';


const chatContext = createContext();
const initialState = {
    messages: [],
    users: [],
}

const actions = {
    SEND_MESSAGE: "SEND_MESSAGE",
    ADD_MESSAGE: "ADD_MESSAGE",
    ADD_USER: "ADD_USER",
    LEAVE_ROOM: "LEAVE_ROOM",
    CONNTECT: "CONNECT",

}

const chatReducer = (state, action)=>{
    switch(action.type){
        case actions.SEND_MESSAGE: 
            const data = {
                auther: action.payload.nickname,
                message: action.payload.messageText,
                room: action.payload.room,
                time: new Date().getHours().toString().padStart(2, '0') + ":" + new Date().getMinutes().toString().padStart(2 ,'0'),
                date: new Date(Date.now())
            }
            console.log(data);
            socket.emit("messaging", data );
            return {
                ...state,
                messages: [...state.messages, data]
            }
            
        case actions.ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload.data]
            }
        case actions.ADD_USER:
            return {
                ...state,
                users: [...action.payload.user]
            }
            
        case actions.LEAVE_ROOM:
            socket.emit("leaveRoom", action.payload.user)
            return state
    }
}


const ChatProvider = ({children}) => {
    const [state, dispatch] = useReducer(chatReducer, initialState)
    const navigate = useNavigate()
    const {logout} = UseRegister();
    let value = {
        messages: state.messages,
        users: state.users,
        connected: state.connected,
        sendMessage: (data)=> dispatch({ type: actions.SEND_MESSAGE, payload: data}), //data is {nickname, room, messageText}
        addMessage: (data)=> dispatch({ type: actions.ADD_MESSAGE,  payload:{data}}),
        addUser: (user)=> dispatch({ type: actions.ADD_USER, payload: {user}}),
        leaveRoom: (user)=> {
            dispatch({ type: actions.LEAVE_ROOM, payload: {user}})
            logout();
            navigate("/");
        }
    }
    return (
        <chatContext.Provider value={value}>
            {children}
        </chatContext.Provider>
    )
}

const useChat = ()=>{
    const chatCtx = useContext(chatContext)
    return chatCtx;
}

export {ChatProvider, useChat}