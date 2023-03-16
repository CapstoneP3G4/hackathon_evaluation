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
  MDBModalBody, MDBModalFooter,
} from "mdb-react-ui-kit";

export default function PanelistModal({ item, refetch }) {
  const [basicModal, setBasicModal] = useState(false);
  const { teamName, description, statement, teamObj } = item;


  const toggleShow = (e) => {
    setBasicModal(!basicModal)
  };


  const [data, setData] = useState(JSON.parse(localStorage.getItem("data")));
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
    // console.log(data);
  }, [localStorage.getItem("data")])


  /////////////////////////////////////////comment boxx///////////////////////////////////////////////////////

  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState('');


  const handleButtonClick = () => {
    setShowCommentBox(true);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleCommentSubmit = () => {
    if (!commentText) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Comment cannot be empty',
      });
    }
    else {
      teamObj.newComment = commentText;
      teamObj.status = "reverted";
      teamObj.panelistId = data.id;
      // console.log(teamObj);

      setBasicModal(!basicModal);

      axios.post("/statusChange", teamObj)
        .then((response) => {
          Swal.fire(`Idea ${teamObj.status}`);
          refetch()
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
    }
  };


  // const handleCommentSubmit = async () => {
  //   if (!commentText) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Oops...',
  //       text: 'Comment cannot be empty',
  //     });
  //   }
  //   else {
  //     teamObj.newComment = commentText;
  //     teamObj.status = "reverted";
  //     teamObj.panelistId = data.id;
  //     // console.log(teamObj);

  //     setBasicModal(!basicModal);
  //     try {
  //       axios.post("/statusChange", teamObj)
  //       await Swal.fire(`Participant ${teamObj.status}`);
  //       await refetch()
  //     } catch (err) {
  //       console.log(err);
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Oops...',
  //         text: 'An error has occured',
  //       });
  //     }
  //     setCommentText('');
  //     setShowCommentBox(false);
     
  //   }
  // };


  //////////////////////////////////////////////////////////////



  const handleSubmit = (e) => {
    teamObj.status = e.target.value;
    teamObj.panelistId = data.id;

    setBasicModal(!basicModal);
    axios.post("/statusChange", teamObj)
      .then((response) => {
        Swal.fire(`Idea ${teamObj.status}`);
        refetch()
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
      <div className="" style={{ display: "flex", justifyContent: "flex-end",}}>
        <MDBBtn onClick={toggleShow} className="text-center">Review</MDBBtn>
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
              {/* <Timer />
              <Clock /> */}
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
              <MDBBtn color="warning" value={"reverted"} onClick={(e) => handleButtonClick(e)}>
                Revert
              </MDBBtn>
              {showCommentBox && (
                <div>
                  <textarea value={commentText} onChange={handleCommentChange} placeholder={"Write Suggestions"} rows="5" cols="40" style={{ border: "1px solid black", margin: "5px", marginTop: "10px" }} />
                  <MDBBtn color="info" onClick={handleCommentSubmit} style={{ marginBottom: "12px" }}>Submit</MDBBtn>
                </div>
              )}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
