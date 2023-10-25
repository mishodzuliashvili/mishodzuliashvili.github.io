import Typing from "@/components/Typing";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Home() {
    return (
        <main className="container max-w-[512px] flex flex-col gap-5 mx-auto px-5 py-10 sm:py-20 text-white">
            <h1 className="text-2xl font-bold text-center">Hello World!</h1>
        </main>
    );
}
