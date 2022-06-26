let staticRooms = [
    {
        name: "React",
        members: [],
        messages: [
                {name: "user1", message: "Hi"},
                {name: "user2", message: "Hi React People!"}           
        ]
    },
    {
        name: "Java",
        members: [],
        messages: [
            {name: "user1", message: "Hi"},
            {name: "user2", message: "Hi Java People!"}           
        ]
    },
    {
        name: "C++",
        members: [],
        messages: [
            {name: "user1", message: "Hi"},
            {name: "user2", message: "Hi C++ People!"}           
        ]
    },
];


const getRoomNames = (socketRooms)=>{
    const toArray = Array.from(socketRooms);
    const filtered = toArray.filter(room => !room[1].has(room[0]));
    const roomNames = filtered.map(i => i[0]);
    return roomNames;
}



module.exports = {staticRooms, getRoomNames};



