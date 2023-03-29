import React, { useState, useEffect } from "react";
import { MDBBtn, MDBModal, MDBCol, MDBRow, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBRange } from "mdb-react-ui-kit";
import Marking from "./Marking";
import VideoPlayer from "./VideoPlayer";
import axios from "axios";
import Swal from "sweetalert2";
import ReactPlayer from "react-player";



export default function JudgeModal({ item, refetch }) {
  const { teamName, description, statement, teamObj } = item;
  const [basicModal, setBasicModal] = useState(false);
  const [ui, setUi] = useState(0);
  const [ppt, setPpt] = useState(0);
  const [workflow, setWorkflow] = useState(0);
  const [total, setTotal] = useState(0);


  const [judgeData, setJudgeData] = useState(JSON.parse(localStorage.getItem("data")))



  useEffect(() => {

    setJudgeData(JSON.parse(localStorage.getItem("data")));
  }, [localStorage.getItem("data")])

  const refreshPage = () => {
    window.location.reload(false);
  }

  const toggleShow = () => setBasicModal(!basicModal);


  const handleSubmit = (e) => {
    e.preventDefault();
    teamObj.marks = parseInt(e.target.value);
    teamObj.judgeList = item.teamObj.judgeList + judgeData?.id + ",";

    setTotal(0);
    setWorkflow(0);
    setPpt(0);
    setUi(0);
    setBasicModal(!basicModal);



    axios.post("/marksChange", teamObj)
      .then((response) => {

        Swal.fire("Great", "Response Added Successfully!");
        refetch()
        // setTotal(0)
        // setUi(0)
        // setWorkflow(0);
        // setPpt(0);
      }, (error) => {
        console.log(error);
        Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!" });
      });
  }


  useEffect(() => {
    let data = parseInt(ui) + parseInt(ppt) + parseInt(workflow);
    setTotal(data);

  }, [ui, ppt, workflow]);

  return (
    <>

      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "flex-end",

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
                  <video width="100%" height="50%" controls>
                    <source src={teamObj.idea.demo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </MDBCol>
              &nbsp;
              <MDBCol>
                <div style={{ padding: "10px", }}>
                  <MDBRange defaultValue={0} onChange={(e) => { setUi(e.target.value); }} min="0" max="10" step="1" id="customRange1" label={`User Interface - ${ui}`} />
                  <MDBRange defaultValue={0} onChange={(e) => { setPpt(e.target.value); }} min="0" max="10" step="1" id="customRange2" label={`Quality of code - ${ppt}`}/>
                  <MDBRange defaultValue={0} onChange={(e) => { setWorkflow(e.target.value); }} min="0" max="10" step="1" id="customRange3" label={`Workflow - ${workflow}`} />
                  Total - {total}
                </div>
                <MDBModalFooter>
                  <MDBBtn color="success" value={total} onClick={(e) => handleSubmit(e)}>Save</MDBBtn>
                </MDBModalFooter>
              </MDBCol>
            </MDBRow>
            <MDBModalFooter>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
