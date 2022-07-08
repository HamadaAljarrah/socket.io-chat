import React from 'react'
import { RegisterFrom } from '../../components/RegisterFrom/RegisterFrom'
import classes from "./RegisterPage.module.css"
export const RegisterPage = () => {
  return (
    <div className={classes.container}>
      <RegisterFrom/>
    </div>
    
  )
}
