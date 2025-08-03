import React from 'react'
import Header from './Header'
import { Typography } from '@mui/material'

export default function About() {
  return (
    <>
    <Header/>
    <Typography variant='h6' component="div" sx={{mt:4}} display='flex' justifyContent='center'>
        Hi, I am Chaitanya 
        <br/>
        This is a basic weather app that I built using React and Express
    </Typography>
    </>
  )
}
