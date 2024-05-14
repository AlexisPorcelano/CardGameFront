import { Box, Typography, Button } from '@mui/material'

import image from './ninja.jpg'
import background from './gif1.gif'
import { useEffect } from 'react'

export default function Card({cardInfo}) {

    // const cardInfo = {
    //     name: 'Saboteour M-100',
    //     type: 'unit',
    //     unitType: 'Stealth',
    //     gears: 3,
    //     effect: 'Look at your opponents hand',
    //     atk: 1,
    //     hp: 1,
    //     agi: 5,
    //     image: image
    // }

    useEffect(() => {
        console.log(cardInfo);
    }, [cardInfo]) 

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 250,
            height: 350,
            border: '3px solid #18ffff',
            borderRadius: 2,
            padding: 2,
            alignItems: 'center',
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Typography variant='h5'>
                {cardInfo.name && cardInfo.name}
            </Typography>
            <Box sx={{ display: 'flex', width: 200, justifyContent: 'space-between' }}>
                <Typography variant='h6' style={{ color: '#b39ddb' }} >
                    {cardInfo.unitType}
                </Typography>
                <Typography variant='h6' style={{ color: '#64ffda' }} >
                    ⚙{cardInfo.gears && cardInfo.gears}
                </Typography>
            </Box>
            <img src={cardInfo.image && cardInfo.image} style={{ width: 200, height: 200, borderTopLeftRadius: 3, borderTopRightRadius: 3, borderTop: '1px solid #18ffff', borderLeft: '1px solid #18ffff', borderRight: '1px solid #18ffff' }} alt="image" />
            <Button variant='contained' color='secondary' sx={{ width: 210, borderBottomLeftRadius: 3, borderBottomRightRadius: 3, borderBottom: '1px solid #64ffda', borderLeft: '1px solid #64ffda', borderRight: '1px solid #64ffda' }} >
                <Typography variant='h6' style={{ height: 30, overflowY: 'auto', fontSize: 10 }} >{cardInfo.effect}</Typography>
            </Button>
            <Box sx={{ display: 'flex', width: 200, justifyContent: 'space-evenly' }}>
                <Typography variant='h4' >⚔{cardInfo.attack}</Typography>
                <Typography variant='h4' >💗{cardInfo.health}</Typography>
                <Typography variant='h4' >🦶{cardInfo.speed}</Typography>
            </Box>
        </Box>
    )
}