import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
  Rating,
  Button,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

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
    <>
      <Header />
      <Box
        sx={{
          p: 4,
          maxWidth: "md",
          mx: "auto",
          backgroundColor: "#f5f7fa",
        }}
      >
        {/* Hero Section */}
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mb: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            borderRadius: "15px",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={product.thumbnail}
            alt={product.title}
            sx={{
              flex: "1 1 auto",
              height: { xs: "300px", md: "100%" },
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              flex: "1 1 auto",
              padding: { xs: 3, md: 5 },
              backgroundColor: "#ffffff",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
              {product.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
              {product.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", color: "#2e7d32" }}
            >
              ${product.price.toFixed(2)}
            </Typography>
            <Typography
              variant="body2"
              sx={{ textDecoration: "line-through", color: "gray" }}
            >
              $
              {(product.price * (1 + product.discountPercentage / 100)).toFixed(
                2
              )}
            </Typography>
            <Rating
              value={product.rating}
              precision={0.1}
              readOnly
              sx={{ mt: 1 }}
            />
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
              {product.tags.map((tag, index) => (
                <Chip key={index} label={tag} color="primary" />
              ))}
            </Box>
          </Box>
        </Card>

        {/* Product Photos */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              color: "#343a40",
              fontWeight: "bold",
            }}
          >
            Product Photos
          </Typography>
          <Grid container spacing={2}>
            {product.images.map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={`Product image ${index + 1}`}
                    sx={{
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Additional Details */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            Additional Details
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  padding: 3,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                  borderRadius: "15px",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
                  Product Details
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Category:</strong> {product.category}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Brand:</strong> {product.brand}
                </Typography>
                {showWeight && (
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Weight:</strong> {product.weight}g
                  </Typography>
                )}
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Dimensions:</strong> {product.dimensions.width} x{" "}
                  {product.dimensions.height} x {product.dimensions.depth} cm
                </Typography>
                {showReturnPolicy && (
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    <strong>Return Policy:</strong> {product.returnPolicy}
                  </Typography>
                )}
                <Typography variant="body1" sx={{ mb: 1 }}>
                  <strong>Minimum Order Quantity:</strong>{" "}
                  {product.minimumOrderQuantity}
                </Typography>
              </Card>
            </Grid>
          </Grid>
          {/* Reviews */}
          <Box sx={{ mt: 5 }}>
            <Typography
              variant="h5"
              sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
            >
              Customer Reviews
            </Typography>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 2,
                    padding: 3,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                    borderRadius: "10px",
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {review.reviewerName} -{" "}
                    {new Date(review.date).toLocaleDateString()}
                  </Typography>
                  <Rating value={review.rating} precision={0.1} readOnly />
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {review.comment}
                  </Typography>
                </Card>
              ))
            ) : (
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                No reviews available.
              </Typography>
            )}
          </Box>

          {/* Back to products button */}
          <Box sx={{ mt: 5, textAlign: "center" }}>
            <Link href="/" passHref>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  fontWeight: "bold",
                  padding: "10px 20px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ff4081",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Back to Products
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductCardInfo;
