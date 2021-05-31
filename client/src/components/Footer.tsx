import React from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="poppins">
      <div className="subscribe py-5">
        <div className="m-container">
          <form className="d-lg-flex">
            <div className="txt">
              <h1 className="text-muted font-weight-bolder mb-1">Subscribe</h1>
              <h3>To Our News Letter</h3>
            </div>
            <div className="input px-1">
              <input
                type="email"
                className=" px-1 py-3 "
                placeholder="Your Email"
              />
              <button className="btn btn-warning rounded-0 rounded-right text-light ml-lg-1 px-5 py-3">
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="main-footer">
        <div className="container  py-2">
          <div className="footer-logo mb-2 montserrat py-2 text-light align-items-center d-flex justify-content-center">
            <img
              src="./images/49051494_280563455939145_4865479892260618240_n 1.svg"
              alt="logo section "
              className="mr-md-2"
            />
            <h4>
              Joint Heirs Assembly <br /> International
            </h4>
          </div>
          <ul className="py-2">
            <li>HOME</li>
            <li> SERMON</li>
            <li>BRANCHES</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li className="join text-warning">JOIN</li>
          </ul>

          <div className="footer-icons mb-2 py-4">
            <h3 className="w-25 mx-auto text-light d-flex justify-content-around">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter "></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
            </h3>
          </div>
          <hr className="border" />
          <div className="text-center text-light">
            <b> JointHeirs</b> 2021. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
