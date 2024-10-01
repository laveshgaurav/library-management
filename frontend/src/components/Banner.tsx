import React from "react";
import Bookstack from "../assets/bookstack.png";
import LineChart from "./LineChart";

type Props = {
  username: string;
};
function Banner({ username }: Props) {
  return (
    <div className="w-full border-red p-8">
      <div className="flex gap-x-8 md:flex-col md:gap-y-6">
        <div className="flex aspect-[4/1] w-1/2 items-center justify-between rounded-md bg-red p-8 md:w-full md:p-4">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="">
              <h2 className="mb-2 text-24 font-normal text-white">Welcome Back {username}</h2>
              <p className="text-14 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut
                labore et .
              </p>
            </div>
            <h3 className="font-light text-white md:mt-8">
              ADD MORE BOOKS <i className="fa-solid fa-arrow-right"></i>
            </h3>
          </div>
          <img src={Bookstack} alt="BookStack" className="w-[120px] md:w-14" />
        </div>
        <div className="aspect-[5/2] w-1/2 rounded-md bg-white p-8 pb-4 shadow-md md:w-full md:p-4">
          <h2 className="text-18 font-bold text-red">Visit & Read</h2>
          <LineChart />
        </div>
      </div>
    </div>
  );
}

export default Banner;
