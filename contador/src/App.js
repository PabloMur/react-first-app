import "./App.css";
import logo from "./imagenes/freecodecamp-logo.png";

function App() {
  return (
    <div className="App">
      <div className="free-code-camp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="Logo de Freecodecamp"
        />
      </div>
      <div className="contenedor-principal"></div>
    </div>
  );
}

export default App;
