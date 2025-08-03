import React, { useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'
import {Typography} from '@mui/material'
import '@fontsource/roboto/300.css';
import axios from 'axios';

export default function Weather() {
    const [city,setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error,setError] = useState('');

    const fetchWeather = async(e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        setWeatherData(null);

        try{
            const response = await axios.get(`/weather/${city}`);
            setWeatherData(response.data);
        }catch (err){
            if(err.response){
                setError(err.response.data.error);
            }else{
                setError('Failed to fetch data.Check your network or server status.');
            }
        }finally{
            setLoading(false);
        }
    }

  return (
    <>
        <Typography variant='h5' display="flex" justifyContent="center" sx={{ mt: 4 }}>Welcome to Weather App</Typography>
        <Box component="form"
            onSubmit={fetchWeather}
            sx={{'& > :not(style)' : {m:1, width: '25ch'}, mt:2,}}
            noValidate
            autoComplete='off'
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <TextField id="outlined-basic" label="Enter your city here" variant="outlined" value={city} onChange={(e) => setCity(e.target.value)}/>
            <Button variant="contained" type='submit'>Submit</Button>
        </Box>
        <Box display="flex" justifyContent="center" sx={{mt:4}}>
            {loading && <CircularProgress/>}

            {error && (
                <Typography variant='body1' color='error'>
                    {error}
                </Typography>
            )}

            {weatherData && (
                <Box textAlign="center">
                    <Typography variant='h6'>Weather in {weatherData.city}</Typography>
                    <Typography variant='body1'>Temperature: {weatherData.temperature}</Typography>
                    <Typography variant='body1'>Description: {weatherData.description}</Typography>
                </Box>
            )}
        </Box>
    </>
  )
}
