import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./tablaEstudiantes.css";

function TablaEstudiantes({ estudiantes }) {
    const navigate = useNavigate();

    // Estados para búsqueda y paginación
    const [busqueda, setBusqueda] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);
    const estudiantesPorPagina = 10;

    // Reiniciar a página 1 si cambia la búsqueda
    useEffect(() => {
        setPaginaActual(1);
    }, [busqueda]);

    // Filtrado por nombre (búsqueda)
    const estudiantesFiltrados = estudiantes.filter((est) =>
        est.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    // Cálculo de paginación
    const totalPaginas = Math.ceil(estudiantesFiltrados.length / estudiantesPorPagina);
    const inicio = (paginaActual - 1) * estudiantesPorPagina;
    const fin = inicio + estudiantesPorPagina;
    const estudiantesPagina = estudiantesFiltrados.slice(inicio, fin);

    return (
        <div className="tabla-estudiantes-container">
            {/* 🔍 Input de búsqueda */}
            <div className="buscador-estudiantes">
                <input
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
            </div>

            {/* Tabla */}
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
                    {estudiantesPagina.length > 0 ? (
                        estudiantesPagina.map((est) => (
                            <tr key={est.id}>
                                <td
                                    className="nombre-alumno"
                                    onClick={() => navigate(`/dashboard/estudiantes/${est.id}`)}
                                    style={{ cursor: "pointer", color: "var(--link-color)" }}
                                >
                                    {est.nombre}
                                </td>
                                <td>{est.fecha_nacimiento?.slice(0, 10)}</td>
                                <td>{est.telefono}</td>
                                <td>{est.acudiente}</td>
                                <td>{est.acudiente_telefono}</td>
                                <td>{est.direccion}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: "center" }}>
                                No hay estudiantes encontrados.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Controles de paginación */}
            <div className="paginacion-estudiantes">
                <button
                    onClick={() => setPaginaActual(paginaActual - 1)}
                    disabled={paginaActual === 1}
                >
                    ← Anterior
                </button>
                <span>Página {paginaActual} de {totalPaginas}</span>
                <button
                    onClick={() => setPaginaActual(paginaActual + 1)}
                    disabled={paginaActual === totalPaginas}
                >
                    Siguiente →
                </button>
            </div>
        </div>
    );
}

export default TablaEstudiantes;
