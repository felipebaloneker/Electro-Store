import * as React from 'react';
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  Button,
  Typography,
  Tooltip,
  IconButton
} from '@mui/material';
import {
  MenuItem,
  SearchInputBase,
  Search,
  LogoDot,
  SearchButton
} from './styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  const handleOpenNavMenu = () => {};
  const handleCloseNavMenu = () => {};
  const pages = ['Home', 'Hot Deals', 'Categories'];
  return (
    <AppBar
      style={{
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
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
            variant="h4"
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
      <Container
        maxWidth="xl"
        style={{
          display: 'flex',
          background: '#fff',
          height: '4rem',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' }
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              {page}
            </MenuItem>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
}
export default Header;
