import { Box, Container, Grid, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '1rem',
        backgroundColor: 'var(--background-color)',
        color: 'var(--text-color-light)'
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Box>
            <Typography>ABOUT US</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer;
