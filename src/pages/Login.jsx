import { useState } from "react";
import "../App.css";



function Login() {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Usuario: ", usuario);
        console.log("Password: ", password);
    };


    return (
        <div id="container-form-login" className="h-screen flex items-center justify-center bg-gray-100">
            <form id="form-login" className="bg-white p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>

                <h1 className="text-2xl font-semibold mb-6 text-center">Iniciar Sesión</h1>

                <div className="flex flex-col gap-4">
                    <input
                        className="border border-gray-300 p-2 rounded"
                        type="text"
                        name="usuario"
                        placeholder="Ingresar usuario"
                        required
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <input
                        className="border border-gray-300 p-2 rounded"
                        type="password"
                        name="password"
                        placeholder="Ingresar contraseña"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" type="submit">
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
    );
}


export default Login;