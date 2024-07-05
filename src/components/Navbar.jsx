const Navbar = ({setCategory}) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-danger fs-4">NewsSite</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div
                onClick={() => setCategory("technology")}
                className="nav-link active"
                aria-current="page"
              >
                Technology
              </div>
            </li>
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div
                onClick={() => setCategory("business")}
                className="nav-link active"
                aria-current="page"
              >
                Business
              </div>
            </li>
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div
                onClick={() => setCategory("health")}
                className="nav-link active"
                aria-current="page"
              >
                Health
              </div>
            </li>
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div
                onClick={() => setCategory("science")}
                className="nav-link active"
                aria-current="page"
              >
                Science
              </div>
            </li>
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div
                onClick={() => setCategory("sport")}
                className="nav-link active"
                aria-current="page"
              >
                Sport
              </div>
            </li>
            <li style={{ cursor: "pointer" }} className="nav-item">
              <div
                onClick={() => setCategory("entertainment")}
                className="nav-link active"
                aria-current="page"
              >
                Entertainment
              </div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
