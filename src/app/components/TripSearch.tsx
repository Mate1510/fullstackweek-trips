import DatePickerInput from "@/components/DatePickerInput";
import Input from "@/components/Input";
import React from "react";
import CurrencyInput from "@/components/CurrencyInput";
import Button from "@/components/Button";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5 bg-world-map-bg bg-cover bg-no-repeat">
      <h1 className="text-center font-semibold text-2xl text-terciary-purple">
        Encontre sua próxima
        <span className="text-primary-purple"> viagem!</span>
      </h1>

      <div className="mt-5 flex flex-col gap-4">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePickerInput
            onChange={() => {}}
            placeholderText="Primeira data"
            className="w-full"
          />
          <CurrencyInput placeholder="Orçamento" />
        </div>

        <Button>Buscar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
