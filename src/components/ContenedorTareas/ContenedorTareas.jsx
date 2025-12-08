import { useState } from "react";
import AgregarTareas from "../AgregarTareas/AgregarTareas";
import MostrarTareas from "../MostrarTareas/MostrarTareas";
import "./ContenedorTareas.css";
import BuscadorTareas from "../BuscadorTareas/BuscadorTareas";

export default function ContenedorTareas({ modoOscuro, setModoOscuro}) {
  const [tareas, setTareas] = useState(
    JSON.parse(localStorage.getItem("tareas")) || []
  );
  const [buscador, setBuscador] = useState("");

  return (
    <div className={`contenedor ${modoOscuro ? "oscuro-borde" : ""}`}>
        <BuscadorTareas buscador={buscador}
        setBuscador={setBuscador} modoOscuro={modoOscuro} setModoOscuro={setModoOscuro}
        />
      <AgregarTareas
        setTareas={setTareas}
        modoOscuro={modoOscuro}
      />
      <MostrarTareas
        tareas={tareas}
        setTareas={setTareas}
        buscador={buscador}
      />
    </div>
  );
}
