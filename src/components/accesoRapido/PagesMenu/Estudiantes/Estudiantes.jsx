import { estudiantes } from "../../../../data/dataEstudiantes";
import { useNavigate } from "react-router-dom";
import TablaEstudiantes from "./TablaEstudiantes";
import "../Estudiantes/Estudiantes.css";
import { useEffect, useState } from "react";
import obtenerAlumnos from "../../../../api/alumnos/obtenerAlumnos";


function Estudiantes() {
  const navigate = useNavigate();
  const [alumnos, setAlumnos] = useState([]);


  useEffect(() => {
    const token = localStorage.getItem("token");
    const cargarAlumnos = async () => {
      const response = await obtenerAlumnos(token);
      console.log("Respuesta de la API:", response); // Esto debe mostrar el objeto con data
      setAlumnos(response.data); // 👈 Solo esto necesitas
    };

    cargarAlumnos();
  }, []);


  return (
    <div className="estudiantes">
      <div className="header-estudiantes">
        <div className="title-estudiantes">
          <h1>Estudiantes</h1>
          <button className="btn-volver" onClick={() => navigate("/dashboard")}>
            ← Regresar
          </button>
        </div>

        <div className="container-info-estudiantes">
          <TablaEstudiantes estudiantes={alumnos} />
        </div>
      </div>

      <div className="container-accesos-estudiantes">
        <button onClick={() => navigate('/dashboard/registrar-estudiantes')} className="acceso-btn">
          Registrar estudiantes
        </button>
        <button onClick={() => navigate('/dashboard/candidatos-promocionar')} className="acceso-btn">
          Promociones futuras
        </button>
        <button onClick={() => navigate('/dashboard/cumpleanios')} className="acceso-btn">
          Cumpleaños
        </button>
      </div>
    </div>
  );
}

export default Estudiantes;
