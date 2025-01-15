import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";

interface ProductCardInfoProps {
  product: {
    id: number;
    title: string;
    thumbnail?: string;
    category: string;
    brand: string;
    price: number;
    discountPercentage: number;
    rating: number;
    description: string;
    stock: number;
    tags: string[];
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    images: string[];
  };
}

const ProductCardInfo: React.FC<ProductCardInfoProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  const showWeight = ["groceries", "furniture"].includes(product.category);
  const showReturnPolicy = ["furniture", "fragrances", "beauty"].includes(
    product.category
  );

  return (
    <Box sx={{ p: 4, maxWidth: "lg", mx: "auto" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {product.title}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image={product.thumbnail}
              alt={product.title}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2">
                Category: {product.category}
              </Typography>
              {product.brand && (
                <Typography variant="h6" component="h2">
                  Brand: {product.brand}
                </Typography>
              )}
              <Typography variant="h6" component="h2">
                Price: ${product.price.toFixed(2)}
              </Typography>
              <Typography variant="h6" component="h2">
                Discount: {product.discountPercentage}%
              </Typography>
              <Typography variant="h6" component="h2">
                Rating: {product.rating.toFixed(1)}
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 2 }}>
                {product.description}
              </Typography>
              <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                Quantity: {product.stock}
              </Typography>
              {showWeight && (
                <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                  Weight: {product.weight}g
                </Typography>
              )}
              {showReturnPolicy && (
                <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                  Return Policy: {product.returnPolicy}
                </Typography>
              )}
              <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                Shipping Information: {product.shippingInformation}
              </Typography>
              <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                Minimum Order Quantity: {product.minimumOrderQuantity}
              </Typography>
              <Box sx={{ mt: 2 }}>
                {product.tags.map((tag, index) => (
                  <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Product Photos
        </Typography>
        <Grid container spacing={2}>
          {product.images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={image}
                  alt={`Product image ${index + 1}`}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Reviews
        </Typography>
        {product.reviews.map((review, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6" component="h3">
                {review.reviewerName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(review.date).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 1 }}>
                Rating: {review.rating}
              </Typography>
              <Typography variant="body1" component="p" sx={{ mt: 1 }}>
                {review.comment}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductCardInfo;
