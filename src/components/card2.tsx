import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";

export function Card2() {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height={200}
          image="/jpgs/3d-beauty-product-studio.jpg"
          alt="product"
        />
        <CardContent>
          <Typography variant="h5">product 1</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
            ut?
                  </Typography>
                  <Button variant="contained"> Buy</Button>
        </CardContent>
      </Card>
    </>
  );
}
