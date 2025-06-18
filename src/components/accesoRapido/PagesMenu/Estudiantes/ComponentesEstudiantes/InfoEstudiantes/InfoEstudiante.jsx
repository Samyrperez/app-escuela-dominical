import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAlumnos } from "../../../../../../context/AlumnosContext";
import { editarAlumno } from "../../../../../../api/alumnos/editarAlumno";
import { eliminarAlumno } from "../../../../../../api/alumnos/eliminarAlumno";
import "./InfoEstudiante.css";



function InfoEstudiante() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { alumnos, eliminarAlumnoDelContexto } = useAlumnos();

    const [formData, setFormData] = useState(null);
    const [modoEdicion, setModoEdicion] = useState(false);

    useEffect(() => {
        const estudiante = alumnos.find((a) => a.id === parseInt(id));
        if (estudiante) setFormData(estudiante);
    }, [alumnos, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleGuardar = async () => {
        const alumnoEditado = {
            ...formData,
            fecha_nacimiento: formData.fecha_nacimiento?.slice(0, 10) // ⬅️ Asegura formato YYYY-MM-DD
        };

        const actualizado = await editarAlumno(id, alumnoEditado);

        if (actualizado) {
            alert("Estudiante actualizado correctamente");
            setModoEdicion(false);
        } else {
            alert("Ocurrió un error al actualizar.");
        }
    };
    const handleEliminar = async () => {
        const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este alumno?");
        if (!confirmar) return;

        const eliminado = await eliminarAlumno(id);
        if (eliminado) {
            eliminarAlumnoDelContexto(id); // ⬅️ Actualiza la lista global
            alert("Alumno eliminado correctamente");
            navigate("/dashboard/estudiantes");
        } else {
            alert("Ocurrió un error al eliminar.");
        }
    };





    const handleCancelarEdicion = () => {
        const estudianteOriginal = alumnos.find((a) => a.id === parseInt(id));
        setFormData(estudianteOriginal);
        setModoEdicion(false);
    };

    if (!formData) return <p>Cargando estudiante...</p>;

    return (
        <div className="registro-estudiantes">
            <div className="registro-header">
                <h1>Información estudiante</h1>
                <button className="btn-volver" onClick={() => navigate("/dashboard/estudiantes")}>
                    ← Regresar
                </button>
            </div>

            <form className="registro-formulario">
                <div className="campo-formulario">
                    <label>Nombre completo</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>
                <div className="campo-formulario">
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        name="fecha_nacimiento"
                        value={formData.fecha_nacimiento?.slice(0, 10) || ""}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>
                <div className="campo-formulario">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        name="telefono"
                        value={formData.telefono || ""}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>
                <div className="campo-formulario">
                    <label>Acudiente</label>
                    <input
                        type="text"
                        name="acudiente"
                        value={formData.acudiente || ""}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>
                <div className="campo-formulario">
                    <label>Tel. Acudiente</label>
                    <input
                        type="text"
                        name="acudiente_telefono"
                        value={formData.acudiente_telefono || ""}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>
                <div className="campo-formulario">
                    <label>Dirección</label>
                    <input
                        type="text"
                        name="direccion"
                        value={formData.direccion || ""}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>

                <div className="acciones-bottom">
                    {modoEdicion ? (
                        <>
                            <button type="button" className="btn-accion guardar" onClick={handleGuardar}>
                                Guardar cambios
                            </button>
                            <button type="button" className="btn-accion cancelar" onClick={handleCancelarEdicion}>
                                Cancelar
                            </button>
                        </>
                    ) : (
                        <>
                            <button type="button" className="btn-accion editar" onClick={() => setModoEdicion(true)}>
                                Editar
                            </button>
                            <button type="button" className="btn-accion eliminar" onClick={handleEliminar}>
                                Eliminar
                            </button>

                        </>
                    )}
                </div>
            </form>
        </div>
    );
}

export default InfoEstudiante;
