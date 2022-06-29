import { Category } from '@mui/icons-material';
import { Button, CardContent, CardMedia, Typography } from '@mui/material';
import { StyledButton, StyledCard, StyledCardAction } from './styles';

type IProps = {
  image: string;
  name: string;
  category: string;
  price: number;
};
function CardProduct({ image, name, category, price }: IProps) {
  return (
    <StyledCard>
      <StyledCardAction>
        <CardMedia component="img" width="100%" image={image} alt={image} />
        <CardContent>
          <Typography
            color="var(--text-color-gray)"
            sx={{ fontWeight: 300, fontSize: '1rem' }}
          >
            {category.toUpperCase()}
          </Typography>
          <Typography
            variant="h6"
            color="var(--text-color-dark)"
            sx={{ fontWeight: 700, fontSize: '1.1rem' }}
          >
            {name.toUpperCase()}
          </Typography>
          <Typography
            variant="h5"
            color="var(--highlight-color)"
            sx={{ fontWeight: 700, fontSize: '1.5rem' }}
          >
            ${price}
          </Typography>
        </CardContent>
        <CardContent
          className="hidden-content"
          sx={{
            height: '100%',
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'var(--background-color)'
          }}
        >
          <StyledButton>ADD TO CART</StyledButton>
        </CardContent>
      </StyledCardAction>
    </StyledCard>
  );
}
export default CardProduct;
