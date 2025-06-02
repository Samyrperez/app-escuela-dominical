import { useEffect, useState } from "react";
import "../header/header.css";
import UserDropdown from "../header/UserDropdown"; 

function Header({user}) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const handleVerPerfil = () => {
        console.log("Ver perfil");
    };

    const handleCerrarSesion = () => {
        console.log("Cerrar sesión");
    };

    return (
        <div className="container-header">
            <div id="container-logo">
                <img src="/image/LGC-icon-green.png" alt="Logo-LGC" />
                <h1>ED LGC</h1>
            </div>

            <div className="conatiner-info-header">
                <input type="text" id="find" placeholder="Buscar en el sistema" />

                <div id="container-actionIcons">
                    <div className="notification">
                        <img src="/image/notifications.svg" alt="notificaciones" />
                    </div>

                    <div id="mode">
                        <button onClick={toggleDarkMode}>
                            {isDarkMode ? (
                                <img src="/image/mode-light.svg" alt="modo claro" />
                            ) : (
                                <img src="/image/mode-dark.svg" alt="modo oscuro" />
                            )}
                        </button>
                    </div>

                    <UserDropdown
                        user={user}
                        onVerPerfil={handleVerPerfil}
                        onCerrarSesion={handleCerrarSesion}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
