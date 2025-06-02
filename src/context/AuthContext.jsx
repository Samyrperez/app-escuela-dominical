import { createContext, useContext } from "react";

// ⚠️ ESTE objeto es temporal hasta que llegue desde el backend
const usuarioPrueba = {
    id: 1,
    userName: "Sperez",
    nombre: "Sam Pérez",
    rol: "maestro", // Cambia a "admin" para probar
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ usuario: usuarioPrueba }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);
export default useAuth;
