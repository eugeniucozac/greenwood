import { useState } from "react";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faCircleH,
  faPhone,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export const Specialist = ({ data }: any) => {
  const [more, setMore] = useState(true);
  const maxLength = 300;
  const excerpt = data.ProfessionalBackground.slice(0, maxLength);

  const handleToggle = () => {
    setMore(!more);
  };

  return (
    <section className="lg:pt-10 pt-4 pb-8 border-b border-lightGrey flex flex-col lg:flex-row justify-between">
      <div className="lg:w-3/4 mb-2 w-full lg:mb-0">
        <section className="flex mb-4 flex-col lg:flex-row">
          <div className="w-20 mr-4 mb-2 lg:mb-0">
            <img className="w-full d-block mt-2" src={data.ProfileImage} />
          </div>
          <div>
            <h4 className="text-[1.55rem] text-darkBlue">
              Mr Paul Allen - {data.Specialty}
            </h4>
            <p className="text-darkBlue text-[0.95rem] mb-2 lg:mb-1">
              <FontAwesomeIcon icon={faCircleH} className="text-blue" /> Based
              at: {data.Hospital} <i className="text-blue">-</i>{" "}
              {Math.floor(Math.random() * 100)} Miles
            </p>
            <div className="flex text-blue flex-col lg:flex-row">
              <a className="mr-8 mb-2 lg:mb-0">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />{" "}
                {data.PhoneNo}
              </a>
              <a className="mr-8 mb-2 lg:mb-0">
                <FontAwesomeIcon icon={faUpRightFromSquare} className="mr-2" />{" "}
                Go to hospital website
              </a>
              <a>
                <FontAwesomeIcon icon={faUpRightFromSquare} className="mr-2" />{" "}
                Get Directions
              </a>
            </div>
          </div>
        </section>
        <p className="text-grey mb-4">
          {more ? excerpt : data.ProfessionalBackground}
        </p>
        {data.ProfessionalBackground.length > maxLength && (
          <span onClick={handleToggle} className="text-blue cursor-pointer">
            View {more ? "more" : "less"}
            <FontAwesomeIcon
              icon={more ? faChevronDown : faChevronUp}
              className="ml-3 text-xs"
            />
          </span>
        )}
      </div>
      <div className="w-48">
        <Button type="outline" className="mb-4 text-xs">
          view full profile
        </Button>
        <Button className="text-xs">book an appointment</Button>
      </div>
    </section>
  );
};
