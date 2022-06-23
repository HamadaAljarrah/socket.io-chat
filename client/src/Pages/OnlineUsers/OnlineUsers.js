import React from 'react'
import Container from '../../Components/Container/Container'
import Table from '../../Components/VisitorTable/Table'
import { useVisitors } from '../../Context/visitor-context'

export default function OnlineUsers() {
  const {visitors} = useVisitors();
  console.log(visitors);
  return (
    <Container>
        <Table visitors = {visitors}/>
    </Container>
  )
}
