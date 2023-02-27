import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,MDBModalFooter,
} from "mdb-react-ui-kit";
import Timer from "../JugdeComponents/Timer";
import Clock from "../JugdeComponents/Clock";

export default function PanelistModal({ item }) {
  const [basicModal, setBasicModal] = useState(false);
  const { teamName, description, statement, teamObj } = item;


  const toggleShow = (e) => {
    setBasicModal(!basicModal)
  };


  /////////////////////////////////////////comment boxx///////////////////////////////////////////////////////

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');


  const handleButtonClick = () => {
    setShowCommentBox(true);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const refreshPage=()=>{
    window.location.reload(false);
  }

  const handleCommentSubmit = () => {
    teamObj.newComment = commentText;
    teamObj.status = "reverted";
    // console.log(teamObj);

    setBasicModal(!basicModal);
    
    axios.post("/statusChange", teamObj)
      .then((response) => {
        // alert(teamObj.status);
        Swal.fire(`Participant ${teamObj.status}`);
        
      }, (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error has occured',
        });
      });
    setCommentText('');
    setShowCommentBox(false);
    // refreshPage();
  };

  
  
  //////////////////////////////////////////////////////////////



  const handleSubmit = (e) => {
    teamObj.status = e.target.value;
    // console.log(teamObj);

    setBasicModal(!basicModal);
    // setObj(teamObj)
    axios.post("/statusChange", teamObj)
      .then((response) => {
        Swal.fire(`Participant ${teamObj.status}`);
        // alert(teamObj.status);
      }, (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error has occured',
        });
      });
  };

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
        <MDBModalDialog centered>
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
              <Timer />
              <Clock />
              <div className="">
                <h4>Problem Statement</h4>
                <p>{statement}</p>
              </div>
              <div className="">
                <h4>Problem Description</h4>
                <p>{description}</p>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="success" value={"accepted"} onClick={(e) => handleSubmit(e)}>
                Accept
              </MDBBtn>
              <MDBBtn color="danger" value={"rejected"} onClick={(e) => handleSubmit(e)}>
                Reject
              </MDBBtn>
              <MDBBtn color="warning" value={"reverted"}onClick={(e)=>handleButtonClick(e)}>
                Revert
              </MDBBtn>
              {showCommentBox && (
                <div>
                  <textarea value={commentText} onChange={handleCommentChange} placeholder={"write Suggestions"} rows="5"    cols="40" style={{border:"1px solid black" , margin:"5px", marginTop:"10px"}} />
                  {/* <button onClick={handleCommentSubmit}>Submit</button> */}
                  <MDBBtn color="info" onClick={handleCommentSubmit} style={{marginBottom:"12px"}}>Submit</MDBBtn>
                </div>
              )}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
