import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../products.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10, category = "all" } = req.query;
  const pageNumber = parseInt(page as string, 10);
  const pageLimit = parseInt(limit as string, 10);

  let filteredProducts = products.products;

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.toLowerCase() === (category as string).toLowerCase()
    );
  }

  const startIndex = (pageNumber - 1) * pageLimit;
  const endIndex = pageNumber * pageLimit;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.status(200).json({
    products: paginatedProducts,
    totalPages: Math.ceil(filteredProducts.length / pageLimit),
    currentPage: pageNumber,
  });
}

