import { useState } from "react";
import "./MostrarTareas.css";

export default function MostrarTareas({ tareas, setTareas, buscador }) {
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
  };

  const eliminarCompletadas = () => {
    const finalizadas = tareas.filter((t) => !t.completada);

    setTareas(finalizadas);
    localStorage.setItem("tareas", JSON.stringify(finalizadas));
  };

  const termino = (buscador || "").trim().toLowerCase();
  const tareasFiltradas = termino
    ? tareas.filter((t) => (t.texto || "").toLowerCase().includes(termino))
    : tareas;
  
    const esColorOscuro = (color) => {
  if (!color) return false; 
  let hex = color.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const luminancia = 0.299 * r + 0.587 * g + 0.114 * b;

  return luminancia < 186;
};
  
  return (
    <div>
      {tareas.length === 0 && <p>No hay tareas pendientes.</p>}
      {termino && tareasFiltradas.length === 0 && (
        <p className="mensaje">
          No se encontraron tareas que coincidan con "{buscador}".
        </p>
      )}
      {tareas.some((t) => t.completada) && (
        <button
          className="btn-eliminar-completadas"
          onClick={eliminarCompletadas}
        >
          Eliminar todas las tareas completadas
        </button>
      )}
      <ul className="lista">
        {tareasFiltradas
          .slice()
          .sort((a, b) => a.completada - b.completada)
          .map((t) => (
            <li
              key={t.id}
              className="item"
              style={{ backgroundColor: t.color,
              color: esColorOscuro(t.color) ? "white" : "black",
               }}
            >
              <p className={`texto ${t.completada ? "completada" : ""}`}>
                {t.texto}
              </p>
              <div className="botones">
                <button
                  className="btn-completar"
                  onClick={() => tareaCompletada(t.id)}
                >
                  ✔
                </button>
                <button
                  className="btn-eliminar"
                  onClick={() => eliminarTarea(t.id)}
                >
                  ✖
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
