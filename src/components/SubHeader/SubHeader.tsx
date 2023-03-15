import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button";

export const SubHeader = () => {
  return (
    <section className="bg-darkBlue">
      <div className="container mx-auto xl:px-0 px-6 flex justify-between">
        <div className="">
          <ul className="flex text-white text-sm h-full">
            <li>
              <a className="h-full block px-4 items-center justify-center flex cursor-pointer hover:text-darkBlue hover:bg-lighterGrey transition ease-in-out delay-100">
                Patients
              </a>
            </li>
            <li>
              <a className="h-full block px-4 items-center justify-center flex cursor-pointer hover:text-darkBlue hover:bg-lighterGrey transition ease-in-out delay-100">
                Health Professionals
              </a>
            </li>
            <li>
              <a className="h-full block px-4 items-center justify-center flex cursor-pointer hover:text-darkBlue hover:bg-lighterGrey transition ease-in-out delay-100">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <a className="text-white text-xs w-48 items-center justify-center flex mr-4">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            0808 258 2079
          </a>
          <Button className="text-xs">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};
