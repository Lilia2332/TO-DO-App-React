import "./BuscadorTareas.css";

export default function BuscadorTareas({
  buscador,
  setBuscador,
  modoOscuro,
  setModoOscuro,
}) {
  const cambiarTema = () => {
    setModoOscuro((prev) => !prev);
    document.body.classList.toggle("oscuro");
  };

  return (
    <nav className={`navegacion ${modoOscuro ? "oscuro" : ""}`}>
      <div className="inicio">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038509.png"
          alt="Logo"
          width={50}
        />
        <h1 className="titulo">TO-DO</h1>
      </div>
      <div className="nav">
        <div className="buscador">
          <label></label>
          <input
            id="buscar"
            type="text"
            placeholder="Busca tus tareas..."
            value={buscador}
            onChange={(e) => setBuscador(e.target.value)}
            className="subtitulo"
          ></input>
        </div>
        <button className="modo" onClick={cambiarTema}>
          Cambiar tema
        </button>
      </div>
    </nav>
  );
}
