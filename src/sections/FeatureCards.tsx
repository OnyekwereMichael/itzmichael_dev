import { abilities } from "../constants";
import TitleHeader from "./TitleHeader";

const FeatureCards = () => (
  <div className="w-full p-6">
        <TitleHeader title="" sub="💼 How I Work" />
    <div className="mx-auto grid-3-cols py-10">
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4"
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2 max-sm:text-xl ">{title}</h3>
          <p className="text-white-50 text-lg max-sm:text-[16px]">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;