import React from 'react'
import "./App.css"
import { RegisterFrom } from './components/RegisterFrom/RegisterFrom'
import {Routes, Route} from "react-router-dom" 
import { MessageFrom } from './components/Room/MessageFrom'

export default function App() {
  

    return (
        <Routes>
          <Route path="/" exact={true} element={<RegisterFrom/>}/>
          <Route path="/:room"  element={<MessageFrom/>}/>
        </Routes>
    )
}
