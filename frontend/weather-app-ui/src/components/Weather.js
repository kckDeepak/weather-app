import React from 'react'
import { Box } from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import {Typography} from '@mui/material'
import '@fontsource/roboto/300.css';


export default function Weather() {
  return (
    <>
        <Typography variant='h5' display="flex" justifyContent="center">Welcome to Weather App</Typography>
        <Box component="form"
            sx={{'& > :not(style)' : {m:1, width: '25ch'}}}
            noValidate
            autoComplete='off'
            display="flex"
            justifyContent="center"
        >
            <TextField id="outlined-basic" label="Enter your city here" variant="outlined"/>
        </Box>
        <Box display="flex" justifyContent="center">
            <Button variant="contained">Submit</Button>
        </Box>
    </>
  )
}
