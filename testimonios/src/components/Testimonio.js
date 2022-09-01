import React from "react";
import "../stylesheets/testimonio.css";
function Testimonio(props) {
  return (
    <div className="container">
      <img
        className="img-testimonio"
        src={require(`../img/${props.img}.jpg`)}
        alt={`Foto de ${props.nombre}`}
      />
      <div className="testimonio-text-container">
        <p className="testimonio-name">
          <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
        </p>
        <p className="testimonio-cargo">
          {props.cargo} en {props.empresa}
        </p>
        <p className="testimonio-texto">{props.testimonio}</p>
      </div>
    </div>
  );
}

export { Testimonio };
