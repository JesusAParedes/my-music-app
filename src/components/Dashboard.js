import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Dashboard.css';



function Dashboard () {
    const [online, setOnline] = useState(false);
    const [volume, setVolume] = useState(20);
    const [quality, setQuality] = useState(2);
    const [notifications, setNotifications] = useState([]);

    const handleClick = (e) => {
      setOnline(e.target.checked);

      e.target.checked === false ? setNotifications(["Your application is offline. You won't be able to share or stream music to other devices."]) : setNotifications([""]);
      
    };

    const handleChange = (e) => {
      e.target.value > 3 || e.target.value === 0 ? setVolume(e.target.value) : setQuality(e.target.value);

      if(e.target.value === 1) {
        setNotifications(["Music quality is degraded. Increase quality if your connection allows it."])
      }
      else if(e.target.value >= 80) {
        setNotifications(["Listening to music at a high volume could cause long-term hearing loss."])
      } 
      else {
        setNotifications([""])}
    };

   useEffect = (notifications) => {
    
   }

    return (
        <div className='mainDiv'>
            <h1>Welcome User!</h1>
        <div className="dashboardDiv">
            <br />

            <Card 
            className='musicDashboard' 
            variant='outlined' 
            sx={{ width: 240, height: 175 }} 
            >
      <CardContent>
        <Typography variant="h5" component="div">
          Online Mode
        </Typography>
        <Typography variant="body2">
        Is this application connected to the internet?
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Switch
      checked={online}
      onClick={handleClick}
       />
      </CardActions>
    </Card>

    <Card 
    className='musicDashboard'
    variant='outlined' 
    sx={{ width: 250, height: 175 }} 
    >
      <CardContent>
        <Typography variant="h5" component="div">
        Master Volume
        </Typography>
        <Typography variant="body2">
        Overrides all other sound settings in this application.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Volume"
        value={volume}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        onChange={handleChange}
      />
    </Box>
      </CardActions>
    </Card>

    <Card 
    className='musicDashboard'
    variant='outlined' 
    sx={{ width: 250, height: 175 }} 
    >
      <CardContent>
        <Typography variant="h5" component="div">
        Sound Quality
        </Typography>
        <Typography variant="body2">
          Manually control the music quality in event of poor connection.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: -1, width: 240 }}>
        <InputLabel sx={{m: -1 }}style={{ marginBottom: '50%'}}> Quality </InputLabel>
        <Select
        labelId='soundQuality'
        value={quality}
        onChange={handleChange}
        >
        <MenuItem value={1}>Low</MenuItem>
        <MenuItem value={2}>Normal</MenuItem>
        <MenuItem value={3}>High</MenuItem>
        </Select>
      </FormControl>
      </Box>
      </CardActions>
    </Card>
        </div>
        <div>
        <h2>System Notifications</h2>
        {notifications.map((notificaton, index) => {
          return <p key={index}>{notificaton}</p>}
          )}
        </div>
        </div>
    )
}

export default Dashboard
