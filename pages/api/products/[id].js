import { pool } from "../../../lib/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProduct(req, res);
    case "DELETE":
      return await deleteProduct(req, res);
    case "PUT":
      return await updateProduct(req, res);
    default:
      return res.status(400).json({ message: "bad request" });
  }
}

const getProduct = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products WHERE id = ?", [
      req.query.id,
    ]);
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await pool.query("DELETE FROM products WHERE id = ?", [req.query.id]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    console.log(req.body)
    await pool.query("UPDATE products SET ? WHERE id = ?", [
      req.body,
      req.query.id,
    ]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};