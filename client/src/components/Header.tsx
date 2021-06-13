import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getURL } from "next/dist/next-server/lib/utils";

const Header = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
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
    <header className="montserrat py-1">
      <div className="header m-container">
        <div className="navbar header-wrap">
          <nav className="logo-section  navbar-brand">
            <Link href="/">
              <section className="logo d-flex align-items-center">
                <img
                  src="./images/49051494_280563455939145_4865479892260618240_n 1.svg"
                  alt="logo section "
                  className="mr-md-2"
                />
                <h4 translate="no">
                  Joint Heirs Assembly <br /> International
                </h4>
              </section>
            </Link>
            <section className="menu" onClick={() => setMenu(!menu)}>
              <div className=" bars"></div>
              <div className=" bars"></div>
              <div className=" bars"></div>
            </section>
          </nav>
          <ul className="nav links items justify-content-between">
            <li className="nav-item">
              <Link href="/">
                <a className={header.home ? "active" : ""}>HOME</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/sermons">
                <a className={header.sermon ? "active" : ""}>SERMON</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/branches">
                <a className={header.branches ? "active" : ""}>BRANCHES</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about">
                <a className={header.about ? "active" : ""}>ABOUT</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact">
                <a className={header.contact ? "active" : ""}>CONTACT</a>
              </Link>
            </li>

            <li className="nav-item join">
              <Link href="/join">
                <a className={header.join ? "active" : ""}>JOIN US</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {menu && (
        <div className="m-container">
          <ul className="list-group min-item">
            <li className="nav-item list-group-item animate__animated animate__lightSpeedInLeft">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>

            <li className="nav-item list-group-item animate__animated animate__lightSpeedInRight">
              <Link href="/sermons">
                <a>SERMON</a>
              </Link>
            </li>

            <li className="nav-item list-group-item animate__animated animate__lightSpeedInLeft">
              <Link href="/branches">
                <a>BRANCHES</a>
              </Link>
            </li>

            <li className="nav-item list-group-item animate__animated animate__lightSpeedInRight">
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>

            <li className="nav-item list-group-item animate__animated animate__lightSpeedInLeft">
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>

            <li className="nav-item join list-group-item animate__animated animate__lightSpeedInRight">
              <Link href="/join">
                <a>JOIN US</a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
