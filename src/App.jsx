import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Estudiantes from './components/accesoRapido/PagesMenu/Estudiantes/Estudiantes'
import RegistrarEstudiantes from './components/accesoRapido/PagesMenu/Estudiantes/ComponentesEstudiantes/RegistrarEstudiantes'
import Cumpleanios from './components/accesoRapido/PagesMenu/Estudiantes/ComponentesEstudiantes/Cumpleanios'
import CandidatosPromocionar from './components/accesoRapido/PagesMenu/Estudiantes/ComponentesEstudiantes/CandidatosPromocionar'
import InfoEstudiante from './components/accesoRapido/PagesMenu/Estudiantes/ComponentesEstudiantes/InfoEstudiantes/InfoEstudiante'
import RegistrarMaestro from './components/accesoRapido/PagesMenu/Maestros/ComponentesMaestros/RegistrarMaestros'
import Maestros from './components/accesoRapido/PagesMenu/Maestros/Maestros'
import InfoMaestro from './components/accesoRapido/PagesMenu/Maestros/ComponentesMaestros/InfoMaestros/InfoMaestros'
import Periodos from './components/accesoRapido/PagesMenu/Periodos/Periodos'
import InfoPeriodos from './components/accesoRapido/PagesMenu/Periodos/ComponentesPeriodos/InfoPeriodos'
import Cursos from './components/accesoRapido/PagesMenu/Cursos/Cursos'
import './App.css'

import PrivateRoute from '../src/components/PrivateRoute'






function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          {/* Estudiantes */}
          <Route path='estudiantes' element={<Estudiantes />} />
          <Route path='estudiantes/:id' element={<InfoEstudiante />} />
          <Route path='registrar-estudiantes' element={<RegistrarEstudiantes />} />
          <Route path='candidatos-promocionar' element={<CandidatosPromocionar />} />
          <Route path='cumpleanios' element={<Cumpleanios />} />
          {/* Maestros */}
          <Route path='maestros' element={<Maestros />} />
          <Route path='maestro/:id' element={<InfoMaestro />} />
          <Route path='registrar-maestro' element={<RegistrarMaestro />} />
          {/* Periodos */}
          <Route path='periodos' element={<Periodos />} />
          <Route path='periodos/:id' element={<InfoPeriodos />} />
          {/* Cursos */}
          <Route path='cursos' element={<Cursos />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
