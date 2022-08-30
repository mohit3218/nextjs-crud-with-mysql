import Header from "./Header"; 
import { Toaster } from "react-hot-toast";
import Footer from "./Footer"; 

export default function Layout({children}) {
	return (
		<>
      <Header />
        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              {children}
            </div>
          </div>
        </div>
      <Toaster />
	  <Footer />
    </>
	);
}