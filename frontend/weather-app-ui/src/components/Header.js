import React from 'react'
import { AppBar} from '@mui/material'
import {Box} from '@mui/material'
import {Toolbar} from '@mui/material'
import {Typography} from '@mui/material'
import {Button} from '@mui/material'
import {IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' component="div" sx={{flexGrow:1}}>Weather App</Typography>
                <Button variant="contained" color='success' component={Link} to='/about'>About</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}
