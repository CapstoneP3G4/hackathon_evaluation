import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import Admin from "../Dashboards/AdminComponents/Admin";
import axios from "axios";
import Participant from "../Dashboards/ParticipantDashboard/Participant";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

function LoginPage() {
  const [isSubmit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const [teamForm, setTeamForm] = useState({
    email: "",
    password: "",
  });
  const italicText = {
    color: "#ccc",
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setTeamForm({ ...teamForm, [id]: value });
  };

  const handleclick = (e) => {
    e.preventDefault();
    window.login = true;
    window.status = "Logout";
    setSubmit(true);
    axios.post("/login", teamForm).then(
      (response) => {
        // //////////////send response to dashboard

        localStorage.setItem("data", JSON.stringify(response.data));
        console.log(response.data);

        if (response.data.role_id === 4) {
          navigate("/participant");
        } else if (response.data.role_id === 3) {
          navigate("/judge");
        } else if (response.data.role_id === 2) {
          navigate("/panelist");
        } else if (response.data.role_id === 1) {
          navigate("/AdminDashboard");
        }

        ///////////////////////////
      },
      (error) => {
        console.log(error);
        // alert("Username or password is incorrect");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or password is incorrect!",
          // footer: '<a href="">Why do I have this issue?</a>'
        });
      }
    );
  };

  return (
    <>
      <Navbar />
      <MDBContainer fluid className="p-3 my-5 h-custom">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </MDBCol>

          <MDBCol col="4" md="6">
            <MDBInput
              id="email"
              value={teamForm.email}
              onChange={(e) => handleInput(e)}
              wrapperClass="mb-4"
              label=<span style={italicText}>Email Address</span>
              type="email"
              size="lg"
            />
            <MDBInput
              id="password"
              value={teamForm.password}
              onChange={(e) => handleInput(e)}
              wrapperClass="mb-4"
              label=<span style={italicText}>Password</span>
              type="password"
              size="lg"
            />

            <p className="small fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <Link to="/registrationForm" style={{ color: "blue" }}>
                Register{" "}
              </Link>
            </p>

            <div className="col-12">
              <MDBBtn
                onClick={handleclick}
                type="submit"
                className="bg-primary shadow-1-strong"
              >
                {" "}
                LogIn{" "}
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default LoginPage;
