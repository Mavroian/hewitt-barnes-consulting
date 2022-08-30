import React from "react";

const SingleBrandItem = ({ img }) => {
  return (
    <>
      <div
        className="brand__item-wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="brand__item"
          style={{
            width: "80%",
          }}
        >
          <img src={`assets/img/brand/brand-${img}.png`} alt="brand_image" />
        </div>
      </div>
    </>
  );
};

export default SingleBrandItem;
