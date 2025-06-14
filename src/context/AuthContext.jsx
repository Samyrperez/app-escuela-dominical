import { createContext, useContext, useState, useEffect } from "react";

// ⚠️ ESTE objeto es temporal hasta que llegue desde el backend
const usuarioPrueba = {
    id: 1,
    userName: "Sperez",
    nombre: "Sam Pérez",
    rol: "admin", // Cambia a "admin" para probar
};

// Creamos el contexto
const AuthContext = createContext();

// Hook para acceder al contexto desde cualquier componente
export const useAuth = () => useContext(AuthContext);

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // almacena el usuario autenticado
    const [token, setToken] = useState(null);

    // Guardar el usuario y token en localStorage (opcional)
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }
    }, []);

    const login = (userData, token) => {
        // 👇 Le agregamos el rol directamente (temporal hasta que venga del backend)
        const userWithRole = { ...userData, rol: "admin" };

        setUser(userWithRole);
        setToken(token);
        localStorage.setItem("user", JSON.stringify(userWithRole));
        localStorage.setItem("token", token);

        // ✅ Si más adelante el backend devuelve el rol:
        // setUser(userData);
        // localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };




    return (
        <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );
};



