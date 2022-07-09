import React from 'react'
import classes from "./SideBar.module.css"
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const SideBar = ({className, users, room}) => {
  const theClass = className  + " " + classes.container;
  return (
    <div className={theClass}>
      <div className={classes.headerWrapper}>
        <div className={classes.headerContainer}>
          <div className={classes.iconContainer}><MeetingRoomIcon className={classes.icon}/></div>
          <h1>Room name</h1>
        </div>
        <h4>Java</h4>
      </div>

      <div className={classes.bodyWrapper}>
        <div className={classes.headerContainer}>
        <div className={classes.iconContainer}><PeopleAltIcon className={classes.icon}/></div>
          <h1>Online Users</h1>
        </div>
        <ul>
          {users.map((u,i)=>{
            return (
              <div key={i} className={classes.nameRow}>
                <div className={classes.dot}></div>
                <li>{u.name}</li>
              </div>
            )
          })}
        </ul>
        
      </div>
    </div>
  )
}
