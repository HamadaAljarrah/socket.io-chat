let staticRooms = [
    {
        name: "React",
        members: [],
        messages: []
    },
    {
        name: "Java",
        members: [],
        messages: []
    },
    {
        name: "C++",
        members: [],
        messages: []
    },
];


const getRoomNames = (socketRooms)=>{
    const toArray = Array.from(socketRooms);
    const filtered = toArray.filter(room => !room[1].has(room[0]));
    const roomNames = filtered.map(i => i[0]);
    return roomNames;
}



module.exports = {staticRooms, getRoomNames};



