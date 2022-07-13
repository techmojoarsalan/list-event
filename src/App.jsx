import React from 'react'
import users from './users.json'

const App = () => {
  return (
    <>
      <h1>Users Name</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  )
}

export default App