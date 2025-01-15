import { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../products.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const productId = parseInt(id as string, 10);

  const product = products.products.find((item) => item.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(product);
}