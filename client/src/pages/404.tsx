import React from "react";

import Link from "next/link";
const Error = (): JSX.Element => {
  return (
    <div className="error">
      <h1 className="font-weight-bold mb-2 poppins">
        <span className="display-1">O</span>OOps!
      </h1>
      <h2 className="text-center mb-4">
        <span className="font-weight-bolder">404 </span>|
        <span className="font-weight-lighter">
          &nbsp; This page could not be found&nbsp;&nbsp;
          <span className="disply-4">🙁</span>
        </span>
      </h2>
      <p className="mb-3 text-center">
        Click here to return to the home page <br />
        <i className="fas fa-arrow-down"></i>
      </p>
      <h3 className="animate__animated animate__heartBeat animate__infinite	infinite">
        <Link href="/">
          <a>
            <i className="fas fa-1x fa-arrow-left"></i>
          </a>
        </Link>
      </h3>
    </div>
  );
};

export default Error;
