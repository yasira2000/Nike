import React from "react";
import { arrowRight } from "../../assets/icons";
import Button from "../components/Button";
import { shoe8 } from "../../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justif-between max-container max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide
          <span className="text-coral-red"> Super </span>
          <br />
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center max-lg:mt-10">
        <img src={shoe8} alt="shoe8" width={570} height={522} />
      </div>
    </section>
  );
};

export default SuperQuality;
