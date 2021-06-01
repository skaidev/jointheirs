import React from "react";

const Cover = ({ first }) => {
  return (
    <div className="top-cover py-4">
      <div className="write-up text-light poppins">
        <h1 className="font-weight-bolder text-center">{first}</h1>
        <h1 className="rochester text-center">Joint Heirs Assembly...</h1>
      </div>
    </div>
  );
};

export default Cover;
