export type TurnosProps = {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    dni: string ;
    fecha: string;
  };
  export type Turno ={
    id: number;
    fecha: string;
    donador: {
      url: string;
    }
    url: string;

  }
  
  