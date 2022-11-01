import React from 'react'
import './App.css'
import BuenosDias from './componente/BuenosDias/BuenosDias';
import Imagen from './componente/Imagen/Imagen';
import Welcome from './componente/Welcome/Welcome';

const App = ()=>{ 
  return(
    <div>
      <BuenosDias/>
    <Welcome name="Ariel"/>
    <Imagen url="https://i.pinimg.com/originals/68/14/a7/6814a73489b9e3b94d8031ab23c65540.png"/>
    <Welcome name="Cenicienta"/>
    <Imagen url="https://i.pinimg.com/550x/d0/08/53/d008531e436434d94e30db89bbd51368.jpg"/>
    <Welcome name="Unnicornio"/>
    <Imagen url="https://i.pinimg.com/736x/a3/30/90/a33090d377ceb8172af2da6742a21df8.jpg"/>
      </div>
  );
 
};
export default App;