import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { navbarlinks } from '../data/navbarData';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
const ResponsiveAppBar = () => {

  return (
    <AppBar position="fixed" elevation={8} color='secondary'>
      
        <Toolbar disableGutters>
          <Link to="/home" style={{textDecoration:'none',color:'inherit'}}><Typography variant='h5' sx={{letterSpacing:'0.2em',marginRight:'5px'}}>Mathematics</Typography></Link>
          <Box sx={{flexGrow:1}}>
              <Stack spacing={2} direction="row">
              {navbarlinks.map((link,i)=>{
                return(
                    <Button key={i} style={{color:'inherit'}}  ><Link to={link.link} key={i} style={{textDecoration:'none',color:'inherit'}}>{link.name}</Link></Button>
                )
            })}
              </Stack>
        </Box>
        <Box>
            <Button>pink</Button>
        </Box>
        </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;
