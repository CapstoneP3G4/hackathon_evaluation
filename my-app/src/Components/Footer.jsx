import React from "react";
import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const styles = {
//     background: "rgb(255,57,57)",
// background: "linear-gradient(283deg, rgba(255,57,57,0.8746804630055147) 20%, rgba(255,132,0,1) 100%)",
    background: "rgb(255,170,79)",
background: "linear-gradient(283deg, rgba(255,170,79,1) 0%, rgba(185,201,255,1) 100%)",
    // background: 'linear-gradient(to right, #ffcc00, #ff6666)',
  };
  return (
    <div style={styles}>
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#ee4714]">Hackcedo</h1>
        <p className="py-4">
          SAMPLE TEXT
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <div>
            <a href={"https://www.facebook.com/IncedoInc"}>
              <FaFacebookF size={30} />
            </a>
          </div>
          <div>
            <a href={"https://twitter.com/IncedoInc"}>
              <FaTwitter size={30} />
            </a>
          </div>
          <div>
            <a href={"https://www.linkedin.com/company/incedo-inc/"}>
              <FaLinkedinIn size={30} />
            </a>
          </div>
          <div>
            <a
              href={"https://www.youtube.com/channel/UC6LjAUc6LyvLSwrEOMJaH_Q"}
            >
              <FaYoutube size={30} />
            </a>
          </div>
          <div>
            <a href={""}>
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div> */}
      <div /*class="elementor-column elementor-col-50 elementor-inner-column elementor-element"*/ style={{
        display:"flex",
        justifyContent:"right",
      }}>
        {" "}
        © Copyright 2023 Incedo Inc.
      </div>
    </div>
    </div>
  );
};

export default Footer;
