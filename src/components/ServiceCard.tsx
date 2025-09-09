import React from "react";
import { IoMdCheckmark } from "react-icons/io";
interface ServiceCardProps {
  title?: string;
  resolution?: string;
  features?: string[];
  price?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  resolution,
  features,
  price,
}) => {
  return (
    <div className="border-2 border-[rgba(255,255,255,0.1)]  rounded-xl ">
      <div
        className={`bg-[linear-gradient(149deg,#1C4072_6.96%,#172B47_40.17%,#120c1f_73.39%)] min-w-[290px] h-[270px] rounded-xl p-6 w-64 text-white shadow-md hover:shadow-lg transition-shadow duration-300`}
      >
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-xl font-[700] text-[rgba(255,255,255,0.7)]  mb-2">
          {resolution}
        </p>
        <ul className="h-[55%]">
          {features?.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-[rgba(255,255,255,0.7)]"
            >
              <span className="mr-2 font-[400]">
                <IoMdCheckmark />
              </span>
              <p className="font-[400] tex-sm">{feature}</p>
            </li>
          ))}
        </ul>
        <p className="text-lg  text-[rgba(255,255,255,0.7)] font-semibold">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
