import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="nav-item" href="/products">
          <a className="navbar-brand" >
            Products
          </a>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-item" href="/">
                <a className="nav-link active" aria-current="page">
                  Add Product
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
