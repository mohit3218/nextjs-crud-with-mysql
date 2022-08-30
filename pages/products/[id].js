import axios from "axios";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import {handleDelete, abc} from "../../components/functions/ProductFunctions";
import Link from "next/link";

function ProductScreen({ product }) {
  const router = useRouter();
  return (
    <Layout>
    <div className="container">
    <Link href="/products" ><button className="btn btn-sm btn-success mb-3">Product Summary</button></Link>
        <div className="row">
            <div className="col-12">
            <p>Name: {product.title}</p>
            <p>Description: {product.description}</p>
            </div>
        </div>

        <div className="mt-7 flex justify-center">
            <button className="btn btn-primary" onClick={() => router.push("/products/edit/" + product.id)}> Edit </button>
            <button  className="btn btn-danger" onClick={() => handleDelete(product.id, router)}>Delete </button>
        </div>
    </div>
      
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: product } = await axios.get(
    "http://localhost:3000/api/products/" + query.id
  );

  console.log(product);

  return {
    props: {
      product,
    },
  };
};

export default ProductScreen;
