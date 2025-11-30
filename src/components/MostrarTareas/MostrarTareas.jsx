import { useState } from "react";
import "./MostrarTareas.css";

export default function MostrarTareas() {
  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem("tareas")) || []
);
  const tareaCompletada = (id) => {
    const pendientes = tareas.map((t) =>
    t.id === id ? { ...t, completada: !t.completada } : t
  );

  setTareas(pendientes);
  localStorage.setItem("tareas", JSON.stringify(pendientes));
  };

  return (
    <div>
      {tareas.length === 0 && <p>No hay tareas pendientes.</p>}
      <ul>
        {tareas.map((t) => (
          <li key={t.id} className="lista">
            {t.texto}
            <button onClick={() => tareaCompletada(t.id)}></button>
            <button></button>
          </li>
        ))}
      </ul>
    </div>
  )
}