import classes from "./MessageScreen.module.css"

export const Message = ({message, auther, time})=>{
    return (
      <div className={classes.messageContainer}>
        <p>{message}</p>
        <div>
          <span className={classes.auther}>{auther}</span>
          <span className={classes.time}>{time}</span> 
        </div>
        
      </div>
    )
  }