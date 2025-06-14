const API_URL = import.meta.env.VITE_API_URL; // o reemplaza manualmente por tu base URL

const obtenerAlumnos = async (token) => {
    try {
        const response = await fetch(`${API_URL}/api/alumnos`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // si tu API requiere token
            },
        });
        
        if (!response.ok) {
            throw new Error("Error al obtener los alumnos");
        }

        return await response.json();
    } catch (error) {
        console.error("Error al obtener alumnos:", error);
        return [];
    }
};

export default obtenerAlumnos;
