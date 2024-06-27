import { Box, Typography, Button, TextField } from '@mui/material'
import { useState, useEffect } from 'react'

export default function Login() {

    const [user, setUser] = useState({
        email: null,
        password: null,
    })

    const handleChange = (event) => {
        const { id, value } = event.target
        setUser(prevUser => ({
            ...prevUser,
            [id]: value
        }))
    }


    return (
        <Box sx={{}} >
            <TextField
                id='email'
                label='E-mail'
                variant='standard'
                value={user.email}
                onChange={handleChange}
            />
            <TextField
                id='password'
                label='Password'
                variant='standard'
                value={user.password}
                onChange={handleChange}
            />
        </Box>
    )
}