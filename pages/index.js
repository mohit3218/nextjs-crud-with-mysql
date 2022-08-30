import  ProductAdd from "../components/ProductAdd";
import Layout  from "../components/Layout";

function Index() {
  return (
    <Layout>
      <div className="container-fluid">
        <ProductAdd />
      </div>
    </Layout>
  );
}
export default Index;