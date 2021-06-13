import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getURL } from "next/dist/next-server/lib/utils";

const Footer = (): JSX.Element => {
  const [header, setHeader] = useState({
    home: false,
    sermon: false,
    branches: false,
    about: false,
    contact: false,
    join: false,
  });
  useEffect(() => {
    const url = getURL();
    if (url === "/") {
      setHeader({
        ...header,
        home: true,
        sermon: false,
        branches: false,
        about: false,
        contact: false,
        join: false,
      });
    }
    if (url.includes("/sermons")) {
      setHeader({
        ...header,
        home: false,
        sermon: true,
        branches: false,
        about: false,
        contact: false,
        join: false,
      });
    }
    if (url.includes("/branches")) {
      setHeader({
        ...header,
        home: false,
        sermon: false,
        branches: true,
        about: false,
        contact: false,
        join: false,
      });
    }
    if (url.includes("/about")) {
      setHeader({
        ...header,
        home: false,
        sermon: false,
        branches: false,
        about: true,
        contact: false,
        join: false,
      });
    }
    if (url.includes("/contact")) {
      setHeader({
        ...header,
        home: false,
        sermon: false,
        branches: false,
        about: false,
        contact: true,
        join: false,
      });
    }
    if (url.includes("/join")) {
      setHeader({
        ...header,
        home: false,
        sermon: false,
        branches: false,
        about: false,
        contact: false,
        join: true,
      });
    }
  }, []);
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
          <ul>
            <li>
              <Link href="/">
                <a className={header.home ? "text-warning" : "text-light"}>
                  HOME
                </a>
              </Link>
            </li>

            <li>
              <Link href="/sermons">
                <a className={header.sermon ? "text-warning" : "text-light"}>
                  SERMON
                </a>
              </Link>
            </li>

            <li>
              <Link href="/branches">
                <a className={header.branches ? "text-warning" : "text-light"}>
                  BRANCHES
                </a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a className={header.about ? "text-warning" : "text-light"}>
                  ABOUT
                </a>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <a className={header.contact ? "text-warning" : "text-light"}>
                  CONTACT
                </a>
              </Link>
            </li>

            <li>
              <Link href="/join">
                <a className={header.join ? "text-warning" : "text-light"}>
                  JOIN US
                </a>
              </Link>
            </li>
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
