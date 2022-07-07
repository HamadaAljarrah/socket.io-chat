import React from 'react'
import "./App.css"
import { RegisterFrom } from './components/RegisterFrom/RegisterFrom'
import {Routes, Route, } from "react-router-dom" 
import { MessageFrom } from './components/Room/MessageFrom'
import { Protected } from './components/Protected/Protected'
import { UseRegister } from './components/RegisterFrom/register-context'


export default function App() {
    const { isLoggedin } = UseRegister()
    return (
        <Routes>
          <Route path="/" exact={true} element={<RegisterFrom/>}/>
          <Route path="/:room"  element={<Protected isLoggedIn={isLoggedin}><MessageFrom/></Protected>}/>
        </Routes>
    )
}
