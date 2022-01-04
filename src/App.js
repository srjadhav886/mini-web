import './App.css'
import { useState } from "react";
export default function Instagram() {
  return (
    <>
      <Navbar></Navbar>
    </>

  );
}

function Navbar() {
  let [msg, setMsg] = useState("");

  const changeMessage = (e) => {
    setMsg(e.target.value);
  };

  let [msg1, setMsg1] = useState("");

  const changeMessage1 = (e) => {
    setMsg1(e.target.value);
  };
  let [msg2, setMsg2] = useState("");

  const changeMessage2 = (e) => {
    setMsg2(e.target.value);
  };
  let [msg3, setMsg3] = useState("");

  const changeMessage3 = (e) => {
    setMsg3(e.target.value);
  };

  const [userList, setUserList] = useState([]);
  const register = () => {
    const user = {

      Firstname: msg,
      Middlename: msg1,
      Lastname: msg2,
      Address: msg3,
    };
    const newList = [user, ...userList];
    setUserList(newList);
  }

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
      <h1 className='mt-3'>Personal Information</h1>
      <div className="row mt-2">
        <div className="col">
          <input type="text" className="form-control" placeholder="First name" aria-label="First name" value={msg} onChange={changeMessage} />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Middle name" aria-label="Middle name" value={msg1} onChange={changeMessage1} />
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" value={msg2} onChange={changeMessage2} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 ">
          <input type="text" className="form-control form-control-lg" placeholder="Address" aria-label="Address" value={msg3} onChange={changeMessage3} />
        </div>
      </div>

      <div class="mb-3 mt-2">
        <button class="btn btn-primary" type="submit" onClick={register}>Submit form</button>
      </div>

      <hr />
      <div>
        {userList.map((item, index) => (
          <div key={index}>
            <br /> <br />
            {item.Firstname} {item.Middlename} {item.Lastname} <br /> <br />{item.Address}
          </div>
        ))}
      </div>



    </>
  );
}