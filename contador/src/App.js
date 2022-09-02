import "./App.css";
import Contador from "./components/contador";
import Boton from "./components/boton";
import logo from "./imagenes/freecodecamp-logo.png";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="free-code-camp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="Logo de Freecodecamp"
        />
      </div>
      <Contador numClicks={numClicks} />
      <div className="contenedor-principal">
        <Boton
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiciarContador}
        />
      </div>
    </div>
  );
}

export default App;
