import { useRef } from "react"
import classes from "./Alert.module.css"

const Alert = ({message, className})=>{
    const el = useRef()
    const handleClose = ()=>{
        el.current.style.display = "none";
    }
    return(
      <div id="alert" ref={(el)} className={classes.alertContainer}>
        <button onClick={handleClose} className={classes.closeButton}>X</button>
        <p>{message}</p>
      </div>
    )
}

export default Alert;