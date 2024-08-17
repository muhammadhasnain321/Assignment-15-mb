import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home'
import CreateUser from './Screen/createUser'

const App = () => {
  return (
    <div>
      <Routes >
        <Route>
          <Route path="/" element={<Home />} />
          <Route path='createuser' element={<CreateUser />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App