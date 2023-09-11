import Typing from "@/components/Typing";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Home() {
    return (
        <main className="container max-w-[512px] flex flex-col gap-5 mx-auto px-5 py-10 sm:py-20 text-white">
            <header className="flex gap-4 items-center">
                <Image
                    src="/images/profile.jpg"
                    alt="Picture of the author"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div className="flex flex-col gap-1">
                    <h1 className="text-base font-bold">Misho Dzuliashvili</h1>
                    <span className="text-sm text-gray-400">@cptn.nemo</span>
                </div>
            </header>
            <section>
                <div className="font-bungee text-lg flex gap-1 flex-wrap">
                    <span>👋 HI, {"I'M"} MISHO. I </span> <Typing />
                </div>
            </section>
            <section>
                <p className="text-lg font-exo font-medium">
                    {"I'm"} a proactive developer, skilled in web development
                    (TypeScript) and GIT, I work with databases and NextJS. 🚀
                    Incrementing my GitHub commit streak one day at a time
                </p>
            </section>
            <section className="flex gap-3">
                <Link
                    href="https://github.com/mishodzuliashvili"
                    target="_blank"
                    className="text-xl hover:text-gray-300 bg-[#04040464] p-3 rounded-lg"
                >
                    <BsGithub />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/misho-dzuliashvili"
                    target="_blank"
                    className="text-xl hover:text-gray-300 bg-[#04040464] p-3 rounded-lg"
                >
                    <BsLinkedin />
                </Link>
                <Link
                    href="mailto:mishodzuliashvili1@gmail.com"
                    target="_blank"
                    className="text-xl hover:text-gray-300 bg-[#04040464] p-3 rounded-lg"
                >
                    <MdEmail />
                </Link>
            </section>
        </main>
    );
}
