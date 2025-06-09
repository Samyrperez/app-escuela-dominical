import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Estudiantes from './components/accesoRapido/PagesMenu/Estudiantes/Estudiantes'
import RegistrarEstudiantes from './components/accesoRapido/PagesMenu/Estudiantes/ComponentesEstudiantes/RegistrarEstudiantes'
import Cumpleanios from './components/accesoRapido/PagesMenu/Estudiantes/ComponentesEstudiantes/Cumpleanios'
import CandidatosPromocionar from './components/accesoRapido/PagesMenu/Estudiantes/ComponentesEstudiantes/CandidatosPromocionar'
import InfoEstudiante from './components/accesoRapido/PagesMenu/Estudiantes/ComponentesEstudiantes/RegistrarEstudiantes/InfoEstudiante'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />

        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='estudiantes' element={<Estudiantes />} />
          <Route path='estudiantes/:id' element={<InfoEstudiante />} /> {/* ← Esta línea nueva */}
          <Route path='registrar-estudiantes' element={<RegistrarEstudiantes />} />
          <Route path='candidatos-promocionar' element={<CandidatosPromocionar />} />
          <Route path='cumpleanios' element={<Cumpleanios />} />
        </Route>

      </Routes>
    </Router>
  )
}

export default App
