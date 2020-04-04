import React from 'react';
import palabras from '../data/palabras.json';
import assets from '../data/config.json';

const imgGenerales = assets.img.general;

function Menu(props) {


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    </div>
                    <div className="col-3">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                        </div>
                        <input onChange={props.handleBuscador} type="text" className="form-control" placeholder="Digite el término a buscar" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="col-1">
                    <div className="form-check form-check-inline">
                        {/* <input onClick={props.handleNombreCientifico} className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Menu;