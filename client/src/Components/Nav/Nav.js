import React from 'react'
import Container from '../Container/Container'
import classes from "./Nav.module.css"
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <Container>
        <nav>
            <ul>
                <Link className={classes.link} to="/">Public Chat</Link>
                <Link className={classes.link} to="rooms">Rooms</Link>
                <Link className={classes.link} to="onlineUsers">Online Users</Link>
            </ul>
        </nav>
    </Container>
    
  )
}
