import axios from "axios";
import { api } from "./api";
import { TurnosProps } from "../interfaces";

export const postTurno = async (data: TurnosProps) => {
  const res = await axios.post(api.turno, { ...data });
  return {
    ...data,
    id: res.data.id,
    url: res.data.url,
  };
};