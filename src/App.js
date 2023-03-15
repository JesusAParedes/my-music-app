import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
      primary: {

      },
      secondary: {
        main: '#1976d2',
      },
})

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Music App
          </Typography>
          
        </Toolbar>
      </AppBar>
      <form className='form' style={{textAlign: 'center', display: 'flex'}}>
        <TextField id="standard-basic" label="Username*" variant="standard" className='TextField' />
        
        <TextField id="standard-basic" label="Password*" variant="standard" className='TextField' />
        <ThemeProvider theme={theme}>
        <Button style={{backgroundColor: '#1976d2', padding: '0px 75px'}} variant='contained' className='Login' >Login</Button>
        </ThemeProvider>
      </form>
    </Box>
    
  );
}

