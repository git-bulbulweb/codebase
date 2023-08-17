import React from "react";
import Learning from "./Learning";

function Spaces() {
  return (
    <div className="flex flex-col   justify-center items-center text-white font-bold">
    <div className="flex flex-col justify-center items-center gap-8 py-8 bg-[#282A35] w-full">
      <h1 className="text-5xl text-center max-sm:text-3xl">w3school Spaces</h1>
      <p className="text-xl lg:w-[40em] text-center leading-relaxed max-sm:text-lg">
        If you want to create your own website,{" "}
        <span className="underline text-[#FFC0C7]">
          {" "}
          check out W3Schools Spaces.
        </span>
        It is free to use, and does not require any setup:
      </p>

      <img
        src="https://www.w3schools.com/spaces/dynamicspaces.gif"
        alt="spaces"
        className="px-4"
      />

      <img
        src="https://www.w3schools.com/how-spaces-works3.png"
        alt="working"
        className="px-4"
      />

      <button className="bg-[#04AA6D] hover:bg-green-700 px-4 py-2 lg:w-[15em] rounded-full text-lg">
        Learn Here
      </button>
      </div>
      <Learning />
      <div className="flex flex-col gap-8 justify-center dark:bg-[rgb(13,23,33)]          w-full items-center text-center py-8 text-white bg-[#282A35]">
        <h1 className="text-5xl max-sm:text-3xl">Become a PRO User</h1>
        <p className="text-2xl text-rose-200">And unlock powerful features:</p>
        <div className="flex flex-col gap-4 text-lg items-start justify-center">
          <div className="flex flex-row gap-3">
            <img
              src={"https://www.w3schools.com/spaces/files/check3.db67d31e.svg"}
              alt="tick"
            />
            <p>Browse W3Schools without ads</p>
          </div>
          <div className="flex flex-row gap-3">
            <img
              src={"https://www.w3schools.com/spaces/files/check3.db67d31e.svg"}
              alt="tick"
            />
            <p>
              Website hosting (Includes{" "}
              <span className="underline hover:text-green-700">Spaces</span>{" "}
              PRO)
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <img
              src={"https://www.w3schools.com/spaces/files/check3.db67d31e.svg"}
              alt="tick"
            />
            <p>
              Access to our{" "}
              <span className="underline hover:text-green-700">
                HTML Video Tutorial
              </span>
            </p>
          </div>
        </div>
        <button className="bg-[#04AA6D] hover:bg-green-700 px-4 py-2 lg:w-[15em] rounded-full text-lg">
          Learn Here
        </button>
      </div>
    </div>
  );
}

export default Spaces;
