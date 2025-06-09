// src/components/estudiantes/TablaEstudiantes.jsx
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
                        <th>Sexo</th>
                        <th>Fecha de nacimiento</th>
                        <th>Acudiente</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantes.map((est) => (
                        <tr key={est.id}>
                            <td
                                className="nombre-alumno"
                                onClick={() => navigate(`/dashboard/estudiantes/${est.id}`)}
                                style={{ cursor: "pointer", color: "var(--link-color)" }}
                            >
                                {est.nombre}
                            </td>
                            <td>{est.sexo}</td>
                            <td>{est.fechaNacimiento}</td>
                            <td>{est.acudiente}</td>
                            <td>{est.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaEstudiantes;
