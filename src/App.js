import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import LandingPage from './Pages/LandingPage'
import ExerciseInformation from './Component/ExerciseInformation'
import NavBar from './Component/NavBar'
import './index.css'
import ExerciseDetails from './Pages/ExerciseDetails'

const App = () => {
  return (
    <BrowserRouter>
    <Box width="400px" sx={{width:{xl: '1488px'}}} m='auto'>
      <NavBar />
      <Routes>
        <Route path = '/' exact element={<LandingPage />} />
        <Route path = '/excerise/:id' exact element={<ExerciseInformation />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App