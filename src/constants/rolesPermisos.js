
export const rolPermisos = {
    admin: ["estudiantes", "periodos", "maestros", "cursos", "lecciones", "asistencias", "reportes-estadisticas", "salones"],
    maestro: ["lecciones", "asistencias", "reportes-estadisticas"],
    // estudiante: ["lecciones", "asistencias"]
};

const tienePermiso = (rol, seccion) => {
    return rolPermisos[rol]?.includes(seccion);
};
export default tienePermiso;
