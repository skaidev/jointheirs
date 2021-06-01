import React from "react";
import Cover from "../components/Cover";
import FrontLayout from "../layout/FrontLayout";

const about = () => {
  return (
    <FrontLayout>
      <main className="poppins">
        <Cover first="About us" />
        <div className="first position-relative  py-3">
          <div className="container  first-welcome">
            <img
              src="./images/Ellipse 1 (Stroke).png"
              alt=""
              className="position-absolute"
            />
            <h1 className="text-warning text-center rochester mb-4">Welcome</h1>
            <h1 className="text-center mb-4 font-weight-bolder huge">
              We exist to connect people to Jesus and each other
            </h1>
            <iframe
              src="https://www.youtube.com/embed/EA_xbvpHB-o"
              frameBorder="0"
              height="451"
              className="w-75 mx-auto mb-4 d-block"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              fringilla, turpis et tempor molestie, urna nunc commodo ex,
              finibus diam magna a metus. Proin ut tempus odio. In dictum
              tincidunt egestas. Quisque egestas enim elit, in commodo sem
              pretium eu. Nullam vestibulum finibus ligula eget feugiat.
              Phasellus sit amet mi tristique, imperdiet ex eu, commodo neque.
              Phasellus ex felis, laoreet vitae ex ullamcorper.
            </p>
          </div>
        </div>
        <div className=" spiritual  py-5">
          <div className="container d-flex  flex-column flex-md-row align-items-md-center spiritual-wrap">
            <div className="left">
              <img
                src="/images/spiritual.png"
                alt=""
                className="d-block mx-auto"
                style={{ width: `90%`, height: "inherit" }}
              />
            </div>
            <div className="right">
              <h1 className="rochester text-warning mb-3">Spiritual</h1>
              <h1 className="font-weight-bolder mb-3">Connect</h1>
              <p>
                Aliquam fringilla, turpis et tempor molestie, urna nunc commodo
                ex, et finibus diam magna a metus. Proin ut tempus odio. In
                dictum tincidunt egestas. Quisque egestas enim elit, in commodo
                sem pretium eu.
              </p>
            </div>
          </div>
        </div>
        <div className="our-team  py-5">
          <div className="container our-team-wrap d-flex flex-column flex-md-row">
            <div className="left row row-cols-1 h-100 row-cols-md-2">
              <div className="col mb-2">
                <div className="card h-100">
                  <figure className="position-relative">
                    <img
                      src="./images/emmanuel.png"
                      className="card-img-top"
                      alt="..."
                      style={{ objectFit: "cover" }}
                    />
                    <figcaption className="text-light">
                      <i className="fab fa-2x fa-facebook"></i>
                      <i className="fab fa-2x fa-twitter"></i>
                    </figcaption>
                  </figure>
                  <div className="card-body bg-light">
                    <h6 className="text-center mb-3">Pastor John Kingsley </h6>
                    <p className="text-center">Senior Pastor</p>
                  </div>
                </div>
              </div>
              <div className="col mb-2 ">
                <div className="card h-100">
                  <figure className="position-relative">
                    <img
                      src="./images/kingsely.png"
                      className="card-img-top"
                      alt="..."
                      style={{ objectFit: "cover" }}
                    />
                    <figcaption className="text-light">
                      <i className="fab fa-2x fa-facebook"></i>
                      <i className="fab fa-2x fa-twitter"></i>
                    </figcaption>
                  </figure>

                  <div className="card-body bg-light">
                    <h6 className="text-center mb-3">Pastor John Kingsley </h6>
                    <p className="text-center">Senior Pastor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <h1 className="rochester text-warning mb-3">Our Team</h1>
              <h1 className="font-weight-bolder mb-3">Desciples</h1>
              <p className="mb-5">
                Aliquam fringilla, turpis et tempor molestie, urna nunc commodo
                ex, et finibus diam magna a metus. Proin ut tempus odio. In
                dictum tincidunt egestas. Quisque egestas enim elit, in commodo
                sem pretium eu.
              </p>
              <button className="btn btn-warning px-5 py-3 text-light">
                View our Staff
              </button>
            </div>
          </div>
        </div>
        <div className="sunday py-5">
          <div className="container sunday-wrap d-flex  flex-column flex-md-row align-items-md-center">
            <div className="left">
              <h1 className="rochester text-warning mb-3">Sunday </h1>
              <h1 className="font-weight-bolder mb-3">Gatherings</h1>
              <p>
                Aliquam fringilla, turpis et tempor molestie, urna nunc commodo
                ex, et finibus diam magna a metus. Proin ut tempus odio. In
                dictum tincidunt egestas. Quisque egestas enim elit, in commodo
                sem pretium eu.
              </p>
            </div>
            <div className="right">
              <img src="./images/sunday.png" alt="" className="w-100" />
            </div>
          </div>
        </div>
        <div className="what-next py-5 position-relative">
          <div className="container what-next-wrap">
            <img
              src="./images/Ellipse 1 (Stroke).png"
              alt=""
              className="position-absolute pronto"
            />
            <h1 className="rochester text-warning text-center mb-3">
              Whats Next?
            </h1>
            <h1 className="font-weight-bolder text-center mb-3">Next Steps</h1>
            <p className="text-center mb-4">
              Congratulations! You have decided to dedicate your life to
              following Jesus. You may be wondering what’s next on your journey.
              We want to help! Join us as we guide you toward the next steps in
              your walk with Christ.
            </p>
            <div className="row row-cols-1  row-cols-md-2 row-cols-lg-3">
              {WhatCards.map((card) => (
                <div className="col mb-3" key={card.id}>
                  <div className="card h-100">
                    <img
                      src={`./images/${card.img}`}
                      alt=""
                      className="card-img"
                    />
                    <div
                      className={`card-body position-relative ${card?.color}  py-5 ${card?.bgcolor}`}
                    >
                      <h2
                        className={`absolute font-weight-bolder position-absolute text-light  rounded-circle ${card?.numbgcolor}`}
                      >
                        {card.id}
                      </h2>
                      <h3 className="text-center mb-4">{card?.title}</h3>
                      <p className="text-center">{card?.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </FrontLayout>
  );
};

export default about;

const WhatCards = [
  {
    id: 1,
    img: "kingsely.png",
    title: "Get Involved",
    body: "Congratulations! You have decided to dedicate your life to following Jesus. You may be wondering what’s next ant to help! Join us as we guide you toward the next steps in your walk with Christ.",
    bgcolor: "bg-warning",
    color: "text-light",
    numbgcolor: "#030CE0",
  },
  {
    id: 2,
    img: "kingsely.png",
    title: "Attend Services",
    body: "Congratulations! You have decided to dedicate your life to following Jesus. You may be wondering what’s next ant to help! Join us as we guide you toward the next steps in your walk with Christ.",
    bgcolor: "bg-light",
    numbgcolor: " #022162",
  },
  {
    id: 3,
    img: "kingsely.png",
    title: "Questions",
    body: "Congratulations! You have decided to dedicate your life to following Jesus. You may be wondering what’s next ant to help! Join us as we guide you toward the next steps in your walk with Christ.",
    bgcolor: "bg-light",
    numbgcolor: "bg-warning",
  },
];
