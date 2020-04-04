import React,{useState} from 'react';
import Menu from './componentes/Menu';
import Visor from './componentes/Visor';
function App() {
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
