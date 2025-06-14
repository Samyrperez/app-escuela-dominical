import { useNavigate } from "react-router-dom";
import "./Cursos.css"


function Cursos() {
    const navigate = useNavigate();
    return (
        <>
            <div className="cursos">
                <div className="title-cursos">
                    <h1>Cursos</h1>
                    <button className="btn-volver" onClick={() => navigate("/dashboard")}>
                        ← Regresar
                    </button>
                </div>

                <div className="container-accesos-cursos">
                    <button
                    // onClick={() => navigate('/dashboard/registrar-periodo')}
                    // className="acceso-btn"
                    >
                        Crear curso
                    </button>
                    <button
                    // onClick={() => navigate('/dashboard/registrar-periodo')}
                    // className="acceso-btn"
                    >
                        Cursos actuales
                    </button>
                </div>
            </div>
        </>
    )
}

export default Cursos;