import { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../products.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, limit = 10 } = req.query;
  const pageNumber = parseInt(page as string, 10);
  const pageLimit = parseInt(limit as string, 10);

  // Розрахунок відступу для пагінації
  const startIndex = (pageNumber - 1) * pageLimit;
  const endIndex = pageNumber * pageLimit;

  const paginatedProducts = products.products.slice(startIndex, endIndex); //звертаємося до масиву products

  res.status(200).json({
    products: paginatedProducts,
    totalPages: Math.ceil(products.products.length / pageLimit),
    currentPage: pageNumber,
  });
}
