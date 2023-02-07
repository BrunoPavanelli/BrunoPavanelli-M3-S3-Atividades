import React from 'react'
import { CardStyled } from './CardStyled'

const Card = ({ user }) => {
  return (
    <CardStyled>
        <h1>Welcome {user.user}</h1>
        <h3>{user.email}</h3>
    </CardStyled>
  )
}

export default Card