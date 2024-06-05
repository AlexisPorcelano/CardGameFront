import image from './ninja.jpg'
import { Box, Typography, Button } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from '../../../Components/Card/Card'
import { ENDPOINT } from '../../../utils/constants'

export default function Hand() {

    const [hand, setHand] = useState([])

    const getCards = async () => {
        try {
            const response = await axios.get(`${ENDPOINT}/cards`)
            const { data } = response
            if (data) {
                setHand(data)
            }
        } catch (error) {
            window.alert(`Error: ${error.message}`)
        }
    }

    useEffect(() => {
        getCards()
    }, [])

    useEffect(() => {
        // console.log(hand);
    }, [hand])

    return (
        <Box sx={{display: 'flex'}} >
            {hand.length > 0 ? hand.map((e, i) => (
                <Card cardInfo={e} key={i} />
            )) : null}
        </Box>
    )

}