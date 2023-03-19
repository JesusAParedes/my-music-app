import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import '../App.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function valuetext(volume) {
    return volume;
  }

function Dashboard () {
    const [online, setOnline] = useState(false);
    const [volume, setVolume] = useState(0);
    const [quality, setQuality] = useState(2);

    const handleChange = (e) => {
        setQuality(e.target.value);
    }

    return (
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
            <h1 style={{ marginLeft: '5%' }}>Welcome User!</h1>
        <div className="dashboardDiv" style={{ display: 'flex', alignItems: 'center'}}>
            
            <br />
            <Card 
            className='musicDashboard' 
            variant='outlined' 
            sx={{ minWidth: 275 }} 
            style={{ margin: '2%'}}>
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
      <Switch {...label} defaultChecked />
      </CardActions>
    </Card>

    <Card 
    className='musicDashboard'
    variant='outlined' 
    sx={{ minWidth: 285 }} 
    style={{ margin: '2%'}}>
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
        defaultValue={20}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </Box>
      </CardActions>
    </Card>

    <Card 
    className='musicDashboard'
    variant='outlined' 
    sx={{ minWidth: 275 }} 
    style={{ margin: '2%'}}>
      <CardContent>
        <Typography variant="h5" component="div">
        Sound Quality
        </Typography>
        <Typography variant="body2">
          Manually Control the music quality in event of poor connection.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel style={{ marginBottom: '50%'}}> Quality </InputLabel>
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
        <h2 style={{ marginLeft: '5%' }}>System Notifications</h2>
        </div>
        </div>
    )
}

export default Dashboard
