import { useState } from "react";
import "../css/Login.css";

function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Usuario:", usuario);
        console.log("Password:", password);
    };

    return (
        <div className="login-container h-screen flex items-center justify-center">
            <form className="login-form p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-semibold mb-6 text-center">Iniciar Sesión</h1>

                <div className="flex flex-col gap-4">
                    <input
                        className="login-input"
                        type="text"
                        name="usuario"
                        placeholder="Ingresar usuario"
                        required
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <input
                        className="login-input"
                        type="password"
                        name="password"
                        placeholder="Ingresar contraseña"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="login-button" type="submit">
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
