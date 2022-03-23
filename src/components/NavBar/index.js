import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/styles';
import logo from '../../assets/JDWD-logoOnly.png';

const pages = ['About', 'Services', 'Templates'];


const NavBar = () => {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const icons = () => {
    return (
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="linkedin">
          <LinkedInIcon />
        </IconButton>
        <IconButton aria-label="linkedin">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="linkedin">
          <InstagramIcon />
        </IconButton>
      </Stack>
    );
  };

  return (
    <AppBar
      sx={{
        background: 'white',
        display: 'flex',
        justifyContent: 'space-evenly',
        height: '10vh',
      }}
      position="static"
      elevation={0}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <img style={{ width: '60px', height: 'auto' }} src={logo} alt='logo' />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem sx={{ color: theme.palette.dark }} key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          sx={{
            mb: '2px',
            display: { md: 'flex', xs: 'none' }
          }}
        >
          <img style={{ width: '65px', height: 'auto' }} src={logo} alt='logo' />
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: '10%' }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: theme.palette.dark, display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <Box>
          {icons()}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
