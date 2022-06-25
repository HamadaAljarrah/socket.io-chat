import {useState, useEffect, useContext, createContext} from "react"
import axios from "axios";
import { SERVER_URL } from "../scoket";
const roomContext = createContext();


const RoomsProvider = ({children}) => {
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
        <roomContext.Provider value={{rooms, setRooms}}>{children}</roomContext.Provider>
    )
}

const useRooms = ()=>{
    const rooms = useContext(roomContext);
    return rooms
}

export {RoomsProvider, useRooms}