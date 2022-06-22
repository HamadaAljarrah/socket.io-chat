import React, {useEffect, useState} from 'react'
import axios from "axios"
import classes from "./Table.module.css"
import TableRow from './TableRow'
import { socket } from '../../scoket'
export default function Table() {
    const [visitors, setVisitors] = useState([]);

    const getVisitor = async () => {
        const { data } = await axios("https://ipapi.co/json/");
        const visitor = {
            ip: data.ip,
            city: data.city,
            region: data.region,
            flag: `https://countryflagsapi.com/png/${data.country_code}`,
            country: data.country_name, 
        }
        socket.emit("newVisitor", visitor);

        socket.on("newVisitor", (data)=>{
            setVisitors(data);
        })
        socket.on("deleteVisitor", (data)=>{
            setVisitors(data);
        })
    };

    useEffect(()=>{getVisitor()},[])

  return (
    <>
        <h1>Online Users<div className={classes.greenDot}></div></h1>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>IP</th>
                    <th>Flag</th>
                    <th>Country</th>
                    <th>Region</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {visitors.map((visitor, index)=><TableRow
                    key={index}
                    index={index +1}
                    ip={visitor.ip}
                    country={visitor.country}
                    flag={visitor.flag}
                    region={visitor.region}
                    city={visitor.city}
                />)}
            </tbody>
        </table>
    </>
    
  )
}
