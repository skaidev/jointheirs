import React, { useState } from "react";
import Cover from "../../components/Cover";
import FrontLayout from "../../layout/FrontLayout";
import Link from "next/dist/client/link";

const index = () => {
  const [typeE, setTypeE] = useState({
    General: "",
    Children: "",
    Men: "",
    Women: "",
    Youth: "",
  });
  return (
    <FrontLayout>
      <main className=" poppins">
        <Cover first="Our Annual Events" />

        <div className="m-container py-5">
          <div className="container type-of-event d-flex mb-4">
            {Tevent.map((e) => (
              <button
                key={e.id}
                className={`btn px-4 py-3 border-0 ${e.status && `purple`}`}
              >
                {e.txt}
              </button>
            ))}
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

const Tevent = [
  {
    id: 1,
    txt: "General",
    status: false,
  },
  {
    id: 2,
    txt: "Children",
    status: true,
  },
  {
    id: 3,
    txt: "Men",
    status: false,
  },
  {
    id: 4,
    txt: "Women",
    status: false,
  },
  {
    id: 5,
    txt: "Youth",
    status: false,
  },
];
