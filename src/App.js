import './App.css'
export default function Instagram() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">AMAZE TV</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MOVIES</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="row mt-5">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Middle name" aria-label="Middle name" />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 ">
          <input type="text" className="form-control form-control-lg" placeholder="Address" aria-label="Address" />
        </div>
      </div>

    </>

  );
}