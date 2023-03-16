import { useState } from "react";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { More } from "./components/More";
import { Results } from "./components/Results";
import { SubHeader } from "./components/SubHeader";

const App = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [firstResult, setFirstResult] = useState("");
  const [secondResult, setSecondResult] = useState("");

  const onSearch = () => {
    setFirstResult(firstValue);
    setSecondResult(secondValue);
  };

  const clearSearch = () => {
    setFirstResult("");
    setSecondResult("");
    setFirstValue("");
    setSecondValue("");
  };

  return (
    <section>
      <header>
        <SubHeader />
      </header>
      <Hero
        firstValue={firstValue}
        secondValue={secondValue}
        setFirstValue={setFirstValue}
        setSecondValue={setSecondValue}
        onSearch={onSearch}
      />
      <section className="container mx-auto xl:px-0 px-6">
        <Results
          clearSearch={clearSearch}
          specialty={firstResult}
          hospital={secondResult}
        />
        <More />
      </section>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default App;
