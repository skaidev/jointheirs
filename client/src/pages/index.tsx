import React from "react";
import Typewriter from "typewriter-effect";
import Slide from "../components/VersesSlide";
import FrontLayout from "../layout/FrontLayout";
import Image from "next/image";

const index = (): JSX.Element => {
  return (
    <FrontLayout>
      <main className="">
        <section className="py-4 poppins home">
          <img
            src="./images/Ellipse 1 (Stroke).png"
            alt=""
            className="position-absolute"
          />
          <div className="m-container">
            <h1 className="font-weight-bold  text-center mb-3">
              <Typewriter
                onInit={() => console.log()}
                options={{
                  strings: ["Welcome To Our <br /> Church"],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* Welcome To Our <br /> Church */}
            </h1>
            <h3 className="rochester text-center mb-3">
              Joint Heirs Assembly...
            </h3>
            <button className="btn new-btn btn-warning px-5 border-0 text-light py-3 d-block mx-auto">
              Im New Here
            </button>
          </div>
        </section>
        <section className="sermon poppins py-4">
          <div className="m-container">
            <h3 className="mb-3">Upcoming Sermon</h3>
            <div className="sermon-details d-lg-flex">
              <p className="font-weight-bolder sermon-details-title">
                “The Law of Giving” -Rev. Joe Simeon
              </p>
              <div className="sermon-details-btn">
                <button className="btn btn-warning text-light px-5 py-3 d-block mx-auto">
                  Sermon Details
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="welcome py-5">
          <img
            src="./images/Ellipse 1 (Stroke)2.png"
            alt=""
            className="position-absolute ico"
          />
          <div>
            <div className="m-container welcome-wrap d-lg-flex">
              <div className="welcome-note poppins mb-3">
                <h2 className="rochester text-primary mb-3">Welcome</h2>
                <h1 className="font-weight-bolder mb-3">
                  You Matter To
                  <br /> God. You Matter to
                  <br /> Us
                </h1>
                <p className="mb-3">
                  See how we view God, Jesus, the Bible, man, and many <br />
                  significant aspects of our faith. Firmly rooted in Scripture,
                  the <br /> beliefs of Joint Heirs Assembly guide our decisions
                  as a church.
                </p>
                <button className="btn btn-warning px-5 py-3 text-light">
                  Learn More
                </button>
              </div>
              <div className="welcome-card mb-3 d-flex">
                <div className="box px-2 py-5">
                  <img
                    src="./images/video.png"
                    alt=""
                    className="d-block mx-auto mb-3"
                  />
                  <h3 className="text-center">
                    Latest Video <br /> Sermon
                  </h3>
                </div>
                <div className="box px-2 py-5">
                  <img
                    src="./images/donnations.png"
                    alt=""
                    className="d-block mx-auto mb-3"
                  />
                  <h3 className="text-center">Make Donations</h3>
                </div>
                <div className="box px-2 py-5">
                  <img
                    src="./images/event.png"
                    alt=""
                    className="d-block mx-auto mb-3"
                  />
                  <h3 className="text-center">
                    Church Up coming <br /> Events
                  </h3>
                </div>
                <div className="box px-2 py-5">
                  <img
                    src="./images/find.png"
                    alt=""
                    className="d-block mx-auto mb-3"
                  />
                  <h3 className="text-center">
                    Find a Church <br /> Location / Branch
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="need-prayers d-flex align-items-center py-5">
          <div className="m-container">
            <h1 className="mb-4 font-weight-bolder text-light">
              Need <br /> Prayers ?
            </h1>
            <button className="btn btn-warning text-light px-5 py-3">
              Request
            </button>
          </div>
        </section>
        <section className="upcoming-events poppins py-5">
          <div className="m-container">
            <h2 className="text-center mb-3 rochester text-primary">
              Upcoming Events
            </h2>
            <h1 className="text-center font-weight-bolder our-community mb-3">
              Join Our Community
            </h1>
            <div className="picture mb-3 d-lg-flex">
              <div className="picture-frame mb-3">
                <div className="picture-frame-cover mt-5 px-2 py-4">
                  <p className="text-center mb-3">May 5th</p>
                  <h2 className="text-center mb-3">
                    Childrens Day Celebration
                  </h2>
                  <p className="text-center mb-4">
                    Men only – we welcome all men who <br /> wish to spend the
                    breakfast time eating <br /> delicious homemade food and
                    talk about <br />
                    important things like news
                  </p>
                  <a className="text-warning d-block text-center">Read More</a>
                </div>
              </div>
              <div className="picture-frame mb-3">
                <div className="picture-frame-cover mt-5 px-2 py-4">
                  <p className="text-center mb-3">May 5th</p>
                  <h2 className="text-center mb-3">
                    Childrens Day Celebration
                  </h2>
                  <p className="text-center mb-4">
                    Men only – we welcome all men who <br /> wish to spend the
                    breakfast time eating <br /> delicious homemade food and
                    talk about <br />
                    important things like news
                  </p>
                  <a className="text-warning d-block text-center">Read More</a>
                </div>
              </div>
              <div className="picture-frame mb-3">
                <div className="picture-frame-cover mt-5 px-2 py-4">
                  <p className="text-center mb-3">May 5th</p>
                  <h2 className="text-center mb-3">
                    Childrens Day Celebration
                  </h2>
                  <p className="text-center mb-4">
                    Men only – we welcome all men who <br /> wish to spend the
                    breakfast time eating <br /> delicious homemade food and
                    talk about <br />
                    important things like news
                  </p>
                  <a className="text-warning d-block text-center">Read More</a>
                </div>
              </div>
            </div>
            <button className="btn d-block mx-auto btn-warning px-5 py-3 text-light">
              More Events
            </button>
          </div>
        </section>
        <section className="latest-sermon py-5 poppins">
          <img src="./images/Ellipse 1 (Stroke).png" alt="" className="ico" />
          <div className="m-container d-lg-flex">
            <div className="sermon-txt mb-3">
              <p className="mb-2">Latest Sermon</p>
              <h1 className="font-weight-bolder mb-3">
                The Resurrection of <br /> Jesus
              </h1>
              <div className="buttons d-flex mb-3">
                <button className="btn btn-warning px-5 py-2">
                  Watch Sermon
                </button>
                <button className="btn btn-warning px-3 py-2">
                  <i className="fas fa-microphone"></i>
                </button>
                <button className="btn btn-warning px-3 py-2">
                  <i className="fas fa-book-open"></i>
                </button>
              </div>
              <div>
                <button className="btn py-3 px-5 border-light text-light">
                  More Sermons
                </button>
              </div>
            </div>
            <div className="sermon-video mb-3">
              <video
                src="./images/0dff25ca84b6676dcc8ae3588d7e8b4f.mp4"
                className="w-75 d-block mx-auto"
                poster="./images/Frame 77.png"
                controls
              ></video>
            </div>
          </div>
        </section>
        <section className="py-5 poppins our-mission">
          <div className="m-container our-mission-wrap">
            <div className=" d-lg-flex flex-fill">
              <div className="our-mission-img py-2">
                <img
                  src="./images/Rectangle 34.png"
                  alt=""
                  className="w-75 d-block mx-auto"
                />
              </div>
              <div className="our-mission-txt py-2">
                <h2 className="text-primary rochester mb-3">Beliefs</h2>
                <h1 className="font-weight-bolder mb-3">Our Mission</h1>
                <p className="mb-3">
                  We are called to eat, drink, speak, think and work to the
                  <br />
                  glory of God. We worship God by remembering the gospel
                  <br />
                  through preaching, teaching, singing, praying and
                  <br />
                  celebrating baptism and communion.
                </p>
                <button className="btn btn-warning px-5 py-3 text-light">
                  About Us
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="visit-sermon poppins py-5">
          <div className="m-container align-items-center d-lg-flex">
            <div className="visit-sermon-txt">
              <h1 className="font-weight-bolder mb-3 text-center">Sermons</h1>
              {visitsermon.map((sermon) => (
                <div className="single-sermon-wrap ">
                  <div className="single-sermon d-flex">
                    <div className="single-sermon-ico-btn px-2 py-1">
                      <i className="fas fa-microphone px-3 py-2  border-bottom border-dark"></i>
                      <i className="fas fa-video px-3 py-2 border-bottom border-dark"></i>
                      <i className="fas fa-book-open px-3 py-2 "></i>
                    </div>
                    <div className="single-sermon-txt pl-1">
                      <h4 className="mb-4">{sermon.title}</h4>
                      <h5>
                        <b>{sermon.time}</b>
                        &nbsp;&nbsp;{sermon.pastor}
                      </h5>
                    </div>
                  </div>
                </div>
              ))}
              <button className="btn btn-outline-warning px-5 py-3 my-4">
                View More
              </button>
            </div>
            <div className="visit-sermon-img ">
              <Image
                src="/images/Man-in-church 1.png"
                alt=""
                height={500}
                width={400}
                // className="w-75"
              />
            </div>
          </div>
        </section>
        <section className="py-5 slider poppins">
          <div className="bible-verses container">
            <h1 className="text-center rochester text-primary mb-3">
              Bible verses
            </h1>

            <div className="slide-container mb-2">
              <h2 className="quote-1 text-left">
                <i className="fas fa-quote-left"></i>
              </h2>
              <div className="slides">
                <Slide />
              </div>
              <h2 className="quote-2  text-right">
                <i className="fas fa-quote-right"></i>
              </h2>
            </div>
          </div>
        </section>
        <section className="church-branches poppins py-5">
          <div className="m-container">
            <h1 className="text-center text-muted font-weight-bolder mb-3">
              Church Branches
            </h1>
            <div className="church-branches-wrap container d-lg-flex">
              <div className="branches">
                <img
                  loading="lazy"
                  decoding="async"
                  src="./images/Rectangle 34.png"
                  alt=""
                  className="d-block w-100"
                />
                <div className="branch-name-location text-center px-1 py-1">
                  <h3 className="mb-2">Rumuokrwusi Branch</h3>
                  <h5 className="text-muted">No. 6 Mission Road Elimgbu</h5>
                </div>
              </div>
              <div className="branches">
                <img
                  src="./images/Rectangle 34.png"
                  alt=""
                  className="d-block w-100"
                />
                <div className="branch-name-location text-center px-1 py-1">
                  <h3 className="mb-2">Rumuokrwusi Branch</h3>
                  <h5 className="text-muted">No. 6 Mission Road Elimgbu</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="donate py-5 poppins">
          <div className="m-container donate-wrap">
            <h2 className="text-primary text-center rochester mb-3">Donate</h2>
            <h1 className="text-center mb-3 text-muted font-weight-bolder">
              Support The Mission
            </h1>
            <div className="donate-slider">
              <div className="slides mb-3 d-lg-flex">
                <div className="pic d-flex">
                  <img
                    src="./images/katt-yukawa-K0E6E0a0R3A-unsplash 1.png"
                    alt=""
                    className="w-100"
                    style={{ height: "inherit" }}
                  />
                </div>
                <div className="txt py-3">
                  <div className="container">
                    <h2 className="mb-3">
                      Your Generousity is Making a <br /> Difference
                    </h2>
                    <h5 className="text-muted mb-3">
                      We are happy to get any support from members <br /> of
                      this assemblly and the community at large! <br /> Thank
                      you so much for staying with us, and for all your help,
                      <br /> Donations
                    </h5>
                    <div className="d-lg-flex justify-content-between w-75">
                      <h1 className="text-muted font-weight-bolder mb-3">
                        $75.00
                      </h1>
                      <button className="btn ml-1 btn-warning text-light px-5 py-3">
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </section>
        <section className="contact poppins py-5">
          <div className="m-container ">
            <h1 className="text-light mb-3 montserrat text-center font-weight-bolder">
              Get in Contact with Us
            </h1>
            <h5 className="text-light mb-5 text-center">
              We are called to eat, drink, speak, think and work to the glory of
              God. We worship God by remembering the <br /> gospel through
              preaching, teaching, singing, praying and celebrating baptism and
              communion.
            </h5>
            <div className="contact-form px-1 py-5">
              <form className="container">
                <div className="row rows  mb-4">
                  <div className="col cols">
                    <label>Yourn Name*</label>
                    <input type="text" className="form-control py-4" />
                  </div>
                  <div className="col cols">
                    <label>Contact Email*</label>
                    <input type="text" className="form-control py-4" />
                  </div>
                </div>
                {/* ------------------------------  */}
                <div className="row rows mb-4">
                  <div className="col cols">
                    <label>Phone no*</label>
                    <input type="text" className="form-control py-4" />
                  </div>
                  <div className="col cols">
                    <label>Branch*</label>
                    <input list="branch" className="form-control py-4" />
                    <datalist id="branch">
                      <option value="Airforce Branch" />
                      <option value="Rumuokrwusi Branch" />
                      <option value="none" />
                    </datalist>
                  </div>
                </div>
                {/* ------------------------------  */}
                <div className="row mb-3">
                  <div className="col">
                    <label>Your Message*</label>
                    <textarea
                      name=""
                      id=""
                      className="form-control"
                      rows={10}
                    ></textarea>
                  </div>
                </div>
                <p className="text-muted mb-3">
                  We are called to eat, drink, speak, think and work to the
                  glory of God. We worship God by remembering the <br /> gospel
                  through preaching, teaching, singing, praying and celebrating
                  baptism and communion.
                </p>

                <button className="btn btn-warning text-light px-5 py-3">
                  <b>Send</b>
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="email-phone poppins py-5">
          <div className="m-container">
            <div className="container email-phone-wrap d-lg-flex">
              <div className="email text-lg-center mb-3 py-1">
                <div className="icon-wrap mx-lg-auto mb-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <b className="d-block text-muted text-lg-center">Email Us</b>
                <p className="text-muted text-lg-center mb-3">
                  Email us for general Queries <br /> including mentorship and
                  spiritual <br /> counselling
                </p>
                <b className="d-block text-muted text-lg-center font-weight-bolder">
                  jointheirs5@gmail.com
                </b>
              </div>
              <div className="phone text-lg-center py-1">
                <div className="icon-wrap mx-lg-auto mb-3">
                  <i className="fas fa-tty"></i>
                </div>
                <b className="d-block text-muted text-lg-center">Email Us</b>
                <p className="text-muted text-lg-center mb-3">
                  Email us for general Queries <br /> including mentorship and
                  spiritual <br /> counselling
                </p>
                <b className="d-block text-muted text-lg-center font-weight-bolder">
                  jointheirs5@gmail.com
                </b>
              </div>
            </div>
          </div>
        </section>
        <section className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.444085232075!2d7.032735314762972!3d4.86501199646747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d27198c56a95%3A0x4bf2d3ebd3c1a2dd!2sJoint%20Heirs%20Assembly%20Int&#39;l%20Inc.!5e0!3m2!1sen!2sng!4v1621608305779!5m2!1sen!2sng"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            style={{ width: "100%", border: 0, margin: 0, padding: 0 }}
          ></iframe>
        </section>
      </main>
    </FrontLayout>
  );
};

export default index;

// <form className="form-inline">
//   <div className="form-group mb-2">
//     <label for="staticEmail2" className="sr-only">Email</label>
//     <input type="text" readonly className="form-control-plaintext" id="staticEmail2" value="email@example.com">
//   </div>
//   <div className="form-group mx-sm-3 mb-2">
//     <label for="inputPassword2" className="sr-only">Password</label>
//     <input type="password" className="form-control" id="inputPassword2" placeholder="Password">
//   </div>
//   <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
// </form>

const visitsermon = [
  {
    id: 1,
    title: "The Death of Jesus - Part One",
    time: new Date().toLocaleTimeString(),
    pastor: "Pastor John Mark",
  },
  {
    id: 2,
    title: "The Death of Jesus - Part One",
    time: new Date().toLocaleTimeString(),
    pastor: "Pastor John Mark",
  },
  {
    id: 3,
    title: "The Death of Jesus - Part One",
    time: new Date().toLocaleTimeString(),
    pastor: "Pastor John Mark",
  },
  {
    id: 4,
    title: "The Death of Jesus - Part One",
    time: new Date().toLocaleTimeString(),
    pastor: "Pastor John Mark",
  },
];
