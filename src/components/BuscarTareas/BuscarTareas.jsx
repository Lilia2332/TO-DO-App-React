import { useState } from "react";
import "./BuscarTareas.css";

export default function BuscarTareas({ buscador, setBuscador }) {

  return (
    <div>
      <label>Buscador: </label>
      <input
      id="buscar"
      type="text"
      placeholder="Buscar Tareas..."
      value={buscador}
      onChange={(e) => setBuscador(e.target.value)}
      className="subtitulo"
      ></input>
    </div>
  )
}