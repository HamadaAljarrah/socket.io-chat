const { staticRooms } = require("../socket/chatRooms")



exports.getRooms = async(req, res) => {
    res.json(staticRooms)
}

exports.createRoom = async(req, res)=>{
    const room = {
        name: req.body.name,
        members: [],
        messages:[]
    };
    staticRooms.push(room);
    res.json(staticRooms)
    //add error handling logic later
}

exports.editRoom = async (req, res)=>{
    const room  = req.params.name;
    const values = req.body;
    console.log(values);
    const theRoom = staticRooms.filter(r=> r.name === room);
    res.json(theRoom);
    //add error handling logic later
}

exports.deleteRoom = async(req, res)=>{
    const room  = req.params.name;
    let index;
    staticRooms.forEach((r,i) => {
        if (r.name === room) {
            index = i
            staticRooms.splice(index,1);
        }
    });
    res.json(staticRooms);
    //add error handling logic later

}