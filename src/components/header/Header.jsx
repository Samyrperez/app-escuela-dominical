import { useTheme } from "../../context/ThemeContext";
import "../header/header.css";
import UserDropdown from "../header/UserDropdown";
import NotificationDropdown from "./NotificationDropdown";

function Header({ user }) {
    const { isDarkMode, toggleDarkMode } = useTheme();


    const handleVerPerfil = () => {
        console.log("Ver perfil");
    };

    const handleCerrarSesion = () => {
        console.log("Cerrar sesión");
    };

    return (
        <div className="container-header">
            <div className="container-logo">
                <img src="/image/logo-1.jpeg" alt="Logo-LGC" />
                <h1>EB LGC</h1>
            </div>

            <div className="conatiner-info-header">
                <input type="text" id="find" placeholder="Buscar en el sistema" />

                <div id="container-actionIcons">
                    <NotificationDropdown />

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
