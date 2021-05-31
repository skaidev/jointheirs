import React from "react";
import FrontLayout from "../layout/FrontLayout";
import Link from "next/link";
import Cover from "../components/Cover";

const branches = (): JSX.Element => {
  return (
    <FrontLayout>
      <div className="branch">
        <Cover first="Our Branches" />
        <div className="container py-5 poppins">
          <div className="row row-cols-1 row-cols-md-2">
            {branch.map((branch) => (
              <div className="col  mb-4" key={branch.id}>
                <div className="card h-100">
                  <img
                    src={`images/${branch.img}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body bg-light">
                    <h2 className="card-title  mb-3 text-center font-weight-bolder">
                      {branch.pastor}
                    </h2>
                    <div className="card-text mb-3 d-flex justify-content-center align-items-center">
                      <i className="fas fa-2x fa-map-marker-alt mr-1 mr-md-2 text-warning"></i>
                      <span className="text-muted">{branch.location}</span>
                    </div>
                    <h2 className="text-info text-center mb-3">
                      {branch.state} state
                    </h2>
                    <Link href={branch.link}>
                      <button className="btn mx-auto d-block btn-warning text-light px-4 py-3">
                        Contact branch
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FrontLayout>
  );
};

export default branches;

const branch = [
  {
    id: 1,
    img: "emmanuel.png",
    pastor: "Pastor Kenneth Emmanuel ",
    location: "23, Aggrey Road, Aba Port Harcourt, Rivers State.",
    state: "Lagos",
    link: "/",
  },
  {
    id: 2,
    img: "kingsely.png",
    pastor: "Pastor John Kingsley ",
    location: "23, Aggrey Road, Aba Port Harcourt, Rivers State.",
    state: "Owerri",
    link: "/",
  },
];
