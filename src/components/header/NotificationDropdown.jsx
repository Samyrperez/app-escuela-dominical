import { useState, useRef, useEffect } from "react";
import "./NotificationDropdown.css";

function NotificationDropdown() {
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
        <div className="notification-wrapper" ref={dropdownRef}>
            <div
                className="notification"
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer" }}
            >
                <img src="/image/notifications.svg" alt="notificaciones" />
            </div>
            {isOpen && (
                <div className="notification-dropdown">
                    <p>No hay notificaciones por ahora.</p>
                </div>
            )}
        </div>
    );
}

export default NotificationDropdown;
