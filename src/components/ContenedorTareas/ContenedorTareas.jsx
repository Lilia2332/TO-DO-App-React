import { useState } from "react";
import AgregarTareas from "../AgregarTareas/AgregarTareas";
import MostrarTareas from "../MostrarTareas/MostrarTareas";
import "./ContenedorTareas.css";
import BuscarTareas from "../BuscarTareas/BuscarTareas";

export default function ContenedorTareas() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) || []
 );
 const [buscador, setBuscador] = useState("");

  return (
    <div>
      <h1>TO-DO</h1>
      <AgregarTareas tareas={tareas} setTareas={setTareas} />
      <BuscarTareas buscador={buscador} setBuscador={setBuscador}/>
      <MostrarTareas tareas={tareas} setTareas={setTareas} buscador={buscador} />
    </div>
  );
}