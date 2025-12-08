import { useState } from "react";
import "./AgregarTareas.css";

export default function AgregarTareas({ setTareas, modoOscuro }) {
  const tarea = { tarea: "", color: "#f1b5ddff" };
  const tareasGuardadas = "nuevasTareas";
  const [nuevaTarea, setNuevaTarea] = useState(
    JSON.parse(localStorage.getItem(tareasGuardadas)) || tarea
  );

  const manejarCambios = (e) => {
    setNuevaTarea({
      ...nuevaTarea,
      [e.target.name]: e.target.value,
    });
  };

  const enviarTarea = (e) => {
    e.preventDefault();
    const textoLimpio = nuevaTarea.tarea.trim();

    if (textoLimpio === "") {
      alert("La tarea no puede estar vacía");
      return;
    }

    if (textoLimpio.length < 4) {
      alert("La tarea debe tener al menos 4 caracteres");
      return;
    }

    const listaActual = JSON.parse(localStorage.getItem("tareas")) || [];

    const duplicada = listaActual.some(
      (t) => t.texto.toLowerCase() === textoLimpio.toLowerCase()
    );

    if (duplicada) {
      alert("Esa tarea ya existe");
      return;
    }

    const tareaIncompleta = {
      id: crypto.randomUUID(),
      texto: nuevaTarea.tarea,
      color: nuevaTarea.color,
      completada: false,
    };
    
    const nuevaLista = [...listaActual, tareaIncompleta];

    localStorage.setItem("tareas", JSON.stringify(nuevaLista));

    setTareas(nuevaLista);

    localStorage.setItem(tareasGuardadas, JSON.stringify(nuevaTarea));

    setNuevaTarea(tarea);
  };

  return (
    <div>
      <form
        className={`formulario ${modoOscuro ? "formulario-oscuro" : ""}`}
        onSubmit={enviarTarea}
      >
        <label className="subtitulo">
          Agregar una nueva tarea: <br />
          <input
            id="inputTarea"
            type="text"
            name="tarea"
            placeholder="Nueva tarea..."
            minLength="4"
            value={nuevaTarea.tarea}
            onChange={manejarCambios}
          />
        </label>
        <label className="subtitulo">
          Color:
          <br />
          <input
            id="inputColor"
            name="color"
            type="color"
            value={nuevaTarea.color}
            onChange={manejarCambios}
          />
        </label>
        <button type="submit" className="btn-agregar">
          Agregar
        </button>
      </form>
    </div>
  );
}
