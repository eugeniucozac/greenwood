import m1 from "../../images/m1.png";
import m2 from "../../images/m2.png";
import m3 from "../../images/m3.png";

export const More = () => {
  const more = [
    {
      name: "Orthopaedics",
      src: m1,
    },
    {
      name: "Oncology",
      src: m2,
    },
    {
      name: "General Surgery",
      src: m3,
    },
  ];

  return (
    <section className="lg:mb-20 mb-6">
      <h4 className="text-[1.55rem] text-darkBlue mb-8">
        More from Ramsay Health
      </h4>
      <section className="flex justify-between flex-wrap -m-3">
        {more.map((item, iter) => {
          return (
            <div
              key={iter}
              className="relative cursor-pointer group lg:w-1/3 w-full px-3 mb-6"
            >
              <h5 className="text-darkBlue text-2xl absolute left-6 top-4">
                {item.name}
              </h5>
              <img className="w-full" src={item.src} />
              <div className="h-full w-[calc(100%_-_1.5rem)] absolute bg-black/30 top-0 left-0 hidden group-hover:block mx-3"></div>
            </div>
          );
        })}
      </section>
    </section>
  );
};
