import React, { useState ,useEffect} from "react";
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBRange } from "mdb-react-ui-kit";
import Marking from "./Marking";
import VideoPlayer from "./VideoPlayer";
import axios from "axios";
import Timer from "./Timer";
import Swal from "sweetalert2";


export default function JudgeModal({ item }) {
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

  const refreshPage=()=>{
    window.location.reload(false);
  }

  const toggleShow = () => setBasicModal(!basicModal);
  
console.log(teamObj);

  const handleSubmit = (e) => {
    teamObj.marks = parseInt(e.target.value);
    teamObj.judgeList = item.teamObj.judgeList +judgeData?.id+",";
    // console.log(teamObj);
    setBasicModal(!basicModal);
    
    axios.post("/marksChange", teamObj)
    .then((response) => {
      // alert("marks added successfully");
      Swal.fire("Great", "Response Added Successfully!");

    }, (error) => {
      console.log(error);
      Swal.fire({icon: "error", title: "Oops...", text: "Something went wrong!"});
    });
    // refreshPage();
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
              <Timer></Timer>
              <div className="">
                <h4>Problem Statement</h4>
                <p>{statement}</p>
              </div>
              <div className="">
                <h4>Problem Description</h4>
                <p>{description}</p>
              </div>

              <div className="">
              <a href={teamObj.gitHubLink} target="_blank">Github link is not given : Github Link </a>
              </div>
            </MDBModalBody>


            {/* <div className="Video" style={{display: "flex", justifyContent: "center"}}>
              <VideoPlayer />
            </div>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column",}}>

              <a href="https://1drv.ms/v/s!An5fe6AqNBBhh0f53t7U5g2KZi_j?e=Jm4Svr" target="_blank">
                <button>Go to Video</button>
              </a>
            </div>  */}
            {
              /* <Ppt /> */
              // <Present />
            }
            <>
              {/* <Marking />  /////////////////////marking////////////////////////*/}
              <div
                style={{
                  padding: "10px",
                }}
              >
                <MDBRange defaultValue={ui} onChange={(e) => { setUi(e.target.value); }}min="0" max="10"
                  step="1"
                  id="customRange3"
                  label={`User Interface - ${ui}`}
                />
                <MDBRange
                  defaultValue={ppt}
                  onChange={(e) => {
                    setPpt(e.target.value);
                  }}
                  min="0"
                  max="10"
                  step="1"
                  id="customRange3"
                  label={`Presentation - ${ppt}`}
                />
                <MDBRange
                  defaultValue={workflow}
                  onChange={(e) => {
                    setWorkflow(e.target.value);
                  }}
                  min="0"
                  max="10"
                  step="1"
                  id="customRange3"
                  label={`Workflow - ${workflow}`}
                />
                Total - {total}
              </div>

              {/* /////////////////////////////////////////////////////////////////////////// */}


            </>
            <MDBModalFooter>
              <MDBBtn color="success" value={total} onClick={(e) => handleSubmit(e)}>Save</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
