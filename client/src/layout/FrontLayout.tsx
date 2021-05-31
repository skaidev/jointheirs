import React, { Fragment, ReactChild } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BackToTop from "react-back-to-top-button";

const FrontLayout = ({ children }: { children: ReactChild }): JSX.Element => {
  return (
    <Fragment>
      <title>JHAI</title>
      <Header />
      <div className="children">{children}</div>
      <BackToTop
        showOnScrollUp
        showAt={30}
        speed={1500}
        easing="easeInOutQuint"
      >
        <div className="scroll-to-top position-fixed text-light px-3 rounded">
          <i className="fas fa-chevron-up"></i>
        </div>
      </BackToTop>
      <Footer />
    </Fragment>
  );
};

export default FrontLayout;
