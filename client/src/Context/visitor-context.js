import { createContext, useContext } from "react";
import { HandleUpdate } from "../Components/VisitorTable/table-logics";

const visitorContext = createContext([]);

const VisitorProvider= ({children})=>{
    const {visitors, setVisitors} = HandleUpdate();
    return(
        <visitorContext.Provider value= {{visitors, setVisitors}}>{
            children}
        </visitorContext.Provider>
    )
}
const useVisitors = ()=>{
    const visitors = useContext(visitorContext);
    return visitors
}

export  {useVisitors, VisitorProvider};