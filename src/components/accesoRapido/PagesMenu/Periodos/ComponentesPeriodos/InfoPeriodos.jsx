import { useNavigate, useParams } from "react-router-dom";
import "./InfoPeriodos.css";

function InfoPeriodos() {
    const navigate = useNavigate();
    const { id } = useParams();
    const periodoNombre = id === "1" ? "2024-2025" : "2025-2026"; // Simulación

    return (
        <div className="info-periodo">
            <div className="header-info-periodo">
                <h1>Periodo: {periodoNombre}</h1>
                <button className="btn-volver" onClick={() => navigate("/dashboard/periodos")}>← Regresar</button>
            </div>

            <div className="menu-periodo">
                <button className="menu-btn">Estudiantes</button>
                <button className="menu-btn">Asistencia</button>
                <button className="menu-btn">Lecciones</button>
            </div>

            <div className="acciones-periodo">
                <button className="btn-activar">Activar Periodo</button>
                <button className="btn-cerrar" onClick={() => navigate("/dashboard/periodos")}>Cerrar Periodo</button>
            </div>
        </div>
    );
}

export default InfoPeriodos;
