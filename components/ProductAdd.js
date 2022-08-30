import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProductAdd() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const router = useRouter();

    useEffect(() => {
      const fetchProduct = async (id) => {
        try {
          const { data } = await axios.get("/api/products/" + id);
          setTitle(data.title);
          setDescription(data.description);
        } catch (error) {
          console.error(error);
        }
      };
  
      if (router.query?.id) {
        fetchProduct(router.query.id);
      }
    }, [router.query.id]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        if (router.query?.id) {
          await axios.put("/api/products/" + router.query.id, {
            title: title,
            description: description,
          });
          toast.success("Product Updated");
        } else {
          if (!title || !description) {
            toast.error("title and description is required!");
            return;
        }
          const product = { title: title, description:  description};
          await axios.post("/api/products", product);
          toast.success("Product Saved");
        }

        router.push("/products");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    

    return (
      <div className="container">
      <Link href="/products" ><button className="btn btn-sm btn-success mb-3">Product Summary</button></Link>
        <div className="row">
          <div className="col-md-6">
            <h3>Add a Product</h3>
            <form  onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}  className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}  className="form-control" id="description" />
              </div>
              <button type="submit" className="btn btn-sm btn-success">
              {router.query?.id ? "Update Product" : "Save Product"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
