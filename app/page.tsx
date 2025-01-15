"use client";

import { useEffect, useState } from "react";
import { ProductsData } from "../types/productTypes";
import CustomPagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

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
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px",
        }}
      >
        {productsData.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  );
}
