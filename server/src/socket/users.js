const socket = require("./socket");

const users = [];



const addUser = (nickname, socketId) => {
   const exist = users.filter(u => u.id === socketId);
   exist.length === 0 && users.push({name: nickname, id: socketId});
}

const removeUser = (socketId) => {
   let index;
   users.forEach((u, i)=> {
      if(u.id === socketId) index = i;
   });
   users.splice(index, 1)
}

module.exports = { users, addUser, removeUser };