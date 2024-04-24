import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from './Components/Card/Card';
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {

  return (
    <ThemeProvider theme={theme} >
      <Box sx={{border: '1px solid secondary'}} >
        <Routes>
          <Route path='/Game' />
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
