import { useState } from "react";
import AgregarTareas from "../AgregarTareas/AgregarTareas";
import MostrarTareas from "../MostrarTareas/MostrarTareas";
import "./ContenedorTareas.css";

export default function ContenedorTareas() {
  const [tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem("tareas")) || []
  );
  const [buscador, setBuscador] = useState("");

  return (
    <div className="contenedor">
      <h1 className="titulo">TO-DO</h1>
      <AgregarTareas
        tareas={tareas}
        setTareas={setTareas}
        buscador={buscador}
        setBuscador={setBuscador}
      />
      <MostrarTareas
        tareas={tareas}
        setTareas={setTareas}
        buscador={buscador}
      />
    </div>
  );
}
