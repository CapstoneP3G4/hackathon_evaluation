import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";



const Card = ({ description, endDate, eventId, eventName, startDate, }) => {

  return (
    <div className="text-break" style={{ overflow: "hidden", margin: "-15px 10px" }}>
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

        <div style={{ marginTop: "-2vh" }}>
          <h3>{eventName.substring(0, 25)}</h3>

          <p>{description.substring(0, 100)}...</p>
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

  // const settings = { centerMode: true, draggable: true, centerPadding: "20px", pauseOnHover: true, infinite: true, swipeToSlide: true, slidesToShow: (event?.length < 3) ? event?.length : 3, slidesToScroll: 1, autoplay: true, speed: 1000, autoplaySpeed: 2000, focusOnSelect: true, };

  const [settings, setSettings] = useState({
    centerMode: true,
    draggable: true,
    centerPadding: "20px",
    pauseOnHover: true,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: (event?.length < 3) ? event?.length : 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    focusOnSelect: true,
  });

  ///////////////////////////////

  useEffect(() => {
    if (window.innerWidth > 768) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: (event?.length < 3) ? event?.length : 3,
      }));
    }
    else if (window.innerWidth < 600) {
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
    }


    // window.addEventListener("resize", handleResize);
    axios.get("/getEvent").then(
      (response) => {
        setEvent(response.data);
        // console.log(event);
      },
      (error) => {
        console.log(error);
      }
    );

  }, [event]);

  /////////////////////////////////////////////
  
  // const [windowWidth, setWindowWidth] = useState(800);

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //     console.log(windowWidth);
  //   };

  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // });
  // ////////////////////////////////////////////
  // useEffect(() => {
  //   if (windowWidth > 768) {
  //     setSettings((prevSettings) => ({
  //       ...prevSettings,
  //       slidesToShow: (event?.length < 3) ? event?.length : 3,
  //     }));
  //   }
  //   else if (windowWidth < 768) {
  //     setSettings((prevSettings) => ({
  //       ...prevSettings,
  //       slidesToShow: (event?.length < 2) ? event?.length : 2,
  //     }));
  //   }
  //   else if (windowWidth < 600) {
  //     setSettings((prevSettings) => ({
  //       ...prevSettings,
  //       slidesToShow: 1,
  //     }));
  //   }

  // }, [windowWidth])

  //////////////////////////


  return (
    <>
      {event?.length > 0 && (
        <div id="eventList" className="bg-color" style={{ marginTop: '70px' }}>
          <h2 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-5 text-center" >Hack-a-thon Events</h2>
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
