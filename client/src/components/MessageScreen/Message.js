import classes from "./MessageScreen.module.css"

export const Message = ({message, auther, time, messageClass})=>{
    return (
      <div className={messageClass}>
        <p >{message}</p>
        <div>
          <span className={classes.auther}>{auther}</span>
          <span className={classes.time}>{time}</span> 
        </div>
        
      </div>
    )
  }