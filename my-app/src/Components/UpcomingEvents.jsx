import React, { useRef, useState, useEffect } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Slider from "react-slick";
import axios from "axios";



const Card = ({ description, endDate, eventId, eventName, startDate, }) => {

  return (
    <div className="" style={{ overflow: "hidden", margin: "-15px 10px" }}>
      <div className="team-item" style={{
        border: "0px solid black", borderRadius: "30px",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(96, 180, 255, 0.8522714994200805) 100%)",
        height: "50vh"
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

        <div className="">
          <p>{description}</p>
        </div>
        <div className="tagline">
          <p>{ }</p>
        </div>
        <div className="tagline">
          <p>Start Date: {startDate}</p>
        </div>
        <div className="tagline">
          <p>End Date: {endDate}</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const slider = useRef(null);

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

  const settings = { centerMode: true, draggable: true, centerPadding: "20px", pauseOnHover: true, infinite: true, swipeToSlide: true, slidesToShow: (event?.length < 3) ? event?.length : 3, slidesToScroll: 1, autoplay: true, speed: 1000, autoplaySpeed: 2000, focusOnSelect: true, };

  return (
    <>
      {event?.length > 0 && (
        <div id="eventList" className="bg-color">
          <h2 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-5 text-center" style={{ marginTop: '70px' }}>Hack-a-thon Events</h2>
          <Slider {...settings} ref={slider}>
            {event.map((card, i) => (
              <Card {...card} />
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
