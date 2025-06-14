// src/componentes/dashboard/Maestros/RegistrarMaestro.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegistrarMaestro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        horarioCulto: "",
        curso: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nuevo maestro registrado:", formData);
        navigate("/dashboard/maestros");
    };

    return (
        <div className="registro-maestros">
            <div className="registro-header">
                <h1>Registrar nuevo maestro</h1>
                <button className="btn-volver" onClick={() => navigate("/dashboard/maestros")}>← Regresar</button>
            </div>

            <form className="registro-formulario" onSubmit={handleSubmit}>
                <div className="campo-formulario">
                    <label>Nombre completo</label>
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        placeholder="Nombre del maestro"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo-formulario">
                    <label>Horario de servicio</label>
                    <input
                        type="text"
                        name="horarioCulto"
                        value={formData.horarioCulto}
                        placeholder="Horario según el culto"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="campo-formulario">
                    <label>Curso asignado</label>
                    <input
                        type="text"
                        name="curso"
                        value={formData.curso}
                        placeholder="Nombre del curso"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="acciones-bottom">
                    <button type="submit" className="btn-accion guardar">Registrar maestro</button>
                    <button type="button" className="btn-cancelar" onClick={() => navigate("/dashboard/maestros")}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegistrarMaestro;
