import React from "react";
import Image from "next/image";

const QuickSearch = () => {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="w-full font-medium text-primary-gray whitespace-nowrap px-4">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>

      <div className="flex items-center justify-between mt-5">
        <div className="flex flex-col items-center gap-1">
          <Image
            width={35}
            height={35}
            src="/hotel-icon.png"
            alt="Hotel tag"
          ></Image>
          <p className="text-sm text-primary-gray">Resorts</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            width={35}
            height={35}
            src="/farm-icon.png"
            alt="Farm tag"
          ></Image>
          <p className="text-sm text-primary-gray">Fazendas</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            width={35}
            height={35}
            src="/cottage-icon.png"
            alt="Cottage tag"
          ></Image>
          <p className="text-sm text-primary-gray">Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image
            width={35}
            height={35}
            src="/inn-icon.png"
            alt="Inn tag"
          ></Image>
          <p className="text-sm text-primary-gray">Pousadas</p>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
