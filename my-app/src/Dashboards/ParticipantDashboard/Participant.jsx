import React, { useEffect, useState, createContext, useContext } from "react";
import { MDBContainer, MDBFile, MDBInput, MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import TeamDetails from "./TeamDetail";
import FileUpload from "./FileUpload";
import axios from "axios";
import Navbar from "../../Components/Navbar2";
import Swal from 'sweetalert2';


function Participant() {


  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")))
  const [fetchedData, setFetchedData] = useState({});
  const [status, setStatus] = useState("");



  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, [localStorage.getItem("data")])

  useEffect(() => {

    setStatus(fetchedData?.team?.status);
  }, [fetchedData])


  useEffect(() => {
    Object.keys(data).length > 0 &&
      axios.get(`/particpantsDetails/${data?.email}`).then(
        (response) => {
          console.log(response.data);
          setFetchedData(response?.data)
        },
        (error) => {
          console.log("this is error in team detail", error);
        }
      );
  }, []);



  const [git, setGit] = useState({
    gitHubLink: '',
  });


  /////////////////////////////////////////////////////////////////////////////////////


  const handleInput = (e) => {
    const { id, value } = e.target;
    setGit({ ...git, [id]: value });
  }


  const handleSubmit = () => {
    if (!git?.gitHubLink) {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Please enter GutHubLink!', });
    }
    else {
      fetchedData.team.gitHubLink = git.gitHubLink;
      // console.log(git);
      axios.post('/changeGithub', fetchedData.team)
        .then((response) => {
          Swal.fire(
            'Great',
            'Your GitHub is submitted successfully!',
            'success'
          )
          setGit({ ...git, gitHubLink: '' });

        }, (error) => {
          console.log(error);
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!', })
        });
    }
  };



  switch (status) {
    case "accepted":
      return (
        <>
          <Navbar />
          <MDBContainer fluid>
            {/* team details*/}
            {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />

              {/* ////////////////////////////file upload form////////// */}

              <MDBRow>
                {!fetchedData?.team?.gitHubLink && (
                  <MDBCol style={{ marginTop: "35px" }}>
                    <div className="ml-5 pb-2">
                      <MDBInput label="Github repository link" id="gitHubLink" value={git.gitHubLink} onChange={(e) => handleInput(e)} type="url" />
                      <br />
                      <MDBBtn onClick={handleSubmit}>Submit Github repository</MDBBtn>
                    </div>
                  </MDBCol>
                )}
                &nbsp;
                {!fetchedData?.team?.idea?.demo && (
                  <MDBCol>
                    <FileUpload userObj={fetchedData?.team?.idea} />
                  </MDBCol>
                )};
              </MDBRow>

              <MDBRow>
                {fetchedData?.team?.gitHubLink && fetchedData?.team?.idea?.demo && (
                  <h3 style={{ color: "green" }} class="text-center">Video and GitHub link uploaded successfully!</h3>
                )}
              </MDBRow>


              {/* ////////////////////////////////////////////////////////////// */}

            </>)}

          </MDBContainer>
        </>
      );

    case "rejected":
      return (
        <>
          <Navbar />
          <MDBContainer fluid>
            {/* team details*/}
            {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
              {/* <MDBBtn color="danger">Rejected</MDBBtn> */}
              <div>
                <h3 style={{ color: "red" }} class="text-center">Your Idea is not accepted, Better luck next time</h3>
                {/* {"Your Idea is not accepted, Better luck next time"} */}
              </div></>)}

          </MDBContainer>
        </>
      )

    case "reverted":
      return (
        <>
          <Navbar />
          <MDBContainer fluid>
            {/* team details*/}
            {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
              {/* <MDBBtn color="warning">Reverted</MDBBtn> */}
              <div>

                {Object.keys(fetchedData).length > 0 && (
                  <>
                    {/* ////////////////////////// */}
                    <div className="ideaCard">
                      <MDBRow>
                        <MDBCol md="4">
                          <h4 className="fw-bold">Reviews from the Panelist</h4>
                        </MDBCol>
                        <MDBCol md="12">
                          <h6 className="">{fetchedData?.team?.newComment}</h6>
                        </MDBCol>
                      </MDBRow>
                    </div>
                    {/* //////////////////////////// */}
                  </>

                )}

                {/* edit details */}
              </div></>)}

          </MDBContainer></>
      );
    default:
      return (
        <>
          <Navbar />
          <MDBContainer fluid>
            {Object.keys(data).length > 0 && (<> <TeamDetails userObj={data} />
              {/* <MDBBtn color="info">Pending</MDBBtn> */}
              <div>
                {/* Still Waiting for panelist */}
              </div></>)}
          </MDBContainer>
        </>
      );
  }
}
export default Participant;
