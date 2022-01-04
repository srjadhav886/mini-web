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
  const [message, setmsg] = useState([]);
  const [msg, setMsg] = useState("");

  const changeMessage = (e) => {
    setMsg(e.target.value);
  };

  const messages = () => {
    const newmessagelist = [msg, ...message];
    setmsg(newmessagelist);
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
      <div>
        <h1>Input Operation</h1>
        <input type="text" placeholder='type something' value={msg} onChange={changeMessage} />
        <input type="button" value="Enter" onClick={messages} />
      </div>
      {message.map((item, index) =>
        <div className='mt-1' key={index}>{item}</div>
      )
      }

    </>
  );
}