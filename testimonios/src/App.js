import "./App.css";
import { Testimonio } from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>Estos son algunos de los personajes de Valorant:</h1>
        <Testimonio
          nombre="Breach"
          img="breach"
          pais="Suecia"
          cargo="INICIADOR"
          empresa="Valorant"
          testimonio="Breach, el sueco biónico, dispara una serie de explosiones cinéticas controladas para abrirse paso por el territorio enemigo. Su capacidad para infligir daño y sembrar el caos garantiza que los combates siempre estén de su parte."
        />
        <Testimonio
          nombre="Fade"
          img="fade"
          pais="Turquia"
          cargo="INITIATOR"
          empresa="Valorant"
          testimonio="Fade, la cazarrecompensas turca, controla el poder de las pesadillas para poner al descubierto los secretos de los enemigos. Armada con el terror mismo, da caza a sus objetivos y revela sus miedos más profundos, para después acabar con ellos en la oscuridad."
        />
      </div>
    </div>
  );
}

export default App;
