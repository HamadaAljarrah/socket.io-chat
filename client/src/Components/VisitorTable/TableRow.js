import React from 'react'
import classes from "./Table.module.css"

export default function TableRow({index,ip,country,flag,region,city}) {
  return (
    <tr key={index}>
        <td >{index}</td>
        <td>{ip}</td>
        <td><img className={classes.flag} src={flag}/></td>
        <td>{country}</td>
        <td>{region}</td>
        <td>{city}</td>
    </tr>
  )
}
