// src/componentes/dashboard/Maestros/InfoMaestro.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../InfoMaestros/InfoMaestros.css";
import { useMaestros } from "../../../../../../context/MaestrosContext";

function InfoMaestro() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { maestros, recargarMaestros } = useMaestros();

    const [maestro, setMaestro] = useState(null);
    const [modoEdicion, setModoEdicion] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        horarioCulto: "",
        curso: ""
    });

    useEffect(() => {
        recargarMaestros();
    }, [])

    useEffect(() => {
        const m = maestros.find(m => m.id === parseInt(id));
        if (m) {
            setMaestro(m);
            setFormData(m);
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
        setMaestro(formData);
        setModoEdicion(false);
    };

    const handleCancelarEdicion = () => {
        setFormData(maestro);
        setModoEdicion(false);
    };

    if (!maestro) return <p>Cargando maestro...</p>;

    return (
        <div className="registro-estudiantes">
            <div className="registro-header">
                <h1>Información maestro</h1>
                <button className="btn-volver" onClick={() => navigate("/dashboard/maestros")}>
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
                    <label>Horario de culto</label>
                    <input
                        type="text"
                        name="horarioCulto"
                        value={formData.horarioCulto}
                        onChange={handleChange}
                        disabled={!modoEdicion}
                    />
                </div>
                <div className="campo-formulario">
                    <label>Curso asignado</label>
                    <input
                        type="text"
                        name="curso"
                        value={formData.curso}
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

export default InfoMaestro;
