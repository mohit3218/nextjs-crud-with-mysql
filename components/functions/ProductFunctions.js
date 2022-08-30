import axios from "axios";
import toast from "react-hot-toast";


export const handleDelete = async (id, router) => {
    try {
      await axios.delete("/api/products/" + id);
      toast.success("Product deleted");
      router.push("/products");
    } catch (error) {
      console.error(error.response.data.message);
    }
};

export const abc = () => {
    console.log('abc called');
};

// export default handleDelete;