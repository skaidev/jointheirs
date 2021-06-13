import React from "react";

const Audiosermon = (): JSX.Element => {
  return (
    <div className="video_sermon">
      <div className="audio-sermon animate__animated animate__zoomIn">
        <div className="audio-sermon-wrap m-container py-3">
          <div className="row row-cols-1 video-card row-cols-md-2 row-cols-lg-3 ">
            {video.map((_) => (
              <div key={_.key} className="col mb-4">
                <div className="card border-0 h-100">
                  <iframe
                    src={_.img}
                    width="100%"
                    height="300"
                    className="card-img"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="eager"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audiosermon;

const video = [
  {
    key: 1,
    img: "https://www.youtube.com/embed/FeZfTawjw3o",
  },
  {
    key: 2,
    img: "https://www.youtube.com/embed/FeZfTawjw3o",
  },
  {
    key: 3,
    img: "https://www.youtube.com/embed/FeZfTawjw3o",
  },
  {
    key: 4,
    img: "https://www.youtube.com/embed/FeZfTawjw3o",
  },
  {
    key: 5,
    img: "https://www.youtube.com/embed/FeZfTawjw3o",
  },
];
