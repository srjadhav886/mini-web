import axios from "axios";
import './App.css'
import { useEffect, useState } from "react";
export default function Instagram() {
    return (
        <>
            <Navbar></Navbar>
        </>

    );
}

function Navbar() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [list, setList] = useState([]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const register = async () => {
        if (username == "" || password == "") {
            alert("Validation fails");
            return;
        }

        const url = "http://localhost:4000/us";
        const data = {
            username: username,
            password: password,
        };

        // AJAX using AXIOS
        await axios.post(url, data);

        const newList = [data, ...list];
        setList(newList);

        setUsername("");
        setPassword("");
    };
    useEffect(() => getUser(), []);
    const getUser = async () => {
        const url = "http://localhost:4000/users";
        const result = await fetch(url);
        const list = await result.json();

        const newList = [...list];
        setList(newList);
    };

    useEffect(() => getUser(), []);

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
            <div className="col mt-2">
                <div className="col-6 mb-2">
                    <input type="text" className="form-control form-control-lg" placeholder="username" aria-label="First name" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="col-6 mb-2">
                    <input type="text" className="form-control form-control-lg" placeholder="password" aria-label="Middle name" value={password} onChange={handlePasswordChange} />
                </div>

                <div class="mb-3 mt-3">
                    <button class="btn btn-primary" type="submit" onClick={register}>Submit form</button>
                </div>

                <hr />
                <div>
                    {list.map((item, index) => (
                        <div key={index} className="alert alert-secondary fs-4">
                            {item.username} {item.password}
                        </div>
                    ))}
                </div>

            </div>

        </>
    );
}