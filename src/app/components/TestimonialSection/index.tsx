import { ReactElement } from "react";

const TestimonialSection = (): ReactElement => {
  return (
    <div
      className="flex flex-col lg:px-16 w-full bg-cover bg-origin-border bg-no-repeat bg-right min-h-[30rem] pt-32 mb-20"
      style={{ backgroundImage: 'url("/senku_cola_bg.jpg")' }}
    >
      <div className="flex justify-start items-center w-full px-8">
        <div className="flex flex-col rounded-md bg-orange-200/90 p-4 lg:p-10 w-full lg:w-2/3 lg:max-w-4xl gap-y-5 lg:gap-y-8">
          <div className="review text-zinc-950">
            Senku&apos;s Cola is nothing short of a marvel. Its unconventional
            blend of cilantro, lemon, and caramelized honey creates a unique and
            tantalizing taste that&apos;s emblematic of Senku&apos;s ingenuity.
            It&apos;s more than a beverage; it&apos;s a testament to human
            resilience in the face of adversity. With every sip, you&apos;re
            partaking in Dr. Stone&apos;s journey of science and survival.
            Senku&apos;s Cola: a sip of inspiration and a taste of progress.
            Cheers to a healthier, brighter future!
          </div>
          <div className="review-footer flex flex-col lg:flex-row justify-between items-center gap-y-8 lg:gap-y-0">
            <div className="rating flex gap-x-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div key={`rating-${idx}`} className="text-amber-400 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    // height="1em"
                    viewBox="0 0 576 512"
                    className="fill-amber-500 h-6 lg:h-8"
                  >
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    {/* <style>svg{fill:#fbbf24}</style> */}
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="reviewee flex gap-x-2 items-center self-end">
              <div
                className="w-14 lg:w-20 aspect-square rounded-full bg-center bg-contain"
                style={{ backgroundImage: `url(/gen_asagiri_profile.jpg)` }}
              ></div>
              <div className="flex flex-col">
                <div className="reviewee-name text-zinc-950 text-lg">
                  Gen Asagiri
                </div>
                <div className="reviewee-role text-zinc-950/70 text-md">
                  Mentalist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
