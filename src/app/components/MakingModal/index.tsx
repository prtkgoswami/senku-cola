import { ReactElement } from "react";
import MakingSection from "../MakingSection";

type MakingModalProps = {
  closeModal: () => void;
};

const MakingModal = ({ closeModal }: MakingModalProps): ReactElement => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-green-950/60 flex justify-center items-center lg:p-10 z-50">
      <div className="w-full h-full bg-zinc-900 overflow-auto relative">
        <MakingSection />
      </div>
      <div
        className="absolute top-3 right-3 lg:top-6 lg:right-6 w-10 h-10 bg-green-700 rounded-full cursor-pointer flex justify-center items-center select-none active:bg-green-800"
        onClick={closeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 384 512"
          className="fill-green-100"
        >
          {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
    </div>
  );
};

export default MakingModal;
