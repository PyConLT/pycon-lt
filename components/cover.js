import React from "react";

const Cover = () => {
  return (
    <div className="cover-container">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://www.pycon.lt/src/img/cover.jpg"
              alt="First slide"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
