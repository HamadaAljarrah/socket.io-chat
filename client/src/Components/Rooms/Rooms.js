import React, {useEffect, useState } from 'react'
import Room from './Room'
import classes from "./Rooms.module.css"
import { SERVER_URL } from '../../scoket'
import axios from 'axios'

export default function Rooms() {
    const [rooms, setRooms] = useState([]);
    useEffect (()=>{
        const loadData = ()=>{
            axios.get(`${SERVER_URL}/rooms`)
            .then(({data})=> setRooms(data))
            .catch(error=> console.log(error))
        }
        loadData();
    },[]);

  return (
      <div className={classes.container}> 
        {rooms.map((r,i)=> <Room key={i} path={r} name={r}/>)}
      </div>
     
  )
}
