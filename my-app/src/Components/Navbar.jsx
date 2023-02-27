import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import {MDBBtn } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button'; 
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

   const handleclick = (e) => {
    e.preventDefault();
    window.login = false;
    window.status = 'Login';
    navigate("/logIn");
   }

  return (
    <div style={{marginBottom:"5px",paddingLeft:"50px", backgroundColor:"#d4e4ff"}} className="flex justify-between items-center h-24  mx-auto px-12 text-black-300">
      <div><Link to="/">
        {/* <h1 className="w-full text-3xl font-bold text-[#ee4714]"> */}
          <img src="https://www.incedoinc.com/wp-content/uploads/incedo-logo.png" width="101px"/>
              {/* </h1> */}
              </Link></div>
      <div><Link to="/ChangePassword"><Button variant="outlined" color='error'>Update Password</Button></Link>
      &nbsp;&nbsp;&nbsp;
      <Button onClick={handleclick} variant="contained" color='error'>{window.status}</Button>
      {/* <Button variant="outlined" color="error"> Login </Button>  */}
      </div>
    </div>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import {MDBBtn } from 'mdb-react-ui-kit';
// import Button from '@mui/material/Button'; 
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const navigate = useNavigate();

//   const handleclick = (e) => {
//     if (window.login) {
//       window.login = false;
//       window.status = 'Login';
//       navigate("/logIn");
//     } else {
//       window.login = true;
//       window.status = 'Logout';
//       navigate("/");
//     }
//   }

//   return (
//     <div style={{marginBottom:"-70px",paddingLeft:"50px"}} className="flex justify-between items-center h-24  mx-auto px-12 text-black-300">
//       <h1 className="w-full text-3xl font-bold text-[#ee4714]">Incedo</h1>
//       <Button onClick={handleclick} variant="contained" color='error'>{window.login ? 'Logout' : 'Login'}</Button>
//     </div>
//   );
// };

// export default Navbar;





// import React from "react";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { Link, useHistory } from "react-router-dom";
// import { Button } from '@mui/material'; 

// const Navbar = () => {
//   const history = useHistory();

//   const handleLogout = () => {
//     // Clear the login state using Redux or Context API
//     history.push('/logIn');
//   }

//   return (
//     <div style={{marginBottom:"-70px",paddingLeft:"50px"}} className="flex justify-between items-center h-24  mx-auto px-12 text-black-300">
//       <h1 className="w-full text-3xl font-bold text-[#ee4714]">Incedo</h1>
//       {localStorage.getItem('login') ? (
//         <Button onClick={handleLogout} variant="contained" color='error'>Logout</Button>
//       ) : (
//         <Link to="/logIn">
//           <Button variant="contained" color="error"> Login </Button>
//         </Link>
//       )}
//     </div>
//   );
// };

// export default Navbar;


