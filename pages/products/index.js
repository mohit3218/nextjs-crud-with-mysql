import axios from "axios";
import Link from "next/link";
import Layout from "../../components/Layout";
import ProductSummary from "../../components/ProductSummary";

export default function ProductView({ products = [] }) {
  const renderProducts = () => {
    if (products && products.length === 0) return <h1>No Products</h1>;
    return products.map((product) => (
      <ProductSummary key={product.id} product={product} />
    ));
  };
  return (
    <Layout>
      <Link href="/" ><button className="btn btn-sm btn-success mb-5">Add Product</button></Link>
      <table className="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        {renderProducts()}
        </table>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: {
      products,
    },
  };
};
