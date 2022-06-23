let rooms = [];

const getActiveRooms = (socketRooms)=>{
    const arr = Array.from(socketRooms);
    const filtered = arr.filter(room => !room[1].has(room[0]));
    rooms = filtered;
    const res = filtered.map(i => i[0]);
    return res;
}



module.exports = {getActiveRooms};