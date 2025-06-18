import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrarAlumno } from "../../../../../api/alumnos/registrarAlumno";
import { useAlumnos } from "../../../../../context/AlumnosContext";
import "./RegistrarEstudiantes.css";

function RegistrarEstudiantes() {
    const navigate = useNavigate();
    const { alumnos, setAlumnos } = useAlumnos();

    const [formData, setFormData] = useState({
        nombre: "",
        sexo: "",
        fecha_nacimiento: "",
        telefono: "",
        acudiente: "",
        acudiente_telefono: "",
        direccion: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const creado = await registrarAlumno(formData);
        if (creado) {
            alert("Estudiante registrado correctamente");

            // ⬅️ actualiza contexto si tienes setAlumnos disponible
            if (setAlumnos) {
                setAlumnos((prev) => [...prev, creado.data]);
            }

            // ✅ redirige a la tabla
            navigate("/dashboard/estudiantes");
        } else {
            alert("Error al registrar estudiante");
        }
    };


    return (
        <div className="registro-estudiantes">
            <div className="registro-header">
                <h1>Registrar estudiantes</h1>
                <button className="btn-volver" onClick={() => navigate("/dashboard/estudiantes")}>
                    ← Regresar
                </button>
            </div>

            <form className="registro-formulario" onSubmit={handleSubmit}>
                <div className="form-grupo">
                    <label>Nombre completo *</label>
                    <input
                        type="text"
                        name="nombre"
                        required
                        placeholder="Nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-grupo">
                    <label>Sexo *</label>
                    <select
                        name="sexo"
                        required
                        value={formData.sexo}
                        onChange={handleChange}
                    >
                        <option value="">Selecciona</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>

                <div className="form-grupo">
                    <label>Fecha de nacimiento *</label>
                    <input
                        type="date"
                        name="fecha_nacimiento"
                        required
                        value={formData.fecha_nacimiento}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-grupo">
                    <label>Teléfono</label>
                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Teléfono del estudiante"
                        value={formData.telefono}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-grupo">
                    <label>Acudiente</label>
                    <input
                        type="text"
                        name="acudiente"
                        placeholder="Nombre del acudiente"
                        value={formData.acudiente}
                        onChange={handleChange}
                    />
                </div>



                <div className="form-grupo">
                    <label>Tel. Acudiente</label>
                    <input
                        type="tel"
                        name="acudiente_telefono"
                        placeholder="Teléfono del acudiente"
                        value={formData.acudiente_telefono}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-grupo">
                    <label>Dirección</label>
                    <input
                        type="text"
                        name="direccion"
                        placeholder="Dirección de residencia"
                        value={formData.direccion}
                        onChange={handleChange}
                    />
                </div>

                <div className="botones-formulario">
                    <button type="submit" className="btn-guardar">Guardar</button>
                    <button type="button" className="btn-cancelar" onClick={() => navigate("/dashboard/estudiantes")}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegistrarEstudiantes;
