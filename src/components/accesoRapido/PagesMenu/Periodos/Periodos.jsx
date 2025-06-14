import { useNavigate } from "react-router-dom";
import TablaPeriodos from "./TablaPeriodos";
import "./Periodos.css";

function Periodos() {
    const navigate = useNavigate();

    // Datos de prueba (esto luego será una petición)
    const periodos = [
        { id: 1, nombrePeriodo: "2025-2026" },
        { id: 2, nombrePeriodo: "2024-2025" }
    ];

    return (
        <div className="periodos">
            <div className="header-periodos">
                <div className="title-periodos">
                    <h1>Periodos</h1>
                    <button className="btn-volver" onClick={() => navigate("/dashboard")}>
                        ← Regresar
                    </button>
                </div>
            </div>

            <div className="container-info-periodos">
                <TablaPeriodos periodos={periodos} />
            </div>

            <div className="container-accesos-periodos">
                <button
                    onClick={() => navigate('/dashboard/registrar-periodo')}
                    className="acceso-btn"
                >
                    Crear Periodo
                </button>
            </div>
        </div>
    );
}

export default Periodos;
