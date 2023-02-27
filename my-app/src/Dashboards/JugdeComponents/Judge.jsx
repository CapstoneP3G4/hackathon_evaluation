//  import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import JudgeModal from "./JudgeModal";
// import "./.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Components/Navbar";
import Swal from "sweetalert2";

const Card = ({ teamObj }) => {
  const { teamId, teamName, idea } = teamObj
  return (
    <div className="ideaCard">
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
      <JudgeModal item={{ teamId, teamName, statement: idea.problemStatement, description: idea.description, teamObj }} />
    </div>
  );
};
function Judge() {
  const [team, setTeam] = useState([]);
  const [judgeData, setJudgeData] = useState(JSON.parse(localStorage.getItem("data")))

  useEffect(() => {
    setJudgeData(JSON.parse(localStorage.getItem("data")));
    console.log(judgeData);
  }, [localStorage.getItem("data")])


  useEffect(() => {
    axios.get('/getTeam')
      .then(response => {
        console.log(response.data);
        setTeam(response.data);
        // console.log( team);
      }, (error) => {
        console.log(error);
      });
  }, [team]);

  //////////////////////////////////////


  //   var str = "ball, apple, mouse,";
  // var hasApple = str.indexOf('apple') != -1;
  // console.log(hasApple);

  const filtered = team.filter((value, index) => {
    if (judgeData.role_id == "3" && value.status === "accepted" && (value.judgeList == null || value.judgeList.indexOf((judgeData?.id).toString()) == -1)) {
      // value.judgeList = value.judgeList +data?.id+",";
      // console.log(value);
      return true;
    }
    else return false;
  })

  ////////////////////////////////////

  return (
    <>
      <div className="cards">
        <Navbar/>
        <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
          Judge Dashboard
        </h3>
        <MDBRow>
          {filtered.map((value, index) => (
            <>
              <MDBCol style={{ marginBottom: "25px" }} md="4" key={index}>

                <Card teamObj={value} />
              </MDBCol>
            </>
          ))}
        </MDBRow>
      </div>
    </>);
}
export default Judge;
