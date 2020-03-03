import React,{useState,useEffect} from 'react';
import Menu from './componentes/Menu';
import Visor from './componentes/Visor';


var datosJson = null;

function App() {
  const [isReady, setisReady] = useState(false);
  const [datosFiltrados, setDatosFiltrados] = useState(null);
  // const [info, setInfo] = useState(null);
  // const [nombreCient, setNombreCient] = useState(false);

  useEffect(() => {
    obtenerDatos();
  }, [])

  async function obtenerDatos() {
    //let response = await fetch('http://localhost/Buscador/webservice/obtener.php');
    let response = await fetch('../webservices/obtener_terminos.php');
    datosJson = await response.json();
    console.log("Array", datosJson);
    setisReady(true);
    setDatosFiltrados(datosJson);
  }

  const [ejemplo,setEjemplo]=useState(null);

  const handleObtenerEjemplo =(e)=>{
    console.log(e.target.id);
    setEjemplo(e.target.id);
  }
  return (
    <div className="container">
        <Menu handleObtenerEjemplo={handleObtenerEjemplo}/>
        <Visor ejemplo={ejemplo}/>
    </div>
  );
}

export default App;
