import React,{useState} from "react";

function Payment() {
    const [toggle,setToggle]=useState(false);
  return (
    <div className="flex flex-col items-center justify-center w-full py-10 text-black dark:bg-[#1d2a35] dark:text-white">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="md:text-5xl text-3xl font-bold text-center px-2">
          Your chance to Achieve even{" "}
          <span className="text-[#059862]">more</span>
        </h1>
        <p className="md:text-xl text-lg text-center px-2">
          Find the plan to fulfill the requirements of your project
        </p>
        <div className="flex flex-row gap-2 items-center justify-center px-2">
          <p>Monthly</p>
          {!toggle ? <img
            src="https://www.w3schools.com/signup/toggle.png"
            alt="toggle"
            className="w-[3em] cursor-pointer"
            onClick={()=>setToggle(true)}
          /> : <img src="https://www.w3schools.com/signup/toggle_right.png" alt="toggle" className="w-[3em] cursor-pointer" onClick={()=>setToggle(false)}/>}
          <p className=" text-center">Yearly (get 2 months for free)</p>
        </div>
        <div className="grid xl:grid-cols-4 sm:grid-cols-2 max-sm:grid items-center justify-center gap-6 px-2">
          <div className="flex flex-col gap-3 items-center justify-center px-3 border-2 rounded-2xl py-4 sm:w-[16em] w-full bg-[#D9EEE1] border-[#04AA6D] min-h-[20em] md:h-[35em] text-black">
            <h1 className="text-xl font-bold">Free</h1>
            <p className="font-bold">Become a W3Schooler</p>
            <img
              src="https://www.w3schools.com/signup/lynxbrown.svg"
              alt="brown"
              className="w-[6em]"
            />
            <p className="font-bold w-[80%] text-center">Improve Your Learning Experience</p>
            <div className="flex flex-col justify-start items-start gap-2 pt-4 w-full">
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
            </div>
            <button className="w-[10em] bg-[#282A35] text-center rounded-full py-2 text-white font-semibold hover:bg-black mt-4">
              Sign up
            </button>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center px-3 border-2 rounded-2xl py-4  border-[#04AA6D] md:h-[35em] sm:w-[16em] w-full">
            <h1 className="text-xl font-bold">Pro</h1>
            <p className="font-bold text-center">Build and host your frontend projects</p>
            <h1 className="text-sm pt-6"><span className="text-5xl font-bold text-[#04AA6D]">{toggle ?"$49.99" :"$4.99"}</span>/{toggle ?"year" :"month"}</h1>
            <div className="flex flex-col mt-2 justify-center items-center">
                <h1 >All <span className="font-bold">Free</span></h1>
                <h1 className="font-bold">+</h1>
            </div>
            <div className="flex flex-col justify-start items-start gap-2 pt-4 w-full">
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
              <div className="flex flex-row gap-3 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>My Learning</p>
              </div>
            </div>
            <button className="w-[10em] bg-[#04AA6D] text-center rounded-full py-2 text-white font-semibold hover:bg-[#059862]  mt-3">
              Sign up
            </button>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center px-3 border-2 rounded-2xl py-4 sm:w-[16em] w-full border-[#04AA6D] md:h-[35em]">
            <h1 className="text-xl font-bold">Premium</h1>
            <p className="font-bold text-center">Get backend support and all you need to build a web app</p>
            <h1 className="text-sm pt-6"><span className="text-5xl font-bold text-[#04AA6D]">{toggle ? "$99.9" : "$9.9"}</span>/{toggle ? "year" : "month"}</h1>
            <div className="flex flex-col mt-2 justify-center items-center">
                <h1 >All <span className="font-bold">Pro</span></h1>
                <h1 className="font-bold">+ upgraded to</h1>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center mt-4">
                <h1 className="text-3xl font-bold">15</h1>
                <div className="flex flex-row gap-1 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>Basic Spaces</p>
                </div>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center mt-4">
                <h1 className="text-3xl font-bold">1</h1>
                <div className="flex flex-row gap-1 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>Fullstack Spaces</p>
                </div>
            </div>
            <button className="w-[10em] bg-[#04AA6D] text-center rounded-full py-2 text-white font-semibold hover:bg-[#059862]  mt-10">
              Sign up
            </button>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center px-3 border-2 rounded-2xl py-4  border-[#04AA6D] md:h-[35em] sm:w-[16em] w-full">
            <h1 className="text-xl font-bold">Diamond</h1>
            <p className="font-bold text-center">Get more server power for professionals and businesses</p>
            <h1 className="text-sm pt-6"><span className="text-5xl font-bold text-[#04AA6D]">{toggle ? "$299.9" : "$29.9"}</span>/{toggle ? "year" : "month"}</h1>
            <div className="flex flex-col mt-2 justify-center items-center">
                <h1 >All <span className="font-bold">Premium</span></h1>
                <h1 className="font-bold">+ upgraded to</h1>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center mt-4">
                <h1 className="text-3xl font-bold">20</h1>
                <div className="flex flex-row gap-1 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>Basic Spaces</p>
                </div>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center mt-4">
                <h1 className="text-3xl font-bold">15</h1>
                <div className="flex flex-row gap-1 items-center font-bold">
                <img
                  src={"https://www.w3schools.com/signup/check.svg"}
                  alt="tick"
                />
                <p>Fullstack Spaces</p>
                </div>
            </div>
            <button className="w-[10em] bg-[#04AA6D] text-center rounded-full py-2 text-white font-semibold hover:bg-[#059862]  mt-10">
              Sign up
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center text-center">
        <p className="text-lg font-bold ">Looking to add multiple users?</p>
        <p className="text-lg font-bold mb-2 underline cursor-pointer text-[#04AA6D] hover:text-[#059862]">Read here for how to get in touch</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
