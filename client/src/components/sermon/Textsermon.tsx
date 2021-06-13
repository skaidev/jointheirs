import React from "react";

const Textsermon = (): JSX.Element => {
  return (
    <div className="text_sermon">
      <div className="m-container text-sermon poppins py-5">
        <div className="single-text-sermon mb-5">
          <h6 className="text-muted mb-4">February, 2020</h6>
          {writeUp.map((txt) => (
            <div className="text-sermon-card mb-3" key={txt.id}>
              <div className="right text-center text-light px-2 py-1">
                <h2 className="my-4">Bible Text</h2>
                {txt.verse.map((v, i) => (
                  <h6 className="mb-3" key={i}>
                    {v}
                  </h6>
                ))}
              </div>
              <div className="left py-1 px-2 px-md-3  px-lg-5">
                <div className="left-wrap">
                  <div className="first mb-3">
                    <h2 className="mb-3">{txt.title}</h2>
                    <div className="line"></div>
                  </div>
                  <div className="quote">
                    {txt.body.map((e, i) => (
                      <article key={i}>
                        <h6 className="text-info mb-3">{e.verse}</h6>
                        <p>{e.main}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Textsermon;

const writeUp = [
  {
    id: 1,
    verse: ["Mat. 3 vs 16 - 17", "Mat. 3 vs 16 - 17", "Mat. 3 vs 16 - 17"],
    title: "The Resurrecton of Jesus - Part one",
    body: [
      { verse: "Act. 20 vs 1 - 30" },
      {
        main: "Through Macedonia and Greece. 20 When the uproar had ended, Paul sent for the disciples and, after encouraging them, said goodbye and set out for Macedonia. 2 He traveled through that area, speaking many words of encouragement to the people, Read more",
      },
    ],
  },
  {
    id: 2,
    verse: ["Mat. 3 vs 16 - 17", "Mat. 3 vs 16 - 17", "Mat. 3 vs 16 - 17"],
    title: "The Resurrecton of Jesus - Part one",
    body: [
      { verse: "Act. 20 vs 1 - 30" },
      {
        main: "Through Macedonia and Greece. 20 When the uproar had ended, Paul sent for the disciples and, after encouraging them, said goodbye and set out for Macedonia. 2 He traveled through that area, speaking many words of encouragement to the people, Read more",
      },
    ],
  },
  {
    id: 3,
    verse: ["Mat. 3 vs 16 - 17", "Mat. 3 vs 16 - 17", "Mat. 3 vs 16 - 17"],
    title: "The Resurrecton of Jesus - Part one",
    body: [
      { verse: "Act. 20 vs 1 - 30" },
      {
        main: "Through Macedonia and Greece. 20 When the uproar had ended, Paul sent for the disciples and, after encouraging them, said goodbye and set out for Macedonia. 2 He traveled through that area, speaking many words of encouragement to the people, Read more",
      },
    ],
  },
  {
    id: 4,
    verse: ["Mat. 3 vs 16 - 17", "Mat. 3 vs 16 - 17", "Mat. 3 vs 16 - 17"],
    title: "The Resurrecton of Jesus - Part one",
    body: [
      { verse: "Act. 20 vs 1 - 30" },
      {
        main: "Through Macedonia and Greece. 20 When the uproar had ended, Paul sent for the disciples and, after encouraging them, said goodbye and set out for Macedonia. 2 He traveled through that area, speaking many words of encouragement to the people, Read more",
      },
    ],
  },
];
