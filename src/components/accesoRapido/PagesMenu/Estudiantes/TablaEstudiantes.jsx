import { useNavigate } from "react-router-dom";
import "./tablaEstudiantes.css";

function TablaEstudiantes({ estudiantes }) {
    const navigate = useNavigate();

    return (
        <div className="tabla-estudiantes-container">
            <table className="tabla-estudiantes">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Fecha de nacimiento</th>
                        <th>Teléfono</th>
                        <th>Acudiente</th>
                        <th>Tel. Acudiente</th>
                        <th>Dirección</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(estudiantes) && estudiantes.length > 0 ? (
                        estudiantes.map((est) => (
                            <tr key={est.id}>
                                <td
                                    className="nombre-alumno"
                                    onClick={() => navigate(`/dashboard/estudiantes/${est.id}`)}
                                    style={{ cursor: "pointer", color: "var(--link-color)" }}
                                >
                                    {est.nombre}
                                </td>
                                <td>{est.fecha_nacimiento}</td>
                                <td>{est.telefono}</td>
                                <td>{est.acudiente}</td>
                                <td>{est.acudiente_telefono}</td>
                                <td>{est.direccion}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: "center" }}>
                                No hay estudiantes registrados.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TablaEstudiantes;
