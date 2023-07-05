"use client";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { Tilt } from "react-tilt";

const Project = ({ title, description, image, link, github }: any) => {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <article className="bg-white shadow-xl h-full">
        <div className="border-l-4 border-primary-hover h-full">
          <div className="border-l-4 border-primary h-full">
            <Link href={link} target="_blank">
              <Image
                src={image}
                className="object-left-top object-cover h-56"
                width={1000}
                height={1000}
                alt=""
              />
            </Link>
            <div className="p-5">
              <p className="text-3xl font-bungee mb-4 flex justify-between">
                <Link href={link} target="_blank">
                  {title}
                </Link>
                {github.length > 0 && (
                  <Link href={github} target="_blank">
                    <BsGithub />
                  </Link>
                )}
              </p>
              <p className="text-sm md:text-xl font-exo">{description}</p>
            </div>
          </div>
        </div>
      </article>
    </Tilt>
  );
};

const Projects = () => {
  return (
    <div className=" px-10 md:px-20 lg:px-36 py-16 flex flex-col gap-4">
      <h2 className="flex-1 font-bungee text-3xl pb-12 lg:p-0 lg:text-5xl">
        Projects
      </h2>
      <p className="font-exo font-black text-sm lg:text-xl lg:mb-12">
        Expanding my skill set from creating landing pages to learning Next.js,
        Node.js backend, and more, to balance studying and professional growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pb-10">
        <Project
          description="Contest every week. Compete and see your ranking!"
          title="KIU contests"
          image="/p2.png"
          link="https://kiu-students.web.app/"
          github=""
        />
        <Project
          description="Discover & Share AI-Powered Prompts."
          title="Promptopia"
          image="/p1.png"
          link="https://pro-promptopia-nwno2f9u9-mishodzuliashvili.vercel.app/"
          github="https://github.com/mishodzuliashvili/pro-promptopia"
        />
        <Project
          description="Hello, I'm Misho. I'm a student at KIU and a software enginer. "
          title="BLog"
          image="/p3.png"
          link="https://nextjs-blog-deploy-7wumfzrsf-mishodzuliashvili.vercel.app/"
          github="https://github.com/mishodzuliashvili/nextjs-blog"
        />
        <Project
          description="A New Way To Meet People At KIU."
          title="KIU finder"
          image="/p4.png"
          link="https://kiufinder.web.app/"
          github="https://github.com/mishodzuliashvili/kiuni"
        />
        <Project
          description="Quiz app for ertertaining and learning. "
          title="Blitzz"
          image="/p5.png"
          link="https://blitzz-947aa.web.app/"
          github=""
        />
        <Project
          description="Coding beautiful fractals."
          title="team apollo"
          image="/p6.png"
          link="https://team-apollo.web.app/"
          github="https://github.com/mishodzuliashvili/teamapollo"
        />
        <Project
          description="Prepare for exams."
          title="HRM"
          image="/p7.png"
          link="https://hrmm.vercel.app/"
          github="https://github.com/mishodzuliashvili/hrmm"
        />
        <Project
          description="Landing page challenge."
          title="Commune"
          image="/p8.png"
          link="https://648711c40a8dcb2b419baa04--glittering-biscochitos-73cf1c.netlify.app/"
          github="https://github.com/mishodzuliashvili/commune-waitlist-page"
        />
        <Project
          description="Website in flask."
          title="Popular github repos"
          image="/p9.png"
          link="https://github.com/mishodzuliashvili/flask-web-fluffy-octo-app"
          github="https://github.com/mishodzuliashvili/flask-web-fluffy-octo-app"
        />
        <Project
          description="Game in javascript."
          title="Fox Game"
          image="/p10.png"
          link="https://animated-crumble-161074.netlify.app/"
          github="https://github.com/mishodzuliashvili/game-fox-javascript-html-css"
        />
      </div>
    </div>
  );
};

export default Projects;
