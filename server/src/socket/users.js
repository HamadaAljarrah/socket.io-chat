const users = {};

const addUser = (nickname, socketId) => {
   users.push({name: nickname, id: socketId})
}

const removeUser = (nickname) => {
   if(users.hasOwnProperty(nickname)) {
       delete users[nickname];
   }
}

module.exports = { users, addUser, removeUser };