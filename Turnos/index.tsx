import React, { Component, useEffect, useState } from "react";
import Formulario from "./components/FormularioTurnos";
import { Turno } from "./interfaces";
import { getTurnosDisponible } from "./service";

const index = () => {
  const [turnosDisponibles, setTurnosDisponibles] = useState<Turno[]>([]);
  useEffect(() => {
    async function get() {
      const res = await getTurnosDisponible();
      setTurnosDisponibles(res.turnos);
    }
    get();
  });

  return <Formulario turnos={turnosDisponibles} />;
};

export default index;
