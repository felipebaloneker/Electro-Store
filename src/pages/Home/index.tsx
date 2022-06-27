import { Box, Container, Grid } from '@mui/material';
import CardItem from '../../components/CardItem';
import Header from '../../components/Header';
import GlobalStyle from '../../global';

function Home() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Box
        sx={{
          flexGrow: 1,
          padding: '1rem'
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs>
            <CardItem title="Laptop Collection" image="any" />
          </Grid>
          <Grid item xs>
            <CardItem title="Laptop Collection" image="any" />
          </Grid>
          <Grid item xs>
            <CardItem title="Laptop Collection" image="any" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
export default Home;
