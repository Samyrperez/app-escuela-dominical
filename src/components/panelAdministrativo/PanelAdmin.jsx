import "../panelAdministrativo/panelAdmin.css";

function PanelAdmin(){
    return (
        <div id="container-panelAdministrativo" className="">

            <div className="" id="estudiantes">
                <h2>Estudiantes</h2>
                <img src="/image/studens.svg" alt="" />
            </div>

            <div className="" id="periodos">
                <h2>Periodos</h2>
                <img src="/image/period.svg" alt="" />
            </div>

            <div className="" id="maestros">
                <h2>Maestros</h2>
                <img src="/image/teacher.svg" alt="" />
            </div>

            <div className="" id="cursos">
                <h2>Cursos</h2> 
                <img src="/image/cours.svg" alt="" />
            </div>

            <div className="" id="lecciones">
                <h2>Lecciones</h2>
                <img src="/image/lessons.svg" alt="" /> 
            </div>

            <div className="" id="asistencias">
                <h2>Asistencias</h2> 
                <img src="/image/assists.svg" alt="" /> 
            </div>

            <div className="" id="reportes-estadisticas">
                <h2>Reportes y estadisticas</h2> 
                <img src="/image/reports-statistics.svg" alt="" /> 
            </div>

            <div className="" id="salones">
                <h2>Salones</h2> 
                <img src="/image/classroom.svg" alt="" /> 
            </div>

        </div>
    )
}

export default PanelAdmin;