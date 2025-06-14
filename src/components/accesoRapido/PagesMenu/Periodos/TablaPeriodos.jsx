import { useNavigate } from "react-router-dom";
import "./TablaPeriodos.css";

function TablaPeriodos({ periodos }) {
    const navigate = useNavigate();
    return (
        <div className="tabla-periodos-container">
            <table className="tabla-periodos">
                <thead>
                    <tr>
                        <th>Periodos</th>
                        {/* <th>Fecha de Inicio</th>
                        <th>Fecha de Fin</th> */}
                    </tr>
                </thead>
                <tbody>
                    {periodos.map((periodo) => (
                        <tr key={periodo.id} onClick={() => navigate(`/dashboard/periodos/${periodo.id}`)}>
                            <td className="periodo-nombre">{periodo.nombrePeriodo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaPeriodos;
