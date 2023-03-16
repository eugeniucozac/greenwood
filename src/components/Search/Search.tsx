import { Button } from "../Button";

type SearchType = {
  firstValue: string;
  secondValue: string;
  setFirstValue: (val: string) => void;
  setSecondValue: (val: string) => void;
  onSubmit: () => void;
};

export const Search = ({
  firstValue,
  secondValue,
  setFirstValue,
  setSecondValue,
  onSubmit,
}: SearchType) => {
  return (
    <section className="mt-10 flex justify-center w-full">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch px-10 xl:px-0">
        <div className="relative xl:w-2/5 w-full">
          <input
            type="search"
            className="relative w-full bg-white xl:border-r-2 border-b-2 xl:border-b-0 m-0 px-10 py-6 -mr-px block flex-auto border-solid border-neutral-300 bg-clip-padding text-xl font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="Hip"
            aria-label="Search"
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
          />
          <label className="absolute text-sm text-darkBlue duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-10 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Enter treatment name*
          </label>
        </div>
        <div className="relative xl:w-2/5 w-full">
          <input
            type="search"
            className="relative w-full bg-white m-0 px-10 py-6 -mr-px block flex-auto border-solid border-neutral-300 bg-clip-padding text-xl font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            placeholder="Stansted CM24 1RW, UK"
            aria-label="Search"
            value={secondValue}
            onChange={(e) => setSecondValue(e.target.value)}
          />
          <label className="absolute text-sm text-darkBlue duration-300 transform -translate-y-4 scale-75 top-5 z-10 origin-[0] left-10 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
            Enter postcode or city*
          </label>
        </div>
        <Button onClick={onSubmit} className="xl:w-1/5 w-full py-6">
          Find Specialist
        </Button>
      </div>
    </section>
  );
};
