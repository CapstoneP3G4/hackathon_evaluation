import React, { useState, useEffect } from "react";
import { MDBBtn, MDBModal, MDBCol,MDBRow,MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBRange } from "mdb-react-ui-kit";
import Marking from "./Marking";
import VideoPlayer from "./VideoPlayer";
import axios from "axios";
import Timer from "./Timer";
import Swal from "sweetalert2";
import ReactPlayer from "react-player";



export default function JudgeModal({ item }) {
  const { teamName, description, statement, teamObj } = item;
  const [basicModal, setBasicModal] = useState(false);
  const [ui, setUi] = useState(0);
  const [ppt, setPpt] = useState(0);
  const [workflow, setWorkflow] = useState(0);
  const [total, setTotal] = useState(0);


  const [judgeData, setJudgeData] = useState(JSON.parse(localStorage.getItem("data")))

  // console.log(teamObj);


  useEffect(() => {
    setJudgeData(JSON.parse(localStorage.getItem("data")));
  }, [localStorage.getItem("data")])

  const refreshPage = () => {
    window.location.reload(false);
  }

  const toggleShow = () => setBasicModal(!basicModal);

  // console.log(teamObj);

  const handleSubmit = (e) => {
    teamObj.marks = parseInt(e.target.value);
    teamObj.judgeList = item.teamObj.judgeList + judgeData?.id + ",";
    // console.log(teamObj);
    setBasicModal(!basicModal);

    axios.post("/marksChange", teamObj)
      .then((response) => {
        // alert("marks added successfully");
        Swal.fire("Great", "Response Added Successfully!");

      }, (error) => {
        console.log(error);
        Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" });
      });
    // refreshPage();
  }


  useEffect(() => {

  }, []);


  useEffect(() => {
    let data = parseInt(ui) + parseInt(ppt) + parseInt(workflow);
    setTotal(data);

  }, [ui, ppt, workflow]);

  console.log(teamObj);

  // console.log("the url is:");
  // var X = teamObj?.idea?.demo;
  // var Y = "public";
  // var Z = X.slice(X.indexOf(Y) + Y.length);
  // console.log(Z);

  //   const url = "upload/"+teamObj.idea.demo;



  return (
    <>

      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "flex-end",
          //   backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <MDBBtn onClick={toggleShow}>Review</MDBBtn>
      </div>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog centered size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <h4>Team: {teamName}</h4>
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              {/* <Timer></Timer> */}

              <div style={{ width: "100%", wordWrap: "break-word" }}>
                <h6 style={{ display: "inline" }}>Problem Statement: </h6> <p style={{ display: "inline" }}>{statement}</p>
                <br />
                <h6 style={{ display: "inline" }}>Problem Description: </h6> <p style={{ display: "inline" }}>{description}</p>
              </div>

              <div style={{ width: "100%", wordWrap: "break-word" }}>



              </div>

              <div className="">

                <a style={{ color: "red" }} href={teamObj.gitHubLink} target="_blank">Github link</a>
              </div>
            </MDBModalBody>

            {/* ///////////////////////////////////////////      video           ////////////////////////////////////////////////////////// */}
            <MDBRow>
              <MDBCol>
                <div>
                  {/* {console.log(teamObj.idea.demo)} */}
                  <video width="100%" height="100%" controls>
                    <source src={teamObj.idea.demo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </MDBCol>
              &nbsp;
              <MDBCol>
                <div style={{ padding: "10px", }}>
                  <MDBRange defaultValue={ui} onChange={(e) => { setUi(e.target.value); }} min="0" max="10" step="1" id="customRange3" label={`User Interface - ${ui}`} />
                  <MDBRange
                    defaultValue={ppt} onChange={(e) => { setPpt(e.target.value); }} min="0" max="10" step="1" id="customRange3" label={`Presentation - ${ppt}`}
                  />
                  <MDBRange defaultValue={workflow} onChange={(e) => { setWorkflow(e.target.value); }} min="0" max="10" step="1" id="customRange3" label={`Workflow - ${workflow}`} />
                  Total - {total}
                </div>
                <MDBModalFooter>
              <MDBBtn color="success" value={total} onClick={(e) => handleSubmit(e)}>Save</MDBBtn>
            </MDBModalFooter>
              </MDBCol>
            </MDBRow>
            <MDBModalFooter>
              {/* <MDBBtn color="success" value={total} onClick={(e) => handleSubmit(e)}>Save</MDBBtn> */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
