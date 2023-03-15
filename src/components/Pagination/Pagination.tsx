export const Pagination = ({ className, total, current, onChange }: any) => {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <ul className={`${className} flex`}>
      {pages.map((page) => {
        return (
          <li key={page} className="cursor-pointer">
            <a
              onClick={() => onChange(page)}
              className={`text-blue w-11 h-11 flex pointer text-center items-center justify-center border-y border-lightGrey border-r hover:bg-blue transition ease-in-out delay-100 hover:text-white ${
                page === 1 ? "border-l" : ""
              } ${current === page ? "bg-blue text-white" : ""}`}
            >
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
