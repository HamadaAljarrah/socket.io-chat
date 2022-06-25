const staticRooms = [
    {
        name: "React",
        messages: ["Hi", "Hi there React people!"]
    },
    {
        name: "Java",
        messages: ["Hi", "Hi there Java people!"]
    },
    {
        name: "C++",
        messages: ["Hi", "Hi there C++ people!"]
    },
];
const joinedRoons = [];


const getActiveRooms = (socketRooms)=>{
    const arr = Array.from(socketRooms);
    const filtered = arr.filter(room => !room[1].has(room[0]));
    const res = filtered.map(i => i[0]);
    return res;
}



module.exports = {staticRooms, getActiveRooms};



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
