import axios from "axios";
import { api } from "./api";
import { TurnosProps } from "../interfaces";


export const postTurno = async (data: TurnosProps) => {
  const res = await axios.post(api.postTurno, { ...data });
  return {
    ...data,
    id: res.data.id,
    url: res.data.url,
    status: res.status === 201 ? "okey": "error"
  };
};
export const getTurnosDisponible = async() =>{
  const res = await axios.get(api.getTurnosDisponible);
  
  return{
    turnos: res.data as string[],
    status: res.status === 200 ? "okey": "error" 
  };
}