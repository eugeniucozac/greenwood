import { useEffect, useState } from "react";
import { Specialist } from "../Specialist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Pagination } from "../Pagination";

export const Results = ({}) => {
  const perPage = 5;
  const [specialists, setSpecialists] = useState([]);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const specs = await axios.get("/api/consultantlisting");
      setSpecialists(specs.data);
      setData(specs.data.slice(0, perPage));
    })();
  }, []);

  const handleChangePage = (val: any) => {
    setPage(val);
    const from = val === 1 ? 0 : (val - 1) * perPage;
    const to = perPage * val;
    setData(specialists.slice(from, to));
  };

  const totalItems = specialists.length;
  const totalPages = Math.ceil(totalItems / perPage);

  return (
    <>
      <section className="lg:py-6 py-2 border-b border-lightGrey">
        <h3 className="text-[2.6rem] text-darkBlue mb-1">Search Results</h3>
        <h4 className="text-grey text-[1.3rem] mb-4 flex flex-col lg:flex-row">
          Displaying results for: hip, Near: Stansted CM24 1RW, UK{" "}
          <span className="lg:ml-4 ml-0 mt-2 lg:mt-0 text-darkBlue flex w-full text-base cursor-pointer items-center w-36">
            <FontAwesomeIcon icon={faXmark} className="mr-2" /> Clear Search
          </span>
        </h4>
      </section>
      {data.map((specialist, iter) => (
        <Specialist key={iter} data={specialist} />
      ))}
      <p className="text-black my-5 text-xl">
        Showing <a className="text-blue">{perPage}</a> of{" "}
        <a className="text-blue">{totalItems}</a> results
      </p>
      <Pagination
        total={totalPages}
        current={page}
        closestPages={1}
        onChange={handleChangePage}
        className="mb-10 mt-6"
      />
    </>
  );
};
