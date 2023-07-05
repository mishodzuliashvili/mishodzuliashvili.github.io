import { TypeAnimation } from "react-type-animation";

export const Typer = () => {
  return (
    <TypeAnimation
      sequence={[
        "Coding Enthusiast", // Types 'One'
        2000, // Waits 1s
        "Problem Solver", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Curious Developer", // Types 'Three' without deleting 'Two',
        2000,
        () => {
          // console.log("Sequence completed");
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    />
  );
};
