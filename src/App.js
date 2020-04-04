import React, { useState, useEffect } from 'react';
import Menu from './componentes/Menu';
import Banner from './componentes/Banner';
import MenuLetras from './componentes/MenuLetras';
import Splash from './componentes/Spalsh';
import Visor from './componentes/Visor';
import Detalle from './componentes/Detalle';
import './css/master.css';
var datosJson = null;

function App() {
  const [isReady, setisReady] = useState(false);
  const [listaFiltrada, setListaFiltrada,]= useState(null);
  const [datosFiltrados, setDatosFiltrados] = useState(null);
  const [info,setInfo] = useState(null);
  const [nombreCient, setNombreCient] = useState(false);
  const setEjemplos=[];
  useEffect(() => {
    obtenerDatos();
  }, [])

  async function obtenerDatos() {
    //let response = await fetch('http://localhost/Buscador/webservice/obtener.php');
    // let response = await fetch('https://mundologan.xyz/ws/buscadot/obtener.php');
    let response = await fetch('http://recursos.mep.go.cr/2020/oscar/webservices/obtener_terminos.php');
    console.log(response);
    datosJson = await response.json();
    console.log("Array", datosJson);
    setisReady(true);
    setDatosFiltrados(datosJson);
  }


  const handleBuscador = (e) => {
    let palabra = e.target.value.toLowerCase();
    console.log("Palabra", palabra);
    let limite = datosJson.length;

    if (nombreCient) {
      let tmpArray = [];

            for (let index = 0; index < limite; index++) {
              const str = datosJson[index].t_espanol.toLowerCase();
              const patt = new RegExp(palabra);
              let res = patt.test(str);
              if (res) {
                tmpArray.push(datosJson[index])
              }
            }
            setDatosFiltrados(tmpArray);
    } else {
            let tmpArray = [];

            for (let index = 0; index < limite; index++) {
              const str = datosJson[index].t_gnabere.toLowerCase();
              const patt = new RegExp(palabra);
              let res = patt.test(str);
              if (res) {
                tmpArray.push(datosJson[index])
              }
            }
            setDatosFiltrados(tmpArray);

    }

  }

  const handleMostrarDetalle = (e) => {
      const id = e.target.id;
    for (let index = 0; index < datosFiltrados.length; index++) {
      if (datosFiltrados[index].id === id) {
        setInfo(datosFiltrados[index])
      }
    }
  }

 


  const [ejemplo,setEjemplo]=useState(null);
  const handleObtenerPorLetra= (e) => {
    for (let index = 0; index < datosFiltrados.length; index++) {
      if ((datosFiltrados[index].t_gnabere).charAt(0) === e.target.id) {
        setEjemplos.push(datosFiltrados[index]);
      }
      
    }
    console.log(e.target.id);
    console.log(setEjemplos);
    setListaFiltrada(setEjemplos);
    setEjemplo(e.target.id);
  }

  const handleT_gnabere = (e) => {
    console.log(e.target.checked);
    setNombreCient(e.target.checked);
  }

  const handleBanner = (e) => {
    console.log(e.target.checked);
    setNombreCient(e.target.checked);
  }

  return (

    <div className="Container">
      {
        isReady ?
          (             
           
            <React.Fragment>
              <Banner handleBanner={handleBanner}/>
              <div className="row">
                <MenuLetras handleObtenerPorLetra={handleObtenerPorLetra}/>
              </div>  
              <Menu  handleBuscador={handleBuscador} handleT_gnabere={handleT_gnabere} />
              <hr />
              <div className="row">
   
                <Visor listaFiltrada={listaFiltrada}  datosFiltrados={datosFiltrados} nombreCient={nombreCient} handleMostrarDetalle={handleMostrarDetalle} />
                <Detalle info={info} />
              </div>

            </React.Fragment>
          )
          :
          <Splash />
      }

    </div>
  );
}

export default App;
