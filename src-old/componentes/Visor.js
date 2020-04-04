import React from 'react';
function Visor(props) {
    return(
    <div className="row">
        <p>
          {props.ejemplo}
        </p>
    </div>
    )
}
export default Visor;