import { useNavigate } from "react-router-dom";
import "./RegistrarEstudiantes.css";

function RegistrarEstudiantes() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica para guardar el estudiante
        console.log("Estudiante registrado");
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
                    <input type="text" required placeholder="Nombre completo" />
                </div>

                <div className="form-grupo">
                    <label>Sexo *</label>
                    <select required>
                        <option value="">Selecciona</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>

                <div className="form-grupo">
                    <label>Fecha de nacimiento *</label>
                    <input type="date" required placeholder="Fecha de nacimiento"/>
                </div>

                <div className="form-grupo">
                    <label>Acudiente </label>
                    <input type="text" placeholder="Nombre dle acudiente" />
                </div>

                <div className="form-grupo">
                    <label>Teléfono </label>
                    <input type="tel"  placeholder="Telefono del acudiente"/>
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
