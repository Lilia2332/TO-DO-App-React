import { useState } from "react";
import "./AgregarTareas.css";

export default function AgregarTareas() {
  const tarea = { tarea: "", color: "" };
  const tareasGuardadas = "nuevasTareas";
  const [nuevaTarea, setNuevaTarea] = useState(JSON.parse(localStorage.getItem(tareasGuardadas) || tarea));

  const manejarCambios = (e) => {
    setNuevaTarea({
      ...nuevaTarea,
      [e.target.name]: e.target.value,
    });
  };

  const enviarTarea = (e) => {
    e.preventDefault();
    console.log(nuevaTarea);

    const listaActual = JSON.parse(localStorage.getItem("tareas")) || [];

    localStorage.setItem("tareas", JSON.stringify(nuevaLista));

    localStorage.setItem(tareasGuardadas, JSON.stringify(nuevaTarea));

    setNuevaTarea(tarea);
  };

  return (
    <div>
      <form className="formulario" onSubmit={enviarTarea}>
        <label className="subtitulo">
          Tareas pendientes: <br />
          <input
            id="inputTarea"
            type="text"
            name="tarea"
            placeholder="Nueva tarea"
            minlength="4"
            value={nuevaTarea.tarea}
            onChange={manejarCambios}
          />
        </label>
        <label className="subtitulo"
            >Color:<br /><input id="inputColor" 
            name="color"
            type="color"
            value={nuevaTarea.color}
            onChange={manejarCambios}
          /></label>
          <button type="submit"
          className="btn-agregar">Agregar</button>
      </form>
    </div>
  );
}
