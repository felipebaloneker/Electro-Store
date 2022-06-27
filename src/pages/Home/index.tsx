import { Box, Container, Grid } from '@mui/material';
import CardItem from '../../components/CardItem';
import Header from '../../components/Header';
import GlobalStyle from '../../global';
import shop01 from '../../assets/images/shop01.png';
import shop02 from '../../assets/images/shop02.png';
import shop03 from '../../assets/images/shop03.png';
import { Title } from './styles';

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
        {/* Collections Banner  */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs>
            <CardItem title="Laptop Collection" image={shop01} />
          </Grid>
          <Grid item xs>
            <CardItem title="Cameras Collection" image={shop02} />
          </Grid>
          <Grid item xs>
            <CardItem title="Acessories Collection" image={shop03} />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          padding: '1rem'
        }}
      >
        <Title>NEW PRODUCTS</Title>
      </Box>
    </>
  );
}
export default Home;
