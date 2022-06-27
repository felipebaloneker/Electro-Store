import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { Banner } from './styles';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
type Iprops = {
  title: string;
  image: string;
};

function CardItem({ title, image }: Iprops) {
  return (
    <Card
      sx={{
        backgroundColor: 'var(--card-background)',
        display: 'flex',
        height: '18rem'
      }}
    >
      <CardActionArea>
        <Banner />
        <CardContent
          sx={{
            flexDirection: 'column',
            position: 'absolute'
          }}
        >
          <Typography
            color="var(--text-color-light)"
            sx={{
              fontWeight: 700,
              fontSize: '1.5rem',
              maxWidth: '1rem',
              maxHeight: '2rem',
              margin: '1rem'
            }}
          >
            {title.toUpperCase()}
          </Typography>
          <CardActions>
            <IconButton
              size="small"
              color="inherit"
              sx={{
                marginTop: '1rem'
              }}
            >
              <Typography
                color="var(--text-color-light)"
                sx={{
                  fontWeight: 300,
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                Shop Now
                <ArrowCircleRightIcon sx={{ margin: 1 }}></ArrowCircleRightIcon>
              </Typography>
            </IconButton>
          </CardActions>
        </CardContent>
        <CardMedia component="img" height="100%" image={image} alt={image} />
      </CardActionArea>
    </Card>
  );
}
export default CardItem;
