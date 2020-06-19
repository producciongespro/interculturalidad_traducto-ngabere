import React, { useState, useEffect } from 'react';
import Menu from './componentes/Menu';
import Banner from './componentes/Banner';
import BannerMovil from './componentes/BannerMovil';
import BarraInferior from './componentes/BarraInferior';
import BarraInferiorMovil from './componentes/BarraInferiorMovil';
import MenuLetras from './componentes/MenuLetras';
import MenuLetrasMovil from './componentes/MenuLetrasMovil';
import Splash from './componentes/Spalsh';
import Visor from './componentes/Visor';
import VisorMovil from './componentes/VisorMovil';
import Educatico from './componentes/Educatico';
import EducaticoMovil from './componentes/EducaticoMovil';
import Detalle from './componentes/Detalle';
import DetalleMovil from './componentes/DetalleMovil';
import config from './data/config.json';

import './css/master.css';
var datosJson = null;
var plataforma="";
const fondos = config.img.general;
console.log("fondos",fondos);


function App() {
  const [isReady, setisReady] = useState(false);
  const [listaFiltrada, setListaFiltrada,]= useState(null);
  const [datosFiltrados, setDatosFiltrados] = useState(null);
  const [info,setInfo] = useState(null);
  const [nombreCient, setNombreCient] = useState(false);
  const setEjemplos=[];
  plataforma = detectarPlataforma();
  useEffect(() => {
    obtenerDatos();
  }, [])

  async function obtenerDatos() {
    //let response = await fetch('http://localhost/traducto-ngabere/webservices/obtener_terminos.php');
    let response = await fetch('https://recursos.mep.go.cr/2020/oscar/traductor/webservices/obtener_terminos.php');
    console.log(response);
    datosJson = await response.json();
    console.log("Array", datosJson);
    setisReady(true);
    setDatosFiltrados(datosJson);
  }

  function detectarPlataforma() {
    let plataforma = navigator.platform;
    switch (plataforma) {
      case "Linux armv7l":
      case "Linux armv8l":
      case "iPhone":
      case "iPad":
        plataforma = "movil";
        break;
      case "win32":
        plataforma = "escritorio";
        //plataforma = "movil";
        break;
      default:
        plataforma = "escritorio";
        //plataforma = "movil";
        break;
    }
    sessionStorage.setItem("tipoPlataforma", plataforma);
    return plataforma;
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
    console.log("limpiar");
    setInfo("limpiar");
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

    <div className="">
      {
        isReady ?
          (             
           
            <React.Fragment>
              
              <div className="container">
              {/* <div className="row" id="">
                  <div className="col-2">
                  <img id="esquinaSIB" className="img-fluid" src={fondos+"esquinaSIB.png"} alt="izq"/>
                  </div>
                  <div id="barra-superior" className="col-8">
                      
                  </div>
                  <div className="col-2">
                    <img id="btn-acercaDe" className="img-fluid" src={fondos+"acercade-01.png"} alt="arr"/>
                  </div>
                </div> */}
              {/* <img className="img-fluid" src={fondos+"arriba.png"} alt="arr"/> */}
              {plataforma==="movil" ?(
                <BannerMovil handleBanner={handleBanner}/>
              )
              :
              (
                 <Banner handleBanner={handleBanner}/>
              )}
              {plataforma==="movil" ?(  
              <React.Fragment>
                <div className="row" id="">
              
                   
                     <div className="col-12">
                       <div className="row" id="menu_letras">
                         <MenuLetrasMovil handleObtenerPorLetra={handleObtenerPorLetra}/>    
                       </div>  
                       {/* <Menu  handleBuscador={handleBuscador} handleT_gnabere={handleT_gnabere} /> */}
                       {/* <hr /> */}
                       <div id="detallesMovil" className="row">
                       <div id="" className="col-12">
                         <div className="row">
                         <VisorMovil listaFiltrada={listaFiltrada}  datosFiltrados={datosFiltrados} nombreCient={nombreCient} handleMostrarDetalle={handleMostrarDetalle} />
                         <DetalleMovil info={info} />
                         </div>
                        
                       </div>
                        
                       </div>
                        <EducaticoMovil/> 
                 </div>
                 </div>
                 </React.Fragment>
                  )
                  :
                  (
                  <React.Fragment>
                  <div className="row" id="">
                    <div className="col-1">
                      <img className="img-fluid" src={fondos+"triangulos_izq-01.png"} alt="izq"/>
                    </div>
                      <div className="col-10">
                        <div className="row text-right" id="menu_letras">
                          <MenuLetras handleObtenerPorLetra={handleObtenerPorLetra}/>
                        
                        </div>  
                        {/* <Menu  handleBuscador={handleBuscador} handleT_gnabere={handleT_gnabere} /> */}
                        {/* <hr /> */}
                        <div id="detalles" className="row">
                        <div id="" className="col-12">
                          <div className="row">
                          <Visor listaFiltrada={listaFiltrada}  datosFiltrados={datosFiltrados} nombreCient={nombreCient} handleMostrarDetalle={handleMostrarDetalle} />
                          <Detalle info={info} />
                          </div>
                        
                        </div>
                        
                        </div>
                        {plataforma==="movil" ?(  
                        <EducaticoMovil/> )
                        :
                        (
                        <Educatico/> 
                        )}
                </div>
                <div className="col-1">
                   <img id="barra_derecha" className="img-fluid" src={fondos+"triangulos_der-01.png"} alt="der"/>
                  </div>
              </div> 
                </React.Fragment>
                  )}
                  
                  {plataforma==="movil" ?(  
                    <BarraInferiorMovil/> 
                  )
                  :
                  (
                    <BarraInferior/> 
                  )}
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
