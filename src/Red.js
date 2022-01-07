
import "./App.css";

import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function Appl() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}
function MyComponent() {
  const [EmpName, setEmpName] = useState("");
  const [EmpSname, setEmpSname] = useState("");
  const [EmpEmail, setEmpEmail] = useState("");
  const [EmpSalary, setEmpSalary] = useState("");
  const [list, setlist] = useState([]);

  const processEmpName = (e) => {
    const newName = e.target.value;
    setEmpName(newName);
  };

  const processEmpSname = (e) => {
    const newSName = e.target.value;
    setEmpSname(newSName);
  };

  const processEmpEmail = (e) => {
    const newEmpEmail = e.target.value;
    setEmpEmail(newEmpEmail);
  };

  const processEmpSalary = (e) => {
    const newEmpSalary = e.target.value;
    setEmpSalary(newEmpSalary);
  };

  const addUser = async () => {
    const url = "http://localhost:4000/us";
    const data = {
      name: EmpName,
      sname: EmpSname,
      email: EmpEmail,
      salary: EmpSalary,
    };
    await axios.post(url, data);
    const newList = [data, ...list];
    setlist(newList);

    setEmpName("");
    setEmpSname("");
    setEmpEmail("");
    setEmpSalary("");
  };

  useEffect(() => getUser(), []);
  const getUser = async () => {
    const url = "http://localhost:4000/users";
    const result = await fetch(url);
    const list = await result.json();

    const newList = [...list];
    setlist(newList);
  };

  useEffect(() => getUser());

  return (
    <div>
      <h1 className="alert alert-dark test-light">Employee Data</h1>
      <div>
        <input
          className="form   w-50 text-align:center border border-info"
          type="text"
          value={EmpName}
          placeholder="Enter EmpName"
          onChange={processEmpName}
        />
      </div>

      <div>
        <input
          className="form   w-50 text-align:center border border-info"
          type="text"
          value={EmpSname}
          placeholder="Enter EmpSname"
          onChange={processEmpSname}
        />
      </div>

      <div>
        <input
          className="form   w-50 text-align:center border border-info"
          type="text"
          value={EmpEmail}
          placeholder="Enter setEmpEmail"
          onChange={processEmpEmail}
        />
      </div>

      <div>
        <input
          className="form   w-50 text-align:center border border-info"
          type="text"
          value={EmpSalary}
          placeholder="Enter EmpSalary"
          onChange={processEmpSalary}
        />
      </div>

      <div>
        <button
          className="form   w-50 text-align:center border border-info"
          onClick={addUser}
        >
          Register
        </button>
      </div>

      <div>
        {list.map((item, index) => (
          <div key={index} className="">
            {item.name} {item.sname} {item.email}  {item.salary}
          </div>
        ))}

      </div>
    </div>
  );
}

export default Appl;