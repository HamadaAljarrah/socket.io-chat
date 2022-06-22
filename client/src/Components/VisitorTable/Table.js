import React from 'react'
import classes from "./Table.module.css"
import TableRow from './TableRow'
import { HandleUpdate } from './table-logics'

export default function Table() {

    let {visitors} = HandleUpdate()
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
