import React from 'react'
import "./App.css"
import {Routes, Route, } from "react-router-dom" 
import { Protected } from './components/Protected/Protected'
import { UseRegister } from './components/RegisterFrom/register-context'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { ChatPage } from './pages/ChatPage/ChatPage'


export default function App() {
    const { isLoggedin } = UseRegister()
    return (
        <Routes>
          <Route path="/" exact={true} element={<RegisterPage/>}/>
          <Route path="/:room"  element={<Protected isLoggedIn={isLoggedin}><ChatPage></ChatPage></Protected>}/>
        </Routes>
    )
}
