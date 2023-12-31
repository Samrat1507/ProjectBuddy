import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-between h-screen items-center px-48">
      <div className="flex flex-col gap-5">
        <h1 className="uppercase text-8xl flex flex-col">
          <span>project</span>
          <span>buddy</span>
        </h1>
        <h2 className="text-black/50 text-xl flex gap-2">
          <span>Collaborate. </span>
          <span>Innovate. </span>
          <span>Elevate. </span>
        </h2>
        <button className="uppercase bg-blue/80 px-5 py-3 rounded-full shadow-md w-fit text-white shadow-gray-500">
          find a project
        </button>
      </div>
      <div className="w-auto bg-otherBlue rounded-xl shadow-2xl shadow-gray-700">
        <img className="w-auto"
          src="/Image1.png"
        />
      </div>
    </div>
  );
};
