import * as React from "react";
import data from "../../assets/mockdata";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  horario: string,
  apellido: string,
  nombre: string,
  dni: string,
  email: string,
  telefono: string
) {
  return {
    horario,
    nombreCompleto: nombre + " " + apellido,

    informacion: [
      {
        Nombre: nombre,
        DNI: dni,
        Email: email,
        Telefono: telefono,
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">{row.horario}</TableCell>
        <TableCell align="center">{row.nombreCompleto}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Información
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Nombre Completo</TableCell>
                    <TableCell align="center">Numero De Documento</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="center">Numero De Teléfono</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.informacion.map((informacionRow) => (
                    <TableRow key={informacionRow.Nombre}>
                      <TableCell align="center">
                        {informacionRow.Nombre}
                      </TableCell>
                      <TableCell align="center">{informacionRow.DNI}</TableCell>
                      <TableCell align="center">
                        <a href={"mailto:+" + informacionRow.Email}>
                          {informacionRow.Email}
                        </a>
                      </TableCell>
                      <TableCell align="center">
                        <a href={"tel:+" + informacionRow.Telefono}>
                          {informacionRow.Telefono}
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
/*
const rows = [
  createData("1 a.m.", "Nicole", " Silva"),
  createData("2 a.m.", "Nazareno", "Fiorentino"),
  createData("3 a.m.", "Gino", "Sarubbi"),
  createData("4 a.m.", "Jeremias", "Barboza"),
  createData("5 a.m.", "Matias", "Locaso"),
];
*/
const rows = data.map((d) => {
  return createData(
    d.horario,
    d.apellido,
    d.nombre,
    d.dni,
    d.email,
    d.telefono
  );
});
export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Horario</TableCell>
            <TableCell align="center">Nombre Completo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.nombreCompleto} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
