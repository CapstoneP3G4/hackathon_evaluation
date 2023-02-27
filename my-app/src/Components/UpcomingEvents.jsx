import React, { useRef,useState,useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Slider from "react-slick";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import axios from "axios";



const Card = ({description,endDate,eventId,eventName,startDate,}) => {

  return (
    <div class="" style={{overflow: "hidden", margin: "-20px 10px" }}>
      <div class="team-item" style ={{border: "0px solid black" , 
//       // background: "rgb(238,174,202)",
// background: "linear-gradient(225deg, rgba(238,174,202,1) 0%, rgba(159,203,255,1) 100%)" , 
height:"50vh"
}}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </div>

        <h3>{eventName}</h3>

        <div class="">
          <p>{description}</p>
        </div>
        <div class="tagline">
          <p>Start Date: {startDate}</p>
        </div>
        <div class="tagline">
          <p>End Date: {endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const slider = useRef(null);
  
  const settings = {
    centerMode: true,
    draggable: true,
    centerPadding: "20px",
    pauseOnHover: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    // fade: true,
  };
  const [event, setEvent] = useState([]);
  useEffect(() => {
    axios.get("/getEvent").then(
      (response) => {
        console.log(response.data);
        setEvent(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  
  
  return (
    <>
    <div className="bg-color">
      <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-5 text-center">Upcoming events</h3>
    <Slider {...settings} ref={slider}>
      {event.map((card, i) => (
        <Card {...card}   />
      ))}
    </Slider>
    </div>
    
    </>
  );
}
