import { MainCanvas } from "./canvas/MainCanvas";

const Hero = () => {
  return (
    <div className="z-50 h-screen flex flex-col">
      <div className="h-4/5">
        <MainCanvas />
      </div>
      <div className="p-10">
        <h1 className="text-back font-bungee text-4xl text-center">
          {/* {"Hi, I'm Misho"} */}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
