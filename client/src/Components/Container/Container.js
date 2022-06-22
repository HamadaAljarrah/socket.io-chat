import React from 'react'
import classes from "./Container.module.css"
export default function Container({children, className}) {
  const theClass = className + " " + classes.container 
  return (
    <div className={theClass}>{children}</div>
  )
}
