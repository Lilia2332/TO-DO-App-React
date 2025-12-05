import { useState } from "react";
import ContenedorTareas from "./components/ContenedorTareas/ContenedorTareas";
import "./ToDoApp.css";

export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <div className={modoOscuro ? "oscuro" : ""}>
      <ContenedorTareas modoOscuro={modoOscuro}setModoOscuro={setModoOscuro}/>
    </div>
  );
}
