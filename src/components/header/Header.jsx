import { useEffect, useState } from "react";
// import ModeDark from "../icons/ModeDark";
// import ModeLight from "../icons/ModeLight";
// import Notification from "../icons/Notification";
import "../header/header.css"


function Header() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect (() => {
        if(isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    })

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    };

    return (
        <div className="container-header">
            <div className="" id="container-logo">
                <img src="/image/LGC-icon-green.png" alt="Logo-LGC" />
                <h1>ED LGC</h1>
            </div>
            <div className="conatiner-info-header">
                <input type="text" id="find" placeholder="Buscar en el sistema" 
                    className="" />
                <div className="" id="container-actionIcons">

                    <div className="notification">
                        <img src="/image/notifications.svg" alt="" />
                    </div>

                    <div className="" id="mode">
                        <button onClick={toggleDarkMode}>
                            {isDarkMode ? <img src="/image/mode-light.svg" alt="" /> : <img src="/image/mode-dark.svg" alt="" />}
                        </button>
                    </div>

                    <div className="" id="avatar">
                        <img src="/image/LGC-green.jpeg" alt="avatar" />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )

}

export default Header;

