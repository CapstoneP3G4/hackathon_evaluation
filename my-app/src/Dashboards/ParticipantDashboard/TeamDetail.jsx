// import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCardHeader, MDBCardFooter, MDBCol, MDBTextArea, MDBBtn, MDBCard, MDBCardTitle, MDBCardText, MDBContainer, MDBCardBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



// const Card1 = ({ teamObj }) => {
//   const { name, team } = teamObj
//   return (
//     <>
//       <div className="ideaCard">
//         <MDBRow>
//           <>
//             <MDBCol md="6">
//               <h5 className="fw-bold ">Participant Name</h5>
//             </MDBCol>
//             <MDBCol md="6">
//               <h5 className="">{name}</h5>
//             </MDBCol>
//           </>
//         </MDBRow>

//       </div>
//       <div className="ideaCard">
//         <MDBRow>
//           <>
//             <MDBCol md="6">
//               <h5 className="fw-bold">Team Name</h5>
//             </MDBCol>
//             <MDBCol md="6">
//               <h6 className="">{team?.teamName}</h6>
//             </MDBCol>
//           </>
//         </MDBRow>
//       </div>

//     </>
//   );
// };
// const Card2 = ({ teamObj }) => {
//   const { name, team } = teamObj
//   return (
//     <>
//       <div className="ideaCard">
//         <MDBRow>
//           <MDBCol md="4">
//             <h5 className="fw-bold">Problem Statement</h5>
//           </MDBCol>
//           <MDBCol md="12">
//             <h6 className="">{team?.idea?.problemStatement}</h6>
//           </MDBCol>

//         </MDBRow>
//       </div>
//       <div className="ideaCard">
//         <MDBRow>
//           <MDBCol md="4">
//             <h5 className="fw-bold">Problem Description</h5>
//           </MDBCol>
//           <MDBCol md="12">
//             <h6 className="">{team?.idea?.description}</h6>
//           </MDBCol>
//         </MDBRow>
//       </div>
//     </>
//   );
// };


//////////////////////////////////////////////new card///////////////////////////////////////////////////////////

const Card1 = ({ teamObj }) => {
  const { name, team } = teamObj;
  // console.log(teamObj);



  return (
    <MDBCard alignment='center' style={{marginBottom:"20px"}}>
      <MDBCardHeader>Team Name: {team?.teamName}</MDBCardHeader>
      <MDBCardHeader>Participant Name: {name}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Problem Statement: {team?.idea?.problemStatement}</MDBCardTitle>
        <MDBCardText>Problem Description: {team?.idea?.description}</MDBCardText>
        {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
      </MDBCardBody>
      <MDBCardFooter>
        {team.status == "reverted" && (
          <MDBBtn href='#' color='warning' disabled>Status: {team.status}</MDBBtn>
        )}
        {team.status == "accepted" && (
          <MDBBtn href='#' color='success' disabled>Status: {team.status}</MDBBtn>
        )}
        {team.status == "rejected" && (
          <MDBBtn href='#' color='danger' disabled>Status: {team.status}</MDBBtn>
        )}

      </MDBCardFooter>
    </MDBCard>


  )
};





//////////////////////////////////////////////////////////////////////////////////////////////////////////

function TeamDetails({ userObj }) {
  const [teamData, setTeamData] = useState({});
  const [flag, setFlag] = useState(false);


  ////////////////////////////////////updated statemnt///////////////////////////////////////////////////////
  const [update, setUpdate] = useState({
    updatedStatement: '',
    updatedDescription: ''
  });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setUpdate({ ...update, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    teamData.team.idea.problemStatement = update?.updatedStatement;
    teamData.team.idea.description = update?.updatedDescription;
    teamData.team.status = "pending";
    console.log(teamData);

    axios.post("/updatedIdea", teamData.team.idea).then(
      (response) => {
        // console.log(response);
        Swal.fire("Great", "Idea sends succesfully!", "success");
      },
      (error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    );

  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/particpantsDetails/${userObj?.email}`).then(
      (response) => {
        // console.log( response.data);
        setTeamData(response.data);
        setFlag(true)
      },
      (error) => {
        console.log("this is error in team detail", error);
      }
    );
  }, [teamData]);


  return (
    <div className="cards">
      <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">
        Participant Details
      </h3>

      {flag && (
        <>
          <MDBRow>
            <MDBCol lg="6" class="d-flex justify-content-center align-items-center" >
              <Card1 teamObj={teamData} />
            </MDBCol>
            {/* <MDBCol lg="12">
              <Card2 teamObj={teamData} />
            </MDBCol> */}
          </MDBRow>
        </>
      )}
      {flag && teamData.team.status == "reverted" && (
        <>
          <div >
            <MDBRow>
              <MDBCol>
                <MDBTextArea style={{ resize: "none" }} label='Upadate your problem satement' id='updatedStatement' value={update.updatedStatement} onChange={(e) => handleInput(e)} rows={3} />
              </MDBCol>
              &nbsp;
              <MDBCol>
                <MDBTextArea style={{ resize: "none" }} label='Upadate your problem description' id='updatedDescription' value={update.updatedDescription} onChange={(e) => handleInput(e)} rows={3} />
              </MDBCol>
            </MDBRow>
            <MDBBtn style={{ margin: "5px 5px" }} onClick={handleSubmit}>Submit</MDBBtn>
          </div>
        </>
      )}
    </div>
  );
}
export default TeamDetails;