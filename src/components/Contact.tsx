"use client";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <div
      id="contact"
      className=" px-10 md:px-20 lg:px-36 py-16 flex flex-col gap-4"
    >
      <h2 className="flex-1 font-bungee text-3xl pb-12 lg:p-0 lg:text-5xl">
        Contact
      </h2>
      <p className="font-exo font-black text-sm lg:text-xl lg:mb-12">
        {`Feel free to drop me a line through email! I'm eager to hear from you, so let's make
        it happen. Plus, I've got this handy form ready to simplify things.`}
      </p>
      <form className="flex flex-col gap-3 mt-10 pb-10 w-full lg:w-6/12 mx-auto">
        <input
          placeholder="Subject"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-100 shadow-sm p-3 outline-none rounded-sm"
        />
        {/* <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 shadow-sm p-3 outline-none rounded-sm"
        /> */}
        <textarea
          placeholder="Message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="bg-gray-100 shadow-sm outline-none p-3 rounded-sm"
        ></textarea>
        <div className="flex items-center justify-between font-exo font-black text-xl ">
          <p className="">mishodzuliashvili1@gmail.com</p>
          <Link
            href={`mailto:mishodzuliashvili1@gmail.com?subject=${name}&body=${msg}`}
            className="text-sm md:text-lg p-2 md:p-4 px-12 bg-primary hover:bg-primary-hover duration-300 transition-colors text-white font-bungee rounded-xl"
          >
            Send
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Contact;
