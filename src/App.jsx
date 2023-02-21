import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './Sidebar.jsx';

const App = () => {
  return (
    <div>
      <Sidebar>
      <Routes>
       <Route exact={true} path='/' element={<Dashboard/>}/>


      </Routes>
      </Sidebar>
    </div>
  )
}

export default App
