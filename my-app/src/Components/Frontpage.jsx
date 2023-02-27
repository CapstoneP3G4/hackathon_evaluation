import React from "react";
import Hero from "./Hero";
// import UpcomingEvent from "./UpcomingEvent";
import Footer from "./Footer";
import Cards from "./Cards";
import Navbar from "./Navbar";
import Header_ from "./Header_";
import OurTeam from "./OurTeam";
import "./OurTeam.css";
import UpcomingEvents from "./UpcomingEvents";

function Frontpage() {
  const styles = {
    // background: "linear-gradient(135deg, #ffb4b4 0%, #b987ff 100%)",
    // background: 'linear-gradient(to right, #ffcc00, #ff6666)',
    background: "white",
  };
  return (
    <div style={styles}>
      <Navbar />
      <Hero />
      <UpcomingEvents />
      {/* <UpcomingEvent /> */}
      <Cards />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default Frontpage;
