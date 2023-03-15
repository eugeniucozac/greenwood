import bgImage from "../../images/hero.png";

export const Hero = () => {
  return (
    <section
      className="text-center bg-black/30"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <section className="container mx-auto py-14">
        <h2 className="text-5xl text-white">Search for a Specialist</h2>
      </section>
    </section>
  );
};
