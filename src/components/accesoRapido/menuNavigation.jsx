import "../accesoRapido/menuNavigation.css";
import useAuth from "../../context/AuthContext";
import tienePermiso from "../../constants/rolesPermisos";

const secciones = [
    { id: "estudiantes", label: "Estudiantes", icon: "/image/studens.svg" },
    { id: "periodos", label: "Periodos", icon: "/image/period.svg" },
    { id: "maestros", label: "Maestros", icon: "/image/teacher.svg" },
    { id: "cursos", label: "Cursos", icon: "/image/cours.svg" },
    { id: "lecciones", label: "Lecciones", icon: "/image/lessons.svg" },
    { id: "asistencias", label: "Asistencias", icon: "/image/assists.svg" },
    { id: "salones", label: "Salones", icon: "/image/classroom.svg" },
    { id: "reportes-estadisticas", label: "Reportes y estadísticas", icon: "/image/reports-statistics.svg" },
    { id: "gestor-usuario", label: "Gestor de usuario", icon: "/image/user.svg" },
];


function MenuNavigation() {
    const { usuario } = useAuth();

    return (
        <div className="container-acceso-rapido">
            <nav className="menu-principal">
                <ul>
                    {secciones.map((sec) =>
                        tienePermiso(usuario.rol, sec.id) ? (
                            <li key={sec.id}>
                                <a href="#">
                                    <img src={sec.icon} alt={sec.label} /> {sec.label}
                                </a>
                            </li>
                        ) : null
                    )}
                </ul>
            </nav>
        </div>
    );
}


export default MenuNavigation;
