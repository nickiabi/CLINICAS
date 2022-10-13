import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import styles from "./FormularioTurnos.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";

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
  const [indexTurnoSeleccionado, setIndexTurnoSeleccionado] =
    React.useState(1);
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
      setIndexTurnoSeleccionado(indexTurno);
    };
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('fue enviado');
    try {
      const res = await axios({
        method: "post",
        url: '10.9.120.99:3000/api/donador',
        data: {
          nombre: "nicole",
          apellido: "silva",
          dni: "44892194",
          email: "nicki@gmail.com",
          telefono: "1121939932",
          fecha: "12/08/22 09:00:00",
          
        },
        headers:{
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <form onSubmit={handleSubmit}
      className={styles.contenedor}>

      <RedBar />
      <p> Completá con tus datos el siguiente formulario </p>

      <RedBar />

      <TextField label={"Nombre"} id="Nombre" required={true} type="text" />
      <TextField label={"Apellido"} id="Apellido" margin="normal" required={true} type="text" />
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
