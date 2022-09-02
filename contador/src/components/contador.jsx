import React from "react";
import "../styles/Contador.css"

function Contador({ numClicks}) {
    return(
      <div className="container">
        <p>{numClicks}</p>
      </div>
    )
}

export default Contador
