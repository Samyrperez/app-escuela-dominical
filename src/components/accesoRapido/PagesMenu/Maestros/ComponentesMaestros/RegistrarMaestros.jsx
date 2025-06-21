import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import obtenerCursos from "../../../../../api/cursos/obtenerCursos";
import obtenerCelebraciones from "../../../../../api/celebraciones/obtenerCelebraciones";
import registrarMaestro from "../../../../../api/maestros/crearMaestro";

function RegistrarMaestro() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        curso_id: "",
        celebracion_id: ""
    });

    const [cursos, setCursos] = useState([]);
    const [celebraciones, setCelebraciones] = useState([]);

    useEffect(() => {
        const cargarDatos = async () => {
            const token = localStorage.getItem("token");
            const cursosData = await obtenerCursos(token);
            const celebracionesData = await obtenerCelebraciones(token);
            setCursos(cursosData.data || []);
            setCelebraciones(celebracionesData.data || []);
        };

        cargarDatos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const exito = await registrarMaestro(formData);
        if (exito) {
            alert("Maestro registrado correctamente");
            navigate("/dashboard/maestros");
        } else {
            alert("Error al registrar maestro");
        }
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
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="campo-formulario">
                    <label>Teléfono</label>
                    <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div className="campo-formulario">
                    <label>Horario de celebración</label>
                    <select name="celebracion_id" value={formData.celebracion_id} onChange={handleChange} required>
                        <option value="">-- Selecciona una celebración --</option>
                        {celebraciones.map((c) => (
                            <option key={c.id} value={c.id}>{c.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="campo-formulario">
                    <label>Curso asignado</label>
                    <select name="curso_id" value={formData.curso_id} onChange={handleChange} required>
                        <option value="">-- Selecciona un curso --</option>
                        {cursos.map((c) => (
                            <option key={c.id} value={c.id}>{c.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="acciones-bottom">
                    <button type="submit" className="btn-accion guardar">Registrar maestro</button>
                    <button type="button" className="btn-cancelar" onClick={() => navigate("/dashboard/maestros")}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default RegistrarMaestro;
