import React from 'react';
import './App.css';
import Particles from "./Particle"
import Form from './components/Form'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


library.add(faCheckCircle)
function App(){
  return (
  <div id="root" className="App">
      <Particles/>
      <h1>I&nbsp;will&nbsp;.&nbsp;</h1>
      <Form/>
  </div>
  )
}




export default App;
