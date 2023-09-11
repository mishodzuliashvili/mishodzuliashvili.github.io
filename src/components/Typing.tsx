"use client";
import Typewriter from "typewriter-effect";

export default function Typing() {
    return (
        <Typewriter
            options={{
                strings: ["Eat", "Sleep", "Code", "Repeat!"],
                autoStart: true,
                loop: true,
            }}
        />
    );
}
