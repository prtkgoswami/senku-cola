import Image from "next/image";
import { useState } from "react";

const ProductPage = (): React.ReactElement => {
  const [shouldShowMaking, setShowMaking] = useState(false);

  const showMakingClick = () => {
    setShowMaking(!shouldShowMaking);
  };

  return (
    <>
      <div className="flex items-center w-full h-1/2 overflow-hidden justify-between bg-gradient-to-t from-green-700 to-transparent to-30%">
        <div>
          <Image
            src="/cola.png"
            alt="cola image"
            width={400}
            height={400}
            className="rotate-[30deg] -ml-5 aspect-auto"
          />
        </div>
        <div className="flex flex-col items-end gap-y-5 mr-20">
          <div className="uppercase text-8xl text-zinc-200/90 text-right">
            senku cola
          </div>
          <div className=" text-2xl text-green-300/80">
            A Healthier Pour, A Brighter Tomorrow
          </div>
        </div>
      </div>

      <div className="flex gap-y-10 px-16 w-full bg-gradient-to-b from-green-700 from-20% start-20 to-green-100 text-zinc-900 py-16">
        <div className="flex flex-col">
          <div className="section-content text-lg px-8">
            <div className="heading text-3xl font-semibold mb-4 text-zinc-900/80">
              Introducing Senku Cola
            </div>
            <div className="content mb-10">
              A Taste of Science in the Stone World Discover a Unique Cola
              Experience At the intersection of scientific innovation and the
              post-apocalyptic Stone World lies Senku Cola, a remarkable
              beverage that captures the essence of the Dr. Stone anime.
            </div>
            <div className="heading text-3xl font-semibold mb-4 text-zinc-900/80">
              The Classic Refreshment
            </div>
            <div className="content mb-10">
              Cola, a timeless and beloved refreshment, has been a go-to choice
              for quenching thirst and tantalizing taste buds across the globe
              for generations. Its effervescent bubbles and sweet, tangy flavor
              are universally adored, making it a perfect companion for any
              occasion.
            </div>
            <div className="heading text-3xl font-semibold mb-4 text-zinc-900/80">
              The Stone World&apos;s Challenge
            </div>
            <div className="content mb-10">
              In the world of Dr. Stone, humanity faces an unimaginable crisis
              as a mysterious petrification event turns every living thing into
              stone statues. Thousands of years later, as the statues start to
              crumble, a young scientific genius named Senku Ishigami emerges.
            </div>
            <div className="heading text-3xl font-semibold mb-4 text-zinc-900/80">
              Senku&apos;s Vision
            </div>
            <div className="content mb-10">
              Senku is not your typical protagonist; he&apos;s a brilliant
              scientist with a deep passion for innovation. He&apos;s determined
              to rebuild civilization in the Stone World using his scientific
              knowledge and creativity. His unwavering goal is to restore
              humanity to its former glory by advancing technology, medicine,
              and science.
            </div>
            <div className="heading text-3xl font-semibold mb-4 text-zinc-900/80">
              A Beverage Born from Innovation
            </div>
            <div className="content mb-10">
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

        <div className="w-2/3">
          <Image
            src="/senku_profile.jpg"
            height={400}
            width={500}
            alt="Senku"
            className="aspect-auto w-full"
          />
        </div>
      </div>

      <div className="flex flex-col w-full h-fit mb-20">
        <div
          className="flex bg-left bg-no-repeat bg-contain h-64 justify-end items-center mb-10"
          style={{ backgroundImage: 'url("/senku_smirk.jpg")' }}
        >
          <div className=" w-full bg-gradient-to-r from-zinc-900/5 to-40% to-black h-full flex justify-end items-center">
            <div
              className="w-3/5 text-6xl text-green-300/60 cursor-pointer text-right mr-10"
              onClick={showMakingClick}
            >
              Interested to know how to make it?
            </div>
          </div>
        </div>

        <div
          className={`px-16 flex flex-col overflow-hidden transition-[height] duration-200 ease-in-out origin-top ${
            shouldShowMaking ? " h-fit" : " h-0"
          }`}
        >
          <div className="section-content flex flex-row justify-evenly mb-10">
            <table>
              <thead>
                <tr>
                  <th className="border-r border-b border-solid p-5 text-green-300">
                    Ingredient
                  </th>
                  <th className="border-l border-b border-solid p-5 text-green-300">
                    Quantity (Estimate)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r border-b border-solid p-5 text-center">
                    Lemon
                  </td>
                  <td className="border-l border-b border-solid p-5 text-center">
                    Juice from half a lemon
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-b p-5 text-center">
                    Cilantro (Finely Chopped)
                  </td>
                  <td className="border-l border-b border-solid p-5 text-center">
                    1-2 teaspoons
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-b p-5 text-center">
                    Caramelized Honey
                  </td>
                  <td className="border-l border-b border-solid p-5 text-center">
                    1-2 tablespoons
                  </td>
                </tr>
                <tr>
                  <td className="border-r p-5 text-center">Carbonated Water</td>
                  <td className="border-l border-solid p-5 text-center">
                    355-473 ml
                  </td>
                </tr>
              </tbody>
            </table>
            <Image
              src="/mecha_senku_cola_ingredients.jpg"
              alt="Mecha Senku Cola Ingredients"
              width={500}
              height={500}
              className="aspect-auto"
            />
          </div>
          <div className="section-content flex flex-row justify-evenly gap-x-5 self-center px-10">
            <ol className="flex flex-col list-decimal w-2/3 leading-8 gap-y-4 ">
              <li>
                Start by caramelizing the honey. In a small saucepan, heat the
                honey over low to medium heat, stirring constantly until it
                turns a deep golden brown. Be careful not to burn it.
              </li>
              <li>Let the caramelized honey cool down to room temperature.</li>
              <li>
                In a glass, combine the chopped cilantro, lemon juice, and
                caramelized honey. Stir them together to create a syrup-like
                mixture.
              </li>
              <li>
                Add the carbonated water and mix well to combine all the
                ingredients.
              </li>
              <li>
                You can adjust the flavors by adding more cilantro, lemon juice,
                or caramelized honey to achieve the desired taste. You can also
                add lemon zest to give it a cirtus kick
              </li>
              <li>
                Serve your homemade Senku Cola over ice and enjoy the unique
                flavor inspired by the Dr. Stone anime.
              </li>
            </ol>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FdMdu7CTxhc?si=-PPUjRdmu_wMgS0E"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="self-center"
            ></iframe>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col px-16 w-full bg-contain bg-no-repeat bg-right mb-20"
        style={{ backgroundImage: 'url("/senku_cola_bg.jpg")' }}
      >
        {/* <div className=" uppercase text-8xl text-zinc-200/25">Testimonials</div> */}
        <div className="flex justify-start items-center">
          <div className="flex flex-col rounded-md bg-orange-200/80 p-10 w-2/3 gap-y-8">
            <div className="review text-zinc-950">
              Senku&apos;s Cola is nothing short of a marvel. Its unconventional
              blend of cilantro, lemon, and caramelized honey creates a unique
              and tantalizing taste that&apos;s emblematic of Senku&apos;s
              ingenuity. It&apos;s more than a beverage; it&apos;s a testament
              to human resilience in the face of adversity. With every sip,
              you&apos;re partaking in Dr. Stone&apos;s journey of science and
              survival. Senku&apos;s Cola: a sip of inspiration and a taste of
              progress. Cheers to a healthier, brighter future!
            </div>
            <div className="review-footer flex justify-end">
              <div className="reviewee flex gap-x-2 items-center">
                <div
                  className="w-20 aspect-square rounded-full bg-center bg-contain"
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

      <div className="flex flex-row w-full text-center mb-20">
        <div className="w-1/2 flex flex-col p-10 gap-y-5 justify-center items-center">
          <div className="text-8xl font-semibold text-green-300/60">
            Want One?
          </div>
          <div className="text-2xl font-semibold text-zinc-200/90">
            You&apos;d better be prepared to Grid for the Kingdom of Science!
          </div>
          <div
            className="w-28 aspect-square bg-center bg-cover rounded-full"
            style={{ backgroundImage: 'url("/senku_maniac.gif")' }}
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/senku_psyched.jpg"
            alt="Senku Psyched"
            width={500}
            height={500}
            className="aspect-auto w-full"
          />
        </div>
      </div>

      <footer className="flex justify-between items-center w-full px-16 py-5">
        <div className="text-md">
          This is a product page inspired from the anime{" "}
          <a
            href="https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone"
            target="_blank"
            className="text-green-300"
          >
            Dr. Stone
          </a>
        </div>
        <div className="text-sm">
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
    </>
  );
};

export default ProductPage;
