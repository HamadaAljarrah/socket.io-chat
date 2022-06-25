const staticRooms = ["React", "Java", "C++"];
const joinedRoons = [];


const getActiveRooms = (socketRooms)=>{
    const arr = Array.from(socketRooms);
    const filtered = arr.filter(room => !room[1].has(room[0]));
    const res = filtered.map(i => i[0]);
    return res;
}

// const fetchRooms = (socketRooms)=>{
//     const arr = Array.from(socketRooms);
//     const filtered = arr.filter(room => !room[1].has(room[0]));
//     const arr2 = filtered.map(i => {
//         return {
//             name: i[0],
//             id: i[1]
//         }
//     });
//     rooms = arr2
// }


module.exports = {staticRooms, getActiveRooms};