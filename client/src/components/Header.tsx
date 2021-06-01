import React, { useState } from "react";
import Link from "next/link";

const Header = (): JSX.Element => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="montserrat py-1">
      <div className="header m-container">
        <div className="navbar header-wrap">
          <nav className="logo-section  navbar-brand">
            <section className="logo d-flex align-items-center">
              <img
                src="./images/49051494_280563455939145_4865479892260618240_n 1.svg"
                alt="logo section "
                className="mr-md-2"
              />
              <h4>
                Joint Heirs Assembly <br /> International
              </h4>
            </section>
            <section className="menu" onClick={() => setMenu(!menu)}>
              <div className=" bars"></div>
              <div className=" bars"></div>
              <div className=" bars"></div>
            </section>
          </nav>
          <ul className="nav links items justify-content-between">
            <li className="nav-item">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/sermons">
                <a>SERMON</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/branches">
                <a>BRANCHES</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>

            <li className="nav-item join">
              <Link href="/join">
                <a>JOIN US</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {menu && (
        <div className="m-container">
          <ul className="list-group min-item">
            <li className="nav-item list-group-item">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>

            <li className="nav-item list-group-item">
              <Link href="/sermons">
                <a>SERMON</a>
              </Link>
            </li>

            <li className="nav-item list-group-item">
              <Link href="/branches">
                <a>BRANCHES</a>
              </Link>
            </li>

            <li className="nav-item list-group-item">
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>

            <li className="nav-item list-group-item">
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>

            <li className="nav-item join list-group-item">
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
