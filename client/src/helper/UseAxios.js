// import {useState, useEffect} from 'react'
// import axios from 'axios';

// export default function UseAxios(url) {
//     const [data, setData] = useState();
//     const [error, setError] = useState("");
//     const [loaded, setLoaded] = useState(false);

//     useEffect (()=>{
//         const loadData = ()=>{
//             // try {
//             //     const {data} = axios(url);
//             //     setData(data)
//             // } catch (error) {
//             //     setError(error)
//             // } finally{
//             //     setLoaded(true);
//             // }
//             axios.get(url)
//             .then(({data})=> setData(data))
//             .catch(error=> setError(error))
//             .finally(setLoaded(true))
//         }
//         loadData();
//     },[]);

//     return {data, error, loaded}
// }
