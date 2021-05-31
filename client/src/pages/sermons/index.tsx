import React, { useState } from "react";
import Audiosermon from "../../components/sermon/Audiosermon";
import Textsermon from "../../components/sermon/Textsermon";
import Videosermon from "../../components/sermon/Videosermon";
import FrontLayout from "../../layout/FrontLayout";

const index = (): JSX.Element => {
  const [state, setState] = useState({
    video: true,
    audio: false,
    text: false,
  });
  const [sortBy, setSortBy] = useState({
    name: false,
    date: true,
  });
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(false);
    setSermonType(false);
  };
  const [sermonType, setSermonType] = useState(true);

  return (
    <FrontLayout>
      <main>
        <div className="cover-img poppins">
          <div className="m-container text-light">
            <h1 className="text-center  mb-2">
              Our <br /> Sermons
            </h1>
            <h1 className="rochester text-center">
              {state.video && "Video "}
              {state.audio && "Audio "}
              {state.text && "Written "}
              Sermons
            </h1>
          </div>
        </div>
        <div className="sermons ">
          <div className="py-5">
            <div className="m-container">
              <div className="sermontype d-lg-flex">
                <div className="v-a-t align-items-center d-flex mb-3 mb-lg-0 justify-content-end">
                  <i
                    className={`fas fa-video px-4 py-2 rounded ${
                      state.video && `px-5 _i-state`
                    }`}
                    onClick={() =>
                      setState({
                        ...state,
                        video: true,
                        audio: false,
                        text: false,
                      })
                    }
                  ></i>
                  <i
                    className={`fas fa-microphone px-4 py-2 rounded ${
                      state.audio && `px-5 _i-state`
                    }`}
                    onClick={() =>
                      setState({
                        ...state,
                        video: false,
                        audio: true,
                        text: false,
                      })
                    }
                  ></i>
                  <i
                    className={`fas fa-book-open px-4 py-2 rounded ${
                      state.text && `px-5 _i-state`
                    }`}
                    onClick={() =>
                      setState({
                        ...state,
                        video: false,
                        audio: false,
                        text: true,
                      })
                    }
                  ></i>
                </div>
                <div className="toggler d-flex align-items-center justify-content-end">
                  {search ? (
                    <form onSubmit={handleSearch} className="w-25">
                      <input
                        type="search"
                        className="rounded form-control animate__animated animate__slideInRight"
                      />
                    </form>
                  ) : (
                    <i
                      className="fas fa-search px-2 py-2 rounded"
                      onClick={() => setSearch(true)}
                    ></i>
                  )}

                  {!filter && (
                    <i
                      className="fas fa-sliders-h px-2 py-2 rounded"
                      onClick={() => setFilter(true)}
                    ></i>
                  )}
                  {filter && (
                    <ul className="animate__animated animate__zoomIn">
                      <li className="sort-by align-items-center px-3 py-1 d-flex">
                        <span>Sort By</span>
                        <i
                          className="fas fa-times"
                          onClick={() => setFilter(false)}
                        ></i>
                      </li>
                      <li
                        className={`px-3 text-muted ${
                          sortBy.name && `selected`
                        }`}
                        onClick={() => {
                          setSortBy({
                            ...sortBy,
                            name: true,
                            date: false,
                          });
                          setFilter(false);
                        }}
                      >
                        Name
                      </li>
                      <li
                        className={`px-3 text-muted ${
                          sortBy.date && `selected`
                        }`}
                        onClick={() => {
                          setSortBy({
                            ...sortBy,
                            name: false,
                            date: true,
                          });
                          setFilter(false);
                        }}
                      >
                        Date
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          {sermonType && (
            <h2 className="m-container mt-2 rochester text-warning">
              All {state.video && ` Video `}
              {state.audio && ` Recorded `}
              {state.text && ` Written `} Sermons
            </h2>
          )}
        </div>
        {state.video && <Videosermon />}
        {state.audio && <Audiosermon />}
        {state.text && <Textsermon />}
      </main>
    </FrontLayout>
  );
};

export default index;
