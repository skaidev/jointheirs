import React from "react";

const Header = (): JSX.Element => {
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
            <section className="menu">
              <div className=" bars"></div>
              <div className=" bars"></div>
              <div className=" bars"></div>
            </section>
          </nav>

          <ul className="nav links items justify-content-between">
            <li className="nav-item">HOME</li>
            <li className="nav-item"> SERMON</li>
            <li className="nav-item">BRANCHES</li>
            <li className="nav-item">ABOUT</li>
            <li className="nav-item">CONTACT</li>
            <li className="nav-item join">JOIN US</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
