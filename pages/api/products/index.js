import { pool } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProducts(req, res);
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const getProducts = async (req, res) => {
  try {
    const results = await pool.query("SELECT * FROM products");
    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { title, description } = req.body;

    const result = await pool.query("INSERT INTO products SET ?", {
      title,
      description,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};