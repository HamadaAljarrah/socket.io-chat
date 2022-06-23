import {useEffect, useState} from 'react'
import axios from "axios"
import { socket } from '../../scoket'


const filterTableUsers = (data)=>{
    const d = data
    d.forEach((el, index) => {
        for (let i = 0; i < data.length; i++) {
            if(i !== index) {
                if (el.id === data[i].id){
                    data.splice(i, 1)
                }
            }
        }
    })
    return d;
}

export const HandleUpdate = ()=>{
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
            const user = filterTableUsers(data);
            setVisitors(user);
            console.log(user);
        })
        socket.on("deleteVisitor", data=>setVisitors(data))
    };
    useEffect(()=>{getVisitor();},[])
    return {visitors}
}


