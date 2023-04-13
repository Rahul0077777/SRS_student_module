import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    basket: "",
    credit: "",
    subjectcode:"",
    subname:""
  });

  const { basket,credit,subjectcode,subname} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8085/user", user);
    Swal.fire({
      title: "Success",
      text: "Alert successful",
      icon: "success",
      confirmButtonText: "OK",
    });
    navigate('/');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border  rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4 text-light bg-dark">Add Subject</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="basket" className="form-label">
               Basket
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Basket"
                name="basket"
                value={basket}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="credit" className="form-label">
                Credit
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Credit"
                name="credit"
                value={credit}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject-code" className="form-label">
                subject-code
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Subject code"
                name="subjectcode"
                value={subjectcode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject name" className="form-label">
                subject name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Subject-name"
                name="subname"
                value={subname}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}