import React from "react";
import AboutUsimage from "../../../../Assets/Images/AboutUsImage.png";

const AboutUs = () => {
  return (
    <div>
      <div className=" pt-8 m-auto w-[90%] md:w-[70%]">
        <header className=" flex flex-col justify-center items-center">
          <h1 className=" text-4xl md:text-6xl">About us</h1>
          <h3 className=" text-2xl md:text-4xl">What Sets Us Apart !!!</h3>
        </header>
        <section className=" flex flex-col md:flex-row justify-around items-center gap-10">
          <img
            src={AboutUsimage}
            alt="AboutUsimage"
            className=" h-[15rem] md:h-[20rem] lg:h-[30rem]"
          />
          <div>
            <p className=" text-xl lg:text-3xl text-justify">
              We recognize that young minds learn best when they're having fun.
              Our curriculum is designed with age-appropriate content,
              interactive activities, and colorful visuals that captivate
              children's attention and keep them excited about learning. Our
              lessons are tailored to suit the children's cognitive development.
              We present complex concepts in a simple, understandable manner,
              allowing kids to grasp the foundations of coding effortlessly.{" "}
              <a
                href="**"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DA684] to-[#BEDC7CFC]"
              >
                {" "}
                Read more...
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
