// import React from "react";
import { MDBFile, MDBInput,MDBBtn} from "mdb-react-ui-kit";
// import { useState } from "react";

// export default function FileUpload({userData}) {
//   const [data,setData] = useState({
//     gitHubLink:'',
//   });
  
//   const handleInput = (e) => {
//     const { id, value } = e.target;
//     setData({ ...data, [id]: value });
//   }
  
//   const handleSubmit= () => {
//       console.log(data);
//       console.log(userData);
//   };
//   return (
//     <div className="ml-5 pb-2">
//       <MDBFile label="Upload the presentation file" id="customFile" />
//       <MDBInput label="Github repository link" id="gitHubLink" value={data.gitHubLink} onChange={(e) => handleInput(e)} type="url" />
//       <MDBBtn onClick={handleSubmit}>Submit</MDBBtn>

//     </div>
//   );
// }
import React, { useState } from 'react';

function FileUpload() {

      
  const [selectedFile, setSelectedFile] = useState(null);

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log(selectedFile);
    // submit the form data to the server
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="file" onChange={handleFileInput} /> */}
      <MDBFile label="Upload the presentation file"  onChange={handleFileInput} />
      <br />
      {/* <button  className="btn btn-secondary" type="submit">Upload</button> */}
      <MDBBtn type="submit">Upload</MDBBtn>
    </form>
  );
}

export default FileUpload;


