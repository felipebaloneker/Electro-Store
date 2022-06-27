import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

type Iprops = {
  title: string;
  image: string;
};

function CardItem({ title, image }: Iprops) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={image} />
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Shop Now
        </Button>
      </CardActions>
    </Card>
  );
}
export default CardItem;
