import Image from "next/image";
import { ReactElement } from "react";

const TitleSection = (): ReactElement => {
  return (
    <div className="flex items-center w-full min-h-[32rem] h-1/2 overflow-hidden justify-center lg:justify-between relative px-20 xl:px-52">
      <div className="hidden lg:block">
        <Image
          src="/cola.png"
          alt="cola image"
          width={400}
          height={400}
          className="aspect-auto"
        />
      </div>
      <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center lg:hidden">
        <Image
          src="/cola.png"
          alt="cola image"
          width={200}
          height={200}
          className="aspect-auto"
        />
      </div>

      <div className="absolute w-full h-full top-0 left-0 bg-zinc-900/80 lg:hidden z-10" />
      <div className="flex flex-col items-center lg:items-end gap-y-5 lg:mr-20 z-30">
        <div className="uppercase text-6xl lg:text-8xl text-zinc-200/90 text-center lg:text-right">
          senku cola
        </div>
        <div className="text-xl lg:text-2xl text-green-300/80 text-center">
          A Healthier Pour, A Brighter Tomorrow
        </div>
      </div>
      <div className="absolute w-full h-full left-0 bottom-0 bg-gradient-to-t from-green-700 to-transparent to-30% z-20"></div>
    </div>
  );
};

export default TitleSection;
