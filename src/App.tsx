import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { More } from "./components/More";
import { Results } from "./components/Results";
import { SubHeader } from "./components/SubHeader";

const App = () => {
  return (
    <section>
      <header>
        <SubHeader />
      </header>
      <Hero />
      <section className="container mx-auto xl:px-0 px-6">
        <Results />
        <More />
      </section>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default App;
