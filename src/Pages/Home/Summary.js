import React from "react";
import experience from "../../assets/icons/user-experience.png";
import satisfaction from "../../assets/icons/satisfaction.png";
import award from "../../assets/icons/trophy.png";
const Summary = () => {
  return (
    <div>
      <div className="divider"></div>
      <div className="flex flex-col justify-center items-center mb-12">
        <h2 className="text-center text-3xl font-bold uppercase text-accent mb-4">
          Our Activities
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
              <img src={experience} alt="" className="w-20 mx-auto" />
              <span
                className="font-bold  text-center text-success lg:text-8xl text-6xl"
                data-from="0"
                data-to="25"
                data-speed="1500"
              >
                5
              </span>
              <span className="uppercase text-center text-white font-bold lg:text-2xl text-1xl">
                Years of
              </span>
              <span className=" text-center uppercase text-white font-bold lg:text-2xl text-1xl">
                Experience{" "}
              </span>
            </div>
          </div>

          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
              <img src={satisfaction} alt="" className="w-20 mx-auto" />
              <span
                className="font-bold  text-center text-success lg:text-8xl text-6xl"
                data-from="0"
                data-to="25"
                data-speed="1500"
              >
                6K+
              </span>
              <span className="uppercase text-center text-white font-bold lg:text-2xl text-1xl">
                Satisfied
              </span>
              <span className=" text-center uppercase text-white font-bold lg:text-2xl text-1xl">
                Customers{" "}
              </span>
            </div>
          </div>

          <div className="card w-96 bg-base-300 shadow-xl">
            <div className="card-body">
              <img src={award} alt="" className="w-20 mx-auto" />
              <span
                className="font-bold  text-center text-success lg:text-8xl text-6xl"
                data-from="0"
                data-to="25"
                data-speed="1500"
              >
                12
              </span>
              <span className="uppercase text-center text-white font-bold lg:text-2xl text-1xl">
                earned
              </span>
              <span className=" text-center uppercase text-white font-bold lg:text-2xl text-1xl">
                awards{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Summary;
