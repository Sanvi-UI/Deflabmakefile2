import HomeFrame from "../../imports/Home-1-1/Home-72-593";
import { HomeHero } from "../components/HomeHero";

export function Home() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <HomeHero />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1101px]">
          <HomeFrame />
        </div>
      </div>
    </div>
  );
}
