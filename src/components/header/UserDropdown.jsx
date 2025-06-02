import { useState, useRef, useEffect } from "react";
import "./UserDropdown.css";

function UserDropdown({ user, onVerPerfil, onCerrarSesion }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div id="avatar" ref={dropdownRef}>
            <img
                src="/image/LGC-green.jpeg"
                alt="avatar"
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer", borderRadius: "9999px" }}
            />
            {isOpen && (
                <div className="dropdown-menu">
                    <p><strong>@{user.userName}</strong></p>
                    <p>{user.nombre}</p>
                    <p className="user-role">{user.rol}</p>
                    <hr />
                    <button onClick={onVerPerfil} className="dropdown-btn">Ver perfil</button>
                    <button onClick={onCerrarSesion} className="dropdown-btn">Cerrar sesión</button>
                </div>
            )}
        </div>
    );
}

export default UserDropdown;
