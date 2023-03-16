import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";


///////////////////////card of upcoming event////////////////////////
const Card = ({ description, endDate, eventId, eventName, startDate, }) => {

  return (
    <div className="text-break" style={{ overflow: "hidden", margin: "-15px 10px" }}>
      <div className="team-item" style={{
        border: "0px solid black", borderRadius: "30px",
        background: "linear-gradient(345deg, rgba(255,255,255,1) 0%, rgba(96,180,255,1) 100%)",
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

        <div style={{ marginTop: "-2vh" }}>
          <h3>{eventName.substring(0, 25)}</h3>

          <p>{description.substring(0, 100)}...</p>
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

  ///////////////////////display according to screen size////////////////////////////
  useEffect(() => {
    if (window.innerWidth < 600) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: 1,
      }));
    }
    else if (window.innerWidth < 768) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: (event?.length < 2) ? event?.length : 2,
      }));
    } else {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: (event?.length < 3) ? event?.length : 3,
      }));
    }
      axios.get("/getEvent").then(
        (response) => {
          setEvent(response.data);
        },
        (error) => {
          console.log(error);
        }
      );

    }, [event]);

  const [settings, setSettings] = useState({
    centerMode: true,
    draggable: true,
    centerPadding: "20px",
    pauseOnHover: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: (event?.length >= 3) ? 3 : event?.length,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    focusOnSelect: true,
  });
  

  return (
    <>
      {event?.length > 0 && (
        <div id="eventList" className="bg-color" style={{ marginTop: '70px' }}>
          <h2 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-5 text-center" style={{paddingTop:"90px"}}>Hack-a-thon Events</h2>
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
