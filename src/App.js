import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes } from "react-router-dom";
import React from 'react'

function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>

    </div>
  )
}

export default App;
