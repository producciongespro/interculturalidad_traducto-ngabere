import React from "react";
import palabras from "../data/palabras.json";

function MenuLetras(props) {
  return (
    <React.Fragment>
      <div className="col-3 barra_color">

      </div>
      <div className="col-7 letras_abc">        
      {/* <img
          className="esquina img-fluid"
          src="https://recursos.mep.go.cr/2020/oscar/traductor/webservices/borde_izq-04.png"
          alt="esquina"
        /> */}
        {palabras.map((item, i) => (
          <button
            className="par img-fluid"
            onClick={props.handleObtenerPorLetra}
            key={i}
            id={item.letra}
            name={item.letra2}            
          >
            {item.letra}
          </button>
        ))}
      </div>
      <div className="col-2">
        <img
          className="img-fluid"
          src="https://recursos.mep.go.cr/2020/oscar/traductor/webservices/cabezas-01.png"
          alt="humanos"
        />
      </div>
    </React.Fragment>
  );
}
export default MenuLetras;
