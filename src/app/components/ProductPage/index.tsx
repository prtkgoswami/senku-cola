import Image from "next/image";
import { useState } from "react";
import BackgroundSection from "../BackgroundSection";
import MakingModal from "../MakingModal";
import StoreSection from "../StoreSection";
import TestimonialSection from "../TestimonialSection";
import TitleSection from "../TitleSection";

const ProductPage = (): React.ReactElement => {
  const [shouldShowMakingModal, setShowMakingModal] = useState(false);

  return (
    <div
      className={
        shouldShowMakingModal
          ? "h-screen w-screen overflow-hidden relative"
          : ""
      }
    >
      <TitleSection />

      <BackgroundSection />

      <TestimonialSection />

      <StoreSection openModal={() => setShowMakingModal(true)} />

      {shouldShowMakingModal && (
        <MakingModal closeModal={() => setShowMakingModal(false)} />
      )}

      <footer className="flex flex-col lg:flex-row gap-y-2 lg:justify-between items-center w-full px-16 py-5">
        <div className="text-sm lg:text-md text-center">
          This is a product page inspired from the anime{" "}
          <a
            href="https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone"
            target="_blank"
            className="text-green-300"
          >
            Dr. Stone
          </a>
        </div>
        <div className="text-xs lg:text-sm">
          <a
            href="http://prtkgoswami.github.io/"
            target="_blank"
            className="text-green-300"
          >
            Pratik Goswami
          </a>
          , 2023
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
