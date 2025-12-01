import { useState } from "react";
import AgregarTareas from "../AgregarTareas/AgregarTareas";
import MostrarTareas from "../MostrarTareas/MostrarTareas";

export default function ContenedorTareas() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) || []
 );
  return (
    <div>
      <AgregarTareas tareas={tareas} setTareas={setTareas} />
      <MostrarTareas tareas={tareas} setTareas={setTareas} />
    </div>
  );
}