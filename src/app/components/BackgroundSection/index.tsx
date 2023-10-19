import Image from "next/image";
import { ReactElement } from "react";

const BackgroundSection = (): ReactElement => {
  return (
    <div className="flex gap-y-10 p-2 lg:p-16 w-full bg-gradient-to-b from-green-700 from-20% start-20 to-green-100 text-zinc-900 justify-between">
      <div className="flex flex-col w-full lg:w-2/3">
        <div className="section-content text-lg px-8">
          <div className="flex flex-col gap-y-4">
            <div className="heading text-2xl lg:text-3xl font-semibold w-full lg:w-3/4 text-zinc-900/90 pb-2 border-b border-solid border-zinc-900/80">
              Introducing Senku Cola
            </div>
            <div className="content mb-10 text-md lg:text-lg">
              A Taste of Science in the Stone World Discover a Unique Cola
              Experience At the intersection of scientific innovation and the
              post-apocalyptic Stone World lies Senku Cola, a remarkable
              beverage that captures the essence of the Dr. Stone anime.
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-y-4">
            <div className="heading text-2xl lg:text-3xl font-semibold w-full lg:w-3/4 text-zinc-900/90 pb-2 border-b border-solid border-zinc-900/80">
              The Classic Refreshment
            </div>
            <div className="content mb-10 text-md lg:text-lg">
              Cola, a timeless and beloved refreshment, has been a go-to choice
              for quenching thirst and tantalizing taste buds across the globe
              for generations. Its effervescent bubbles and sweet, tangy flavor
              are universally adored, making it a perfect companion for any
              occasion.
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-y-4">
            <div className="heading text-2xl lg:text-3xl font-semibold w-full lg:w-3/4 text-zinc-900/90 pb-2 border-b border-solid border-zinc-900/80">
              The Stone World&apos;s Challenge
            </div>
            <div className="content mb-10 text-md lg:text-lg">
              In the world of Dr. Stone, humanity faces an unimaginable crisis
              as a mysterious petrification event turns every living thing into
              stone statues. Thousands of years later, as the statues start to
              crumble, a young scientific genius named Senku Ishigami emerges.
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-y-4">
            <div className="heading text-2xl lg:text-3xl font-semibold w-full lg:w-3/4 text-zinc-900/90 pb-2 border-b border-solid border-zinc-900/80">
              Senku&apos;s Vision
            </div>
            <div className="content mb-10 text-md lg:text-lg">
              Senku is not your typical protagonist; he&apos;s a brilliant
              scientist with a deep passion for innovation. He&apos;s determined
              to rebuild civilization in the Stone World using his scientific
              knowledge and creativity. His unwavering goal is to restore
              humanity to its former glory by advancing technology, medicine,
              and science.
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="heading text-2xl lg:text-3xl font-semibold w-full lg:w-3/4 text-zinc-900/90 pb-2 border-b border-solid border-zinc-900/80">
              A Beverage Born from Innovation
            </div>
            <div className="content mb-10 text-md lg:text-lg">
              Senku&apos;s scientific prowess and resourcefulness shine through
              in his creation of Senku Cola. Crafted from natural ingredients
              found in the Stone World, this unique cola is a testament to his
              adaptability and ingenuity. It&apos;s more than just a delicious
              beverage; it&apos;s a symbol of his commitment to reviving human
              civilization through innovation and scientific discovery.
              <br />
              <br />
              Senku Cola is a one-of-a-kind drink that not only tantalizes the
              taste buds but also embodies the spirit of Dr. Stone&apos;s
              scientific adventure. It&apos;s a testament to what&apos;s
              possible when innovation meets a challenging world, and it&apos;s
              the perfect way to enjoy a taste of the Stone World&apos;s
              scientific journey. Try Senku Cola and experience the magic of
              science in every sip.
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/3 lg:max-w-xl hidden lg:flex h-fit rounded-xl overflow-hidden justify-center">
        <Image
          src="/senku_profile.jpg"
          height={400}
          width={600}
          alt="Senku"
          className="aspect-auto w-full"
        />
      </div>
    </div>
  );
};

export default BackgroundSection;
