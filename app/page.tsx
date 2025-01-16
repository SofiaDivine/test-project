"use client";

import { useEffect, useState } from "react";
import { ProductsData } from "../types/productTypes";
import CustomPagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Layout from "@/layout";
import { Box, Typography, Grid } from "@mui/material";

export default function HomePage() {
  const [productsData, setProductsData] = useState<ProductsData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `http://localhost:3000/api/products?page=${currentPage}&limit=10`,
          {
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProductsData(data);
        setTotalPages(data.totalPages);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      }
    }

    fetchProducts();
  }, [currentPage]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productsData) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ textAlign: "center", color: "#343a40" }}
      >
        Products
      </Typography>
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {productsData.products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Box>
    </Layout>
  );
}
