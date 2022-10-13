import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import styles from "./FormularioTurnos.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

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

export default function LayoutTextFields() {
  const [turnoSeleccionado, setTurnoSeleccionado] = React.useState(false);
  const [indexTurnoSeleccionado, setIndexTurnoSeleccionado] =
    React.useState(-1);
  const turnos = [
    "23/05/2023 a las 15:30hs",
    "23/05/2023 a las 12:45hs",
    "23/05/2023 a las 18:30hs",
  ];

  const createHandleChangeTurno = (indexTurno: number) => {
    console.log("se creo un handle con " + indexTurno);
    console.log("turno seleccionado actualmente " + indexTurnoSeleccionado);
    return () => {
      console.log("se ejecuto el handle con " + indexTurno);
      setTurnoSeleccionado(true);
      setIndexTurnoSeleccionado(turnoSeleccionado ? indexTurno : 0);
    };
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('fue enviado');


  }

  return (
    <form onSubmit={handleSubmit}
      className={styles.contenedor}>

      <RedBar />
      <p> Completá con tus datos el siguiente formulario </p>

      <RedBar />

      <TextField label={"Nombre"} id="Nombre" required={true} />
      <TextField label={"Apellido"} id="Apellido" margin="normal" required={true} />
      <TextField required={true} type="text"
        label={"Documento De Identidad"}
        id="DocumentoDeIdentidad"
        margin="normal"
      />
      <TextField required={true} type="Email"
        label={"Correo Electronico"}
        id="CorreoElectronico"
        margin="normal"
      />
      <TextField required={true} type="number"
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
                turnoSeleccionado ? index === indexTurnoSeleccionado : false
              }
              onChange={createHandleChangeTurno(index)}
              key={index}
              control={<Checkbox defaultChecked />}
              label={turno}
            />
          ))}
          <div>
            <br/>
            <button className={styles.boton}>
              Enviar
            </button>
          </div>
          <br />  
        </FormGroup>
      </div>
    </form>
  );
}
