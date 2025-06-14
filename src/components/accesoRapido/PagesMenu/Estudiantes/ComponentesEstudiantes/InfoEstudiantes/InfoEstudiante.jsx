import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { estudiantes } from "../../../../../../data/dataEstudiantes";
import "./InfoEstudiante.css";

function InfoEstudiante() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [estudiante, setEstudiante] = useState(null);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        sexo: "",
        fechaNacimiento: "",
        acudiente: "",
        telefono: ""
    });

    useEffect(() => {
        const est = estudiantes.find(e => e.id === parseInt(id));
        if (est) {
            setEstudiante(est);
            setFormData(est);
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleGuardar = () => {
        console.log("Datos guardados:", formData);
        setEstudiante(formData);
        setModoEdicion(false);
    };

    const handleCancelarEdicion = () => {
        setFormData(estudiante);
        setModoEdicion(false);
    };

    if (!estudiante) return <p>Cargando estudiante...</p>;

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
                    <label>Sexo</label>
                    <input
                        type="text"
                        name="sexo"
                        value={formData.sexo}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>
                <div className="campo-formulario">
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>
                <div className="campo-formulario">
                    <label>Acudiente (opcional)</label>
                    <input
                        type="text"
                        name="acudiente"
                        value={formData.acudiente || ""}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>
                <div className="campo-formulario">
                    <label>Teléfono (opcional)</label>
                    <input
                        type="text"
                        name="telefono"
                        value={formData.telefono || ""}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>

                {/* Botones abajo */}
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
                            <button type="button" className="btn-accion eliminar">
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
