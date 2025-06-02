import "../accesoRapido/menuNavigation.css";

function MenuNavigation() {
    return (
        <div className="container-acceso-rapido" >
            <nav className="menu-principal" >
                <ul>
                    <li><a href="#"><img src="/image/studens.svg" alt="" /> Estudiantes</a></li>
                    <li><a href="#"><img src="/image/period.svg" alt="" /> Periodos</a></li>
                    <li><a href="#"><img src="/image/teacher.svg" alt="" /> Maestros</a></li>
                    <li><a href="#"><img src="/image/cours.svg" alt="" /> Cursos</a></li>
                    <li><a href="#"><img src="/image/lessons.svg" alt="" /> Lecciones</a></li>
                    <li><a href="#"><img src="/image/assists.svg" alt="" /> Asistencias</a></li>
                    <li><a href="#"><img src="/image/classroom.svg" alt="" /> Salones</a></li>
                    <li><a href="#"><img src="/image/reports-statistics.svg" alt="" /> Reportes y estadísticas</a></li>
                    <li><a href="#"><img src="/image/user.svg" alt="" /> Gestor de usuario</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuNavigation;
