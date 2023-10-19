import Image from "next/image";
import { ReactElement } from "react";

type StoreSectionProps = {
  openModal: () => void;
};

const StoreSection = ({ openModal }: StoreSectionProps): ReactElement => {
  return (
    <div className="flex flex-row-reverse w-full text-center mb-20 justify-center">
      <div className="w-full md:w-1/2 lg:max-w-3xl flex flex-col p-10 gap-y-14 justify-center items-center">
        <div className="text-5xl lg:text-8xl font-semibold text-green-300/60">
          Want One?
        </div>
        <div
          className=" relative w-30 bg-orange-200/90 px-10 py-3 text-2xl text-zinc-950 rounded-xl cursor-pointer active:bg-orange-200/70 select-none"
          onClick={openModal}
        >
          Order Now
          <div className="absolute top-0 left-0 w-full h-full border border-solid border-transparent hover:border-orange-200/90 rounded-xl hover:scale-125 transition duration-300 ease-in-out" />
        </div>
      </div>
      <div className="w-1/2 lg:max-w-3xl hidden lg:block">
        <Image
          src="/senku_psyched.jpg"
          alt="Senku Psyched"
          width={500}
          height={500}
          className="aspect-auto w-full"
        />
      </div>
    </div>
  );
};

export default StoreSection;
