import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import styles from "./FormularioTurnos.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "@mui/material";
import { postTurno } from "../service";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function RedBar() {
  return (
    <Box
      sx={{
        height: 20,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(255, 0, 0, 0.1)"
            : "rgb(255 132 132 / 25%)",
      }}
    />
  );
}
const turnos = [
  "23/05/2023 a las 15:30hs",
  "23/05/2023 a las 12:45hs",
  "23/05/2023 a las 18:30hs",
];
export default function LayoutTextFields() {
  const [indexTurnoSeleccionado, setIndexTurnoSeleccionado ]=
    useState(1);
  
const [datosTurno, setDatosTurno]=
  useState({
    nombre:" ",
    apellido:" ",
    dni:" ",
    email: " ",
    telefono: " ",
    fecha: " ",

  });

  
  const handleSubmit = async (event: SubmitEvent <HTMLFormElement>) => {
    console.log('fue enviado');
    try {
  const res = postTurno(datosTurno);
      console.log(res);
    } catch (error) {
      console.log(error);
    }


  }
  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setDatosTurno({
      ...datosTurno,
      [ e.target.name]: e.target.value,
    });
  };
  
  const createHandleChangeTurno = (indexTurno: number) => {
    return () => {
      setIndexTurnoSeleccionado(indexTurno);
    };
  };


  return (
    <Box
      components = "form" 
      onSubmit = {handleSubmit}
      
      className={styles.contenedor}>

      <RedBar />
      <p> Completá con tus datos el siguiente formulario </p>

      <RedBar />

      <TextField name="nombre" onChange={handleChangeForm} label={"Nombre"} id="Nombre" required={true} type="text" />
      <TextField name="apellido" onChange={handleChangeForm} label={"Apellido"} id="Apellido" margin="normal" required={true} type="text" />
      <TextField name="dni" onChange={handleChangeForm} required={true} type="text"
        label={"Documento De Identidad"}
        id="DocumentoDeIdentidad"
        margin="normal"
      />
      <TextField name="email" onChange={handleChangeForm} required={true} type="Email"
        label={"Correo Electronico"}
        id="CorreoElectronico"
        margin="normal"
      />
      <TextField name="telefono" onChange={handleChangeForm} required={true} type="number"
        label={"Numero De Telefono"}
        id="NumeroDeTelefono"
        margin="normal"
      />
      <RedBar />

      <p> Elegí unos de los siguientes turnos </p>

      <div>
        <FormGroup className={styles.contenedorCheck}>
          {turnos.map((turno, index) => (
            <FormControlLabel
              checked={
                index === indexTurnoSeleccionado
              }
              onChange={createHandleChangeTurno(index)}
              key={index}
              control={<Checkbox defaultChecked />}
              label={turno}
            />
          ))}
          <div>
            <br />
            <Button type= "submit" className={styles.boton}>
              Enviar
            </Button>
          </div>
          <br />
        </FormGroup>
      </div>
    </Box>
  );
}
