import React from 'react';

function Visor (props) {
    

    return ( 
             <div className="col-3 div-palabras">
             <ul>
              {
                       props.listaFiltrada !== null ? (
                        (
                        props.nombreCient ?
                        (
                            props.listaFiltrada.map((item,i)=>(
                                <li className="lista_terminos" onClick={props.handleMostrarDetalle}  id={item.id}  key={item.id}> {item.t_espanol } </li>
                            ))
                        ):
                        (
                            props.listaFiltrada.length > 0 ? (
                                props.listaFiltrada.map((item,i)=>(
                                    <li className="lista_terminos" onClick={props.handleMostrarDetalle}  id={item.id}  key={item.id}> {item.t_gnabere } </li>
                                )
                              )) : (
                                <p>No hay términos con esa letra</p>
                              )
                        )
                       )
                      ) : (
                        <p>Seleccione la letra inicial del término que desea traducir a Gnäbere</p>
                      )}
                   
          </ul>
          {/* <div className="row">

    </div> */}
             </div>
    )
}

export default Visor;