import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Adashboard from '../pages/Dashboard/Home'
import "./Login.css";
export default function Login(props) {
  let history = useNavigate();
  const [Crud, setCrud] = useState({
    email: "",
    pass: "",
  });

  const { email, pass } = Crud;

  const onInputChange = (e) => {
    setCrud({ ...Crud, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8081/loginuser`, Crud);
      if (Crud.email === "admin@gmail.com") {
      history("/landingpage");
      
      } else {
        history("/landingpage");
      }
    } catch {
      let a = document.getElementById("er");
      a.innerHTML = "Entered Wrong Cerdintals";
      a.style.color = "red";
      a.style.fontWeight = 700;
    }
  };
  return (
    <>
      <div id="log-in" className="">
        <div class="container" id="container">
		     <div class="form-container log-in-container">
			  <form onSubmit={(e) => onSubmit(e)}>
				<center><h1>Login</h1></center>
				
				<span>SRS</span>
        <br></br>
				<input name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)} type="email" placeholder="Email" />
                      <br></br>
				<input type="password" placeholder="Password" name="pass"
                      value={pass}
                      onChange={(e) => onInputChange(e)}/>
				<Link to="/Registration" >Register</Link>
        <div id="er"></div>
				<button className="btn1" type="submit">Log In</button>
			</form>
		</div>
		<div class="overlay-container">
			{/* <div class="overlay">
				<div class="overlay-panel overlay-right">
					<h1>Centurion University</h1>
					<p>We help universities and colleges of all sizes and streams run better – from admissions to academics, back office to accreditations, desktop to mobiles – We empower students, faculty and management to collaborate efficiently and use insights effectively, benchmarking quality education while creating personalized learning experience</p>
				</div>
			</div> */}
		</div>
	</div>
      </div>

    </>
  );
}

/* <form className="type" onSubmit={(e) => onSubmit(e)}>
                  <div className="mb-3">
                    <label htmlFor="Email" className="form-label">
                      E-mail
                    </label>
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Enter your e-mail address"
                      name="email"
                      value={email}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Pass" className="form-label">
                      Password
                    </label>
                    <input
                      type={"text"}
                      className="form-control"
                      placeholder="Enter your passsword"
                      name="pass"
                      value={pass}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div id="er"></div>
                  <div>
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                    <Link className="btn btn-info mx-2" to="/">
                      Cancel
                    </Link>
                  </div>
                </form>*/