import { useState } from "react";
import "./MostrarTareas.css";

export default function MostrarTareas({ tareas, setTareas }) {

  const tareaCompletada = (id) => {
    const pendientes = tareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    );

    setTareas(pendientes);
    localStorage.setItem("tareas", JSON.stringify(pendientes));
  };

  const eliminarTarea = (id) => {
    const filtradas = tareas.filter((t) => t.id !== id);

    setTareas(filtradas);
    localStorage.setItem("tareas", JSON.stringify(filtradas));
  }

  return (
    <div>
      {tareas.length === 0 && <p>No hay tareas pendientes.</p>}
      <ul className="lista">
        {tareas.map((t) => (
          <li key={t.id} className={`item ${t.completada ? "completada" : ""}`}>
            {t.texto}
            <button onClick={() => tareaCompletada(t.id)}>✔</button>
            <button onClick={() => eliminarTarea(t.id)}>✖</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
