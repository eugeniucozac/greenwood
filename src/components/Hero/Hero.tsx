import bgImage from "../../images/hero.png";
import { Search } from "../Search";

type HeroType = {
  firstValue: string;
  secondValue: string;
  setFirstValue: (val: string) => void;
  setSecondValue: (val: string) => void;
  onSearch: () => void;
};

export const Hero = ({
  firstValue,
  secondValue,
  setFirstValue,
  setSecondValue,
  onSearch,
}: HeroType) => {
  return (
    <section
      className="text-center bg-black/30 bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <section className="container mx-auto py-14">
        <h2 className="text-5xl text-white px-4 xl:px-0">
          Search for a Specialist
        </h2>
        <Search
          firstValue={firstValue}
          secondValue={secondValue}
          setFirstValue={setFirstValue}
          setSecondValue={setSecondValue}
          onSubmit={onSearch}
        />
      </section>
    </section>
  );
};
