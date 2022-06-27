import * as React from 'react';
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Button,
  Typography,
  Tooltip,
  IconButton,
  Menu
} from '@mui/material';
import {
  MenuItem,
  SearchInputBase,
  Search,
  LogoDot,
  SearchButton
} from './styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  // Menu actions
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = ['Home', 'Hot Deals', 'Categories'];
  return (
    <AppBar
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        position: 'relative'
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          background: '#15161D',
          color: '#fff',
          borderBottom: '0.2rem solid #d10024',
          height: '7rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Electro
            <LogoDot></LogoDot>
          </Typography>
        </Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            height: '4rem',
            alignItems: 'center'
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Search>
          <SearchInputBase style={{ width: '85%', padding: '.5rem' }} />
          <SearchButton>Search</SearchButton>
        </Search>
        <Box>
          <Tooltip title="Open cart">
            <IconButton>
              <ShoppingCartIcon style={{ color: '#fff' }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          background: '#fff',
          height: '4rem',
          alignItems: 'center'
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            {page}
          </MenuItem>
        ))}
      </Box>
    </AppBar>
  );
}
export default Header;
