import React, { useRef } from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Slider from "react-slick";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import p1 from "./images/1.jpeg";
import p2 from "./images/2.jpeg";
import p3 from "./images/3.png";
import p4 from "./images/4.png";
import p5 from "./images/5.jpeg";
import p6 from "./images/6.jpeg";
import p7 from "./images/7.jpeg";
import p8 from "./images/8.jpeg";

const Card = ({
  name,
  description,
  image,
  atwitter,
  alinkedin,
  agithub,
  designation,
}) => {
  return (
    <div class="" style={{ overflow: "hidden", margin: "0 10px" }}>
      <div class="team-item">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={image} class="team-img" alt="pic" />
        </div>

        <h3>{name}</h3>

        <div class="team-info">
          <p>{designation}</p>
        </div>
        <div class="tagline">
          <p>{description}</p>
        </div>

        <div class="team-icon">
          <div>
            <a href={atwitter} class="twitter">
              <FaTwitter />
            </a>
          </div>
          <div>
            <a href={agithub} class="github">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href={alinkedin} class="linkedin">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const slider = useRef(null);

  const settings = {
    centerMode: true,
    // draggable: true,
    centerPadding: "20px",
    pauseOnHover: true,
    infinite: true,
    // swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,

    focusOnSelect: true,
    // fade: true,
  };

  const data = [
    {
      name: "Mahak Jain",
      image: p1,
      designation: "Quality Assurance Engineer",
      alinkedin: "https://www.linkedin.com/in/mahak-jain-7a4488120/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description:
        "Responsible for the testing and automation of the application",
    },
    {
      name: "Manjot Singh",
      image: p2,
      designation: "Quality Assurance Engineer",
      alinkedin: "https://www.linkedin.com/in/manjot-singh-5297171b4/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description:
        "Responsible for the testing and automation of the application",
    },
    {
      name: "Mritunjay Verma",
      image: p3,
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description: "Responsible for the backend development of the application",
    },
    {
      name: "Nikunj Gupta",
      image: p4,
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description: "Responsible for the backend development of the application",
    },
    {
      name: "Nimish Chourasia",
      image: p5,
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description: "Responsible for the backend development of the application",
    },
    {
      name: "Prashant sahu",
      image: p6,
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description:
        "Responsible for the frontend development of the application",
    },
    {
      name: "Vaibhav Agarwal",
      image: p7,
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/va29/",
      atwitter: "https://twitter.com/va2905",
      agithub: "https://github.com/va-incedo",
      description: "Responsible for the backend development of the application",
    },
    {
      name: "Yashi Gupta",
      image: p8,
      designation: "Software Developer Engineer",
      alinkedin: "https://www.linkedin.com/in/yashi-gupta-6b2bb3228/",
      atwitter: "https://twitter.com/",
      agithub: "https://github.com/",
      description: "Responsible for the backend development of the application",
    },
  ];
  return (
    <Slider {...settings} ref={slider}>
      {data.map((card, i) => (
        <Card {...card} />
      ))}
    </Slider>
  );
}
