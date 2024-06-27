import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from './Components/Card/Card';
import { Routes, Route, useNavigate } from "react-router-dom";
import Game from './Pages/Game/Game'
import Home from './Pages/Home/Home.jsx'
import Chat from './Components/chat/Chat.jsx'

function App() {

  return (
    <ThemeProvider theme={theme} >
      <Box sx={{border: '1px solid secondary'}} >
        <Routes>
          <Route path='/' element={<Chat/>} />
          <Route path='/game' element={<Game/>} />
          {/* <Route path='/chat' element={<Chat/>} /> */}
        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App
