import React, { Component, useEffect, useState } from "react";
import Formulario from "./components/FormularioTurnos";
import { Turno } from "./interfaces";
import { getTurnosDisponible } from "./service";

const index = () => {
  const [turnosDisponibles, setTurnosDisponibles] = useState<string[]>([]);
  useEffect(() => {
    async function get() {
      try {
        const res = await getTurnosDisponible();
        setTurnosDisponibles(res.turnos);   
      } catch (error) {
        console.log("error");
      }
     
    }
    get();
  },[]
  );

  return <Formulario turnos={turnosDisponibles} />;
};

export default index;
