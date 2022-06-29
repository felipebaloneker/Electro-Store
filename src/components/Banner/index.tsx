import { Circle, ForkRightSharp } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import { StyledButton, StyledCircle } from './styles';

function Banner() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '25rem',
        display: 'flex',
        flexDirection: 'colunm',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        left: '0',
        maxWidth: '1280px',
        backgroundColor: 'var(--card-background)',
        marginLeft: '-0.05rem'
      }}
    >
      <Container>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <StyledCircle>
            02 <span>Days</span>
          </StyledCircle>
          <StyledCircle>
            10 <span>Hours</span>
          </StyledCircle>
          <StyledCircle>
            34 <span>Mins</span>
          </StyledCircle>
          <StyledCircle>
            60 <span>Secs</span>
          </StyledCircle>
        </Container>
        <Container sx={{ margin: '2rem 0 2rem 0' }}>
          <Typography
            sx={{
              fontSize: '1.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              margin: '0.2rem'
            }}
          >
            Hot Deal This Week
          </Typography>
          <Typography
            sx={{
              fontSize: '1.5rem',
              fontWeight: 300,
              textTransform: 'uppercase'
            }}
          >
            New Collection Up to 50% OFF
          </Typography>
        </Container>
        <StyledButton>STORE</StyledButton>
      </Container>
    </Box>
  );
}
export default Banner;
