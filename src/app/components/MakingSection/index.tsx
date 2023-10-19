import Image from "next/image";
import { ReactElement } from "react";

const MakingSection = (): ReactElement => {
  return (
    <div className="flex flex-col w-full h-fit">
      <div
        className="flex bg-left bg-no-repeat bg-origin-border bg-contain h-fit lg:h-64 justify-end items-center mb-5"
        style={{ backgroundImage: 'url("/senku_smirk.jpg")' }}
      >
        <div className="w-full bg-zinc-900 lg:bg-gradient-to-r from-zinc-900/5 to-40% to-black h-full flex justify-end items-center pt-14 px-3 lg:pt-0 lg:px-0">
          <div className="w-full lg:w-3/5 text-xl lg:text-5xl text-green-300 lg:text-green-300/60 text-left lg:text-right mr-10 select-none">
            Busy Inventing: Create Your Own!
          </div>
        </div>
      </div>

      <div
        className={`px-6 lg:px-16 flex flex-col overflow-hidden transition-[max-height] duration-200 ease-in-out origin-top max-h-fit pb-20`}
      >
        <div className="section-content flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row justify-evenly mb-10">
          <table>
            <thead>
              <tr>
                <th className="border-r border-b border-solid p-2 lg:p-5 text-green-300">
                  Ingredient
                </th>
                <th className="border-l border-b border-solid p-2 lg:p-5 text-green-300">
                  Quantity (Estimate)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-r border-b border-solid p-2 lg:p-5 text-center">
                  Lemon
                </td>
                <td className="border-l border-b border-solid p-2 lg:p-5 text-center">
                  Juice from half a lemon
                </td>
              </tr>
              <tr>
                <td className="border-r border-b p-2 lg:p-5 text-center">
                  Cilantro (Finely Chopped)
                </td>
                <td className="border-l border-b border-solid p-2 lg:p-5 text-center">
                  1-2 teaspoons
                </td>
              </tr>
              <tr>
                <td className="border-r border-b p-2 lg:p-5 text-center">
                  Caramelized Honey
                </td>
                <td className="border-l border-b border-solid p-2 lg:p-5 text-center">
                  1-2 tablespoons
                </td>
              </tr>
              <tr>
                <td className="border-r p-2 lg:p-5 text-center">
                  Carbonated Water
                </td>
                <td className="border-l border-solid p-2 lg:p-5 text-center">
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
        <div className="section-content flex flex-col lg:flex-row justify-evenly lg:gap-x-5 self-center lg:px-10">
          <ol className="flex flex-col list-decimal w-full lg:w-2/3 leading-8 gap-y-2 lg:gap-y-4 px-5 lg:px-0">
            <li>
              Start by caramelizing the honey. In a small saucepan, heat the
              honey over low to medium heat, stirring constantly until it turns
              a deep golden brown. Be careful not to burn it.
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
            className="self-center hidden lg:block"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MakingSection;
