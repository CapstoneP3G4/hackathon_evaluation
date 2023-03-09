import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import axios from "axios";
import { useNavigate, NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleNav = () => {
    setNav(!nav);
  };

  const navigate = useNavigate();

  const handleclick = (e) => {
    e.preventDefault();
    window.login = false;
    window.status = 'Login';
    navigate("/logIn");
  };

  var elementName='';

  const handleClickScrollEvents = () => {
    const elementEvents = document.getElementById('eventList');
    if (elementEvents) {
      // 👇 Will scroll smoothly to the top of the next section
      elementEvents.scrollIntoView({ behavior: 'smooth' });
    }

  };

  const handleClickScrollTopScorers = () => {
    const elementEvents = document.getElementById('topScorers');
    if (elementEvents) {
      // 👇 Will scroll smoothly to the top of the next section
      elementEvents.scrollIntoView({ behavior: 'smooth' });
    }

  };

  const handleClickScrollAboutUs = () => {
    const elementEvents = document.getElementById('aboutUs');
    if (elementEvents) {
      // 👇 Will scroll smoothly to the top of the next section
      elementEvents.scrollIntoView({ behavior: 'smooth' });
    }

  };
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    axios.get('/winners')
      .then(response => {
        setWinners(response.data);
        // console.log(response.data[0]);

      }, (error) => {
        console.log(error);
      });
  }, []);

  return (
    // <div style={{marginBottom:"5px",paddingLeft:"50px", backgroundColor:"#d4e4ff"}} className="flex justify-between items-center h-24  mx-auto px-12 text-black-300">
    // <div><Link to="/">
    //     <img src="https://www.incedoinc.com/wp-content/uploads/incedo-logo.png" width="101px"/>
    //         </Link></div>
    //   <div><Link to="/ChangePassword"><Button variant="outlined" color='error'>Update Password</Button></Link>
    //   &nbsp;&nbsp;&nbsp;
    //   <Button onClick={handleclick} variant="contained" color='error'>{window.status}</Button>
    //   </div>
    // </div>


    <nav className="navbar" style={{zIndex: '1'}}>
      <div className="container1">
        <div className="logo">
          <div ><Link to="/">
            <img src="https://www.incedoinc.com/wp-content/uploads/incedo-logo.png" width="101px" />
          </Link></div>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src="https://cdn0.iconfinder.com/data/icons/basic-ui-vol-1/32/UI_stroke-05-512.png" width="50px" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink onClick={handleClickScrollEvents}>Events</NavLink>
            </li>
            {winners[0]?.marks > 0 && (
            <li>
              <NavLink onClick={handleClickScrollTopScorers}>Top Scorers</NavLink>
            </li>
            )}
            <li>
              <NavLink onClick={handleClickScrollAboutUs}>About Us</NavLink>
            </li>
            <li>
              <Button onClick={handleclick} variant="contained" color='error'>{window.status}</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
