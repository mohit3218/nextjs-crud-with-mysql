import Link from "next/link";
import { useRouter } from "next/router";
import {handleDelete, abc} from "./functions/ProductFunctions";

export default function ProductSummary({ product }) {
  const router = useRouter(); 
  return (
    <>

    <tbody>
    <tr>
      <th>{product.id}</th>
      <td>{product.title}</td>
      <td style={{width: "60%"}}>{product.description}</td>
      <td>
            <Link href={`/products/${product.id}`} ><button className="btn btn-sm btn-primary">View</button></Link>
            <button className="btn btn-sm btn-success" onClick={() => router.push("/products/edit/" + product.id)}> Edit </button>
            <button className="btn btn-sm btn-danger" onClick={() => {abc(); handleDelete(product.id, router)}}>Delete</button>
        </td>
    </tr>
  </tbody>
    </>
  );
}
