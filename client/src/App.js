import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './Components/Nav/Nav';
import OnlineUsers from './Pages/OnlineUsers/OnlineUsers';
import Rooms from './Pages/Rooms/Rooms';
import PublicChat from './Pages/PublicChat/PublicChat';


export default function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" exact={true} element={<PublicChat/>}/>
        <Route path="onlineUsers" element={<OnlineUsers/>}/>
        <Route path="rooms" element={<Rooms/>}/>
      </Routes>
    </BrowserRouter>
  )
}
