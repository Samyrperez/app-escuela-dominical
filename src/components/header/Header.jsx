import { useEffect, useState } from "react";
import ModeDark from "../icons/ModeDark";
import ModeLight from "../icons/ModeLight";
import Notification from "../icons/Notification";
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
            <div className="container-logo">Logo</div>
            <div className="conatiner-info-header">
                <input type="text" id="find" placeholder="Buscar en el sistema" 
                    className="" />
                <div className="actionIcons">

                    <div className="notification">
                        <Notification />
                    </div>

                    <div className="mode">
                        <button onClick={toggleDarkMode}>
                            {isDarkMode ? <ModeLight/> : <ModeDark/>}
                        </button>
                    </div>

                    <div className="avatar">
                        <img src="" alt="avatar" />
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )

}

export default Header;

