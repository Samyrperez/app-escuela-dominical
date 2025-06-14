import { maestros } from "../../../../data/dataMaestros";
import { useNavigate } from "react-router-dom";
import TablaMaestros from "./TablaMaestros";
import "../Maestros/Maestros.css";

function Maestros() {
    const navigate = useNavigate();

    return (
        <div className="maestros">
            <div className="header-maestros">
                <div className="title-maestros">
                    <h1>Maestros</h1>
                    <button className="btn-volver" onClick={() => navigate("/dashboard")}>
                        ← Regresar
                    </button>
                </div>

                <div className="container-info-maestros">
                    <TablaMaestros maestros={maestros} />
                </div>
            </div>

            <div className="container-accesos-maestros">
                <button onClick={() => navigate('/dashboard/registrar-maestro')} className="acceso-btn">
                    Registrar maestro
                </button>
            </div>
        </div>
    );
}

export default Maestros;
