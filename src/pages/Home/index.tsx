import { Box, Container, Grid } from '@mui/material';
import CardItem from '../../components/CardItem';
import Header from '../../components/Header';
import GlobalStyle from '../../global';
import shop01 from '../../assets/images/shop01.png';
import shop02 from '../../assets/images/shop02.png';
import shop03 from '../../assets/images/shop03.png';
import { SectionTitle } from './styles';
import CardProduct from '../../components/CardProduct';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';

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
        {/* New Products  Section */}
        <SectionTitle>NEW PRODUCTS</SectionTitle>
        <Container
          sx={{
            display: 'flex'
          }}
        >
          <CardProduct
            category="category"
            name="product name goes here"
            image={shop01}
            price={980}
          />
          <CardProduct
            category="category"
            name="product name goes here"
            image={shop02}
            price={980}
          />
          <CardProduct
            category="category"
            name="product name goes here"
            image={shop03}
            price={980}
          />
          <CardProduct
            category="category"
            name="product name goes here"
            image={shop03}
            price={980}
          />
        </Container>
        <Banner />
        {/* New Products  Section */}
        <SectionTitle>TOP SELLING</SectionTitle>
        <Container
          sx={{
            display: 'flex'
          }}
        >
          <CardProduct
            category="category"
            name="product name goes here"
            image={shop01}
            price={980}
          />
          <CardProduct
            category="category"
            name="product name goes here"
            image={shop02}
            price={980}
          />
          <CardProduct
            category="category"
            name="product name goes here"
            image={shop03}
            price={980}
          />
          <CardProduct
            category="category"
            name="product name goes here"
            image={shop03}
            price={980}
          />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
export default Home;
