// import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import "./Panelist.css";
import PanelistModal from "./PanelistModal";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import Timer from "../JugdeComponents/Timer";


const Card = ({ teamObj }) => {
  // console.log(teamObj);

  const { teamId, teamName, idea } = teamObj
  return (
    <div className="teamCard">
      <MDBCard>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="6">
              <h6 className="fw-bold">Team ID</h6>
            </MDBCol>
            <MDBCol md="6">
              <h6 className="fw-bold">Team Name</h6>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6">
              <h4 className="fw-bold">{teamId}</h4>
            </MDBCol>
            <MDBCol md="6">
              <h4 className="fw-bold">{teamName}</h4>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <h6 className="fw-bold">Problem Statement</h6>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <p className="fw-medium">{idea?.problemStatement}</p>
            </MDBCol>
          </MDBRow>
          <PanelistModal item={{ teamId, teamName, statement: idea.problemStatement, description: idea.description, teamObj }} />
          {/* <PanelistModal userObj = {teamObj}/> */}
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};
function Panelist() {

  const [team, setTeam] = useState([]);
  useEffect(() => {

    axios.get('/getTeam')
      .then(response => {
        // console.log(response.data);
        setTeam(response.data);
        // console.log("this is team table" + team);
      }, (error) => {
        console.log(error);
      });
  }, [team]);


  const filtered = team.filter((value, index) => {
    return value.status === "pending"
  })

  return (
    <>
      <Navbar />
      <div className="cards">
        <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
          Panelist Dashboard
        </h3>
        <MDBRow>
          {filtered.map((value, index) => (
            <MDBCol style={{ marginBottom: "25px" }} md="4" key={index}>
              <Card teamObj={value} />
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    </>
  );
}
export default Panelist;
