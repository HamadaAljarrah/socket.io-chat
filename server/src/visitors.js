let clients = []

const getVisitors = (data, id)=>{
    clients.push({...data, id: id})
    return clients
}

const deleteVisitor = (id)=>{
    clients = clients.filter(visitor => visitor.id !== id)
    return clients;
}

module.exports = { getVisitors , deleteVisitor}