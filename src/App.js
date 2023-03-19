import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';


const theme = createTheme({
      primary: {
      },
      secondary: {
        main: '#1976d2',
      },
})

export default function ButtonAppBar() {
  const[loggedIn, setLoggedIn] = useState(false);

  const handleClick = () => {
    let status = loggedIn === false ? true : false;
    setLoggedIn(status)
  }

  return (
    <div>
      {<NavBar />}
      {loggedIn ? <Dashboard /> :
      <form className='form' style={{textAlign: 'center', display: 'flex'}}>
      <TextField id="standard-basic" label="Username*" variant="standard" className='TextField' />
      
      <TextField id="standard-basic" label="Password*" variant="standard" className='TextField' />
      <ThemeProvider theme={theme}>
      
      <Button 
      style={{backgroundColor: '#1976d2', padding: '0px 75px'}} 
      variant='contained' 
      className='Login'
      onClick={handleClick}
      >Login</Button>
      </ThemeProvider>
    </form> 
    }
    </div>
    
  );
}

