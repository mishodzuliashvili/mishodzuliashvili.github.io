"use client";
import Image from "next/image";
import { Typer } from "./Typer";
import { Tilt } from "react-tilt";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Image
        width={0}
        height={0}
        className="pointer-events-none top-5 relative -z-10 left-0 object-cover overflow-auto max-w-none w-[160%] sm:w-[100%]"
        src="/bg-2.svg"
        alt=""
      />
      <div className="bg-back text-white p-5 flex flex-col gap-5 relative z-10 px-10 md:px-20 lg:px-36">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <h1 className="font-bungee text-3xl lg:text-5xl">
              <span>{"HI, I'M MISHO"}</span>
              <p className="text-primary mt-2 text-2xl">
                <Typer />
              </p>
            </h1>
          </div>
          <div>
            <p className="text-left md:text-right font-exo font-black text-sm lg:text-xl">
              I love being a developer and always looking for new challenges to
              learn and grow. I have experience working on different projects
              during my time at university. Some of the things I know how to do
              are creating websites using HTML, CSS, and JavaScript. I also use
              tools like GIT to keep track of my work. I enjoy making things
              look good and making sure they are easy to use for everyone. I am
              good at solving problems and coming up with creative solutions.
              Right now, I am studying Computer Science at Kutaisi International
              University.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pb-10">
          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <article className="bg-[#2F2F31] h-full">
              <div className="border-l-4 border-primary-hover h-full">
                <div className="border-l-4 border-primary h-full p-5">
                  <p className="text-3xl font-bungee mb-4">What.</p>
                  <p className="text-sm md:text-lg lg:text-xl font-exo font-bold ">
                    I can build a website from scratch or work on an existing
                    one. I have experience with HTML, CSS, JavaScript, React,
                    and Node.js.
                  </p>
                </div>
              </div>
            </article>
          </Tilt>
          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <article className="bg-[#2F2F31] h-full">
              <div className="border-l-4 border-primary-hover h-full">
                <div className="border-l-4 border-primary h-full p-5">
                  <p className="text-3xl font-bungee mb-4">Why.</p>
                  <p className="text-sm md:text-lg lg:text-xl font-exo font-bold ">
                    I love to create things and solve problems. I enjoy working
                    with people who are passionate about what they do. I am
                    always looking for new challenges to learn and grow.
                  </p>
                </div>
              </div>
            </article>
          </Tilt>
          <Tilt
            className="parallax-effect-glare-scale"
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
          >
            <article className="bg-[#2F2F31] h-full">
              <div className="border-l-4 border-primary-hover h-full">
                <div className="border-l-4 border-primary h-full p-5">
                  <p className="text-3xl font-bungee mb-4">When.</p>
                  <Link
                    href="#contact"
                    className="text-3xl text-left md:text-4xl font-bungee text-primary mb-2 hover:text-primary-hover transition-all duration-300 ease-in-out"
                  >
                    Connect now!
                  </Link>
                </div>
              </div>
            </article>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default About;
