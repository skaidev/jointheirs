import Link from "next/dist/client/link";
import React, { useState } from "react";
import Cover from "../../components/Cover";
import FrontLayout from "../../layout/FrontLayout";

const index = () => {
  const [typeE, setTypeE] = useState({
    General: false,
    Children: true,
    Men: false,
    Women: false,
    Youth: false,
  });
  const [minType, setMinType] = useState(false);

  return (
    <FrontLayout>
      <main className=" poppins">
        <Cover first="Our Annual Events" />
        <div className="m-container py-5">
          <div className="container px-0 row row-cols-5 type-of-event d-flex mb-5">
            <div
              className={`col button ${typeE.General && `purple`}`}
              onClick={() =>
                setTypeE({
                  ...typeE,
                  General: true,
                  Children: false,
                  Men: false,
                  Women: false,
                  Youth: false,
                })
              }
            >
              General
            </div>
            <div
              className={`col button ${typeE.Children && `purple`}`}
              onClick={() =>
                setTypeE({
                  ...typeE,
                  General: false,
                  Children: true,
                  Men: false,
                  Women: false,
                  Youth: false,
                })
              }
            >
              Children
            </div>
            <div
              className={`col button ${typeE.Men && `purple`}`}
              onClick={() =>
                setTypeE({
                  ...typeE,
                  General: false,
                  Children: false,
                  Men: true,
                  Women: false,
                  Youth: false,
                })
              }
            >
              Men
            </div>
            <div
              className={`col button ${typeE.Women && `purple`}`}
              onClick={() =>
                setTypeE({
                  ...typeE,
                  General: false,
                  Children: false,
                  Men: false,
                  Women: true,
                  Youth: false,
                })
              }
            >
              Women
            </div>
            <div
              className={`col button ${typeE.Youth && `purple`}`}
              onClick={() =>
                setTypeE({
                  ...typeE,
                  General: false,
                  Children: false,
                  Men: false,
                  Women: false,
                  Youth: true,
                })
              }
            >
              Youth
            </div>
          </div>
          <div className="type-of-event-min mb-4">
            {!minType && (
              <i
                className="btn fas fa-2x fa-sliders-h btn-light"
                onClick={() => setMinType(!minType)}
                role="button"
              ></i>
            )}
            {minType && (
              <div className="d-flex justify-content-start">
                <ul>
                  <li className="d-flex px-2 py-1 controller justify-content-between">
                    <span>Find By</span>
                    <i
                      className="fas fa-times"
                      onClick={() => setMinType(false)}
                      role="button"
                    ></i>
                  </li>
                  <li
                    className={`px-2 py-1 ${typeE.General && `purple`}`}
                    onClick={() =>
                      setTypeE({
                        ...typeE,
                        General: true,
                        Children: false,
                        Men: false,
                        Women: false,
                        Youth: false,
                      })
                    }
                  >
                    All
                  </li>
                  <li
                    className={`px-2 py-1 ${typeE.Children && `purple`}`}
                    onClick={() =>
                      setTypeE({
                        ...typeE,
                        General: false,
                        Children: true,
                        Men: false,
                        Women: false,
                        Youth: false,
                      })
                    }
                  >
                    Children
                  </li>
                  <li
                    className={`px-2 py-1 ${typeE.Men && `purple`}`}
                    onClick={() =>
                      setTypeE({
                        ...typeE,
                        General: false,
                        Children: false,
                        Men: true,
                        Women: false,
                        Youth: false,
                      })
                    }
                  >
                    Men
                  </li>
                  <li
                    className={`px-2 py-1 ${typeE.Women && `purple`}`}
                    onClick={() =>
                      setTypeE({
                        ...typeE,
                        General: false,
                        Children: false,
                        Men: false,
                        Women: true,
                        Youth: false,
                      })
                    }
                  >
                    Women
                  </li>
                  <li
                    className={`px-2 py-1 ${typeE.Youth && `purple`}`}
                    onClick={() =>
                      setTypeE({
                        ...typeE,
                        General: false,
                        Children: false,
                        Men: false,
                        Women: false,
                        Youth: true,
                      })
                    }
                  >
                    Youth
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="row events-wrap row-cols-1 row-cols-md-2 row-cols-lg-3">
            {events.map((eve) => (
              <div className="col mb-3 events" key={eve.id}>
                <div className="card h-100 event">
                  <div className="content py-2 px-2 mt-5">
                    <p className="text-center text-muted my-3">{eve.date}</p>
                    <h4 className="mb-4 text-center">{eve.title}</h4>
                    <div className="hide">
                      <h5 className="mb-4 text-muted text-center">
                        {eve.writeup}
                      </h5>
                      <h5 className="text-center">
                        <Link href="/event">
                          <a className=" text-decoration-none text-warning">
                            Read More
                          </a>
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="our-location py-5">
          <div className="m-container d-flex flex-column flex-md-row our-location-wrap">
            <img src="./images/event-rounded.png" />
            <div className="left">
              <h2 className="rochester text-warning mb-3">Our Location</h2>
              <h1 className="text-muted font-weight-bolder mb-3">
                Plan a Visit
              </h1>
              <p className="mb-4">
                Aliquam fringilla, turpis et tempor molestie, urna nunc commodo
                ex, et finibus diam magna a ut tempus odio. In dictum tmetus.
                Proin ut tempus odio. In dictum tincidunt egestm elit, in
                commodo sem pretium eu.tmetus. Proin ut tempus odio. In dictum
                tincidunt egestm elit, in commodo sem pretium e
              </p>
              <div className="left-address w-75  d-flex flex-column flex-md-row">
                <div className="left-address-main">
                  <div className="left-address-main-left">
                    <i className="fas fa-map-marker-alt fa-2x text-warning"></i>
                  </div>
                  <div className="left-address-main-right">
                    <h4>Address:</h4>
                    <p className="text-muted">
                      23, Aggrey Road, Aba Port Harcourt, Rivers State.
                    </p>
                  </div>
                </div>
                {/* -----#r */}
                <div className="left-address-main">
                  <div className="left-address-main-left">
                    <i className="fas fa-map-marker-alt fa-2x text-warning"></i>
                  </div>
                  <div className="left-address-main-right">
                    <h4>Service Time</h4>
                    <p className="text-muted">
                      Saturdays - 5:30 pm <br /> Sundays - 9:00 & 10:30 am
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.444085232075!2d7.032735314762972!3d4.86501199646747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27198c56a95%3A0x4bf2d3ebd3c1a2dd!2sJoint%20Heirs%20Assembly%20Int&#39;l%20Inc.!5e0!3m2!1sen!2sng!4v1621608305779!5m2!1sen!2sng"
                height="450"
                allowFullScreen={false}
                loading="lazy"
                style={{ width: "100%", border: 0, margin: 0, padding: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </FrontLayout>
  );
};

export default index;

const events = [
  {
    id: 1,
    date: "May 5th",
    writeup:
      "Men only – we welcome all men who wish to spend the breakfast time eating delicious homemade food and talk about important things like news",
    title: "Childrens Day Celebration",
  },
  {
    id: 2,
    date: "May 5th",
    writeup:
      "Men only – we welcome all men who wish to spend the breakfast time eating delicious homemade food and talk about important things like news",
    title: "Childrens Day Celebration",
  },
  {
    id: 3,
    date: "May 5th",
    writeup:
      "Men only – we welcome all men who wish to spend the breakfast time eating delicious homemade food and talk about important things like news",
    title: "Childrens Day Celebration",
  },
  {
    id: 4,
    date: "May 5th",
    writeup:
      "Men only – we welcome all men who wish to spend the breakfast time eating delicious homemade food and talk about important things like news",
    title: "Childrens Day Celebration",
  },
  {
    id: 5,
    date: "May 5th",
    writeup:
      "Men only – we welcome all men who wish to spend the breakfast time eating delicious homemade food and talk about important things like news",
    title: "Childrens Day Celebration",
  },
  {
    id: 6,
    date: "May 5th",
    writeup:
      "Men only – we welcome all men who wish to spend the breakfast time eating delicious homemade food and talk about important things like news",
    title: "Childrens Day Celebration",
  },
  {
    id: 7,
    date: "May 5th",
    writeup:
      "Men only – we welcome all men who wish to spend the breakfast time eating delicious homemade food and talk about important things like news",
    title: "Childrens Day Celebration",
  },
  {
    id: 8,
    date: "May 5th",
    writeup:
      "Men only – we welcome all men who wish to spend the breakfast time eating delicious homemade food and talk about important things like news",
    title: "Childrens Day Celebration",
  },
  {
    id: 9,
    date: "May 5th",
    writeup:
      "Men only – we welcome all men who wish to spend the breakfast time eating delicious homemade food and talk about important things like news",
    title: "Childrens Day Celebration",
  },
];
