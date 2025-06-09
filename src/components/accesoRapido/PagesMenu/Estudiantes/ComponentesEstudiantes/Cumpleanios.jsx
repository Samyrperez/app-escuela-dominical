import { useState } from "react";
import { estudiantes } from "../../../../../data/dataEstudiantes";
import "../../Estudiantes/ComponentesEstudiantes/Cumpleanios.css";
import { useNavigate } from "react-router-dom";

const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function MesesCumpleanios() {
    const [mesSeleccionado, setMesSeleccionado] = useState(null);
    const [desplegarMeses, setDesplegarMeses] = useState(false);
    const navigate = useNavigate();

    const filtrarPorMes = (mesIndex) => {
        return estudiantes.filter((est) => {
            const fecha = new Date(est.fechaNacimiento);
            return fecha.getMonth() === mesIndex;
        });
    };

    const handleMesClick = (mesIndex) => {
        setMesSeleccionado(mesIndex);
        setDesplegarMeses(false);
    };

    return (
        <div className="container-contenido-meses-cumpleaños">
            <div className="title-cumpleaños">
                <h1>Cumpleaños</h1>
                <button className="btn-volver" onClick={() => navigate("/dashboard/estudiantes")}>
                    ← Regresar
                </button>
            </div>
            <div className="dropdown-meses">
                <button className="boton-desplegable" onClick={() => setDesplegarMeses(!desplegarMeses)}>
                    {mesSeleccionado !== null ? meses[mesSeleccionado] : "Selecciona un mes"}
                </button>
                {desplegarMeses && (
                    <ul className="lista-meses">
                        {meses.map((mes, i) => (
                            <li key={i} onClick={() => handleMesClick(i)}>{mes}</li>
                        ))}
                    </ul>
                )}
            </div>

            {mesSeleccionado !== null && (
                <div className="tabla-mes-container">
                    <table className="tabla-cumpleaños">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Día de Cumpleaños</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtrarPorMes(mesSeleccionado).length > 0 ? (
                                filtrarPorMes(mesSeleccionado).map(est => {
                                    const dia = new Date(est.fechaNacimiento).getDate();
                                    return (
                                        <tr key={est.id}>
                                            <td>{est.nombre}</td>
                                            <td>{dia}</td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="2" className="sin-cumples">Este mes no hay cumpleaños</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default MesesCumpleanios;



