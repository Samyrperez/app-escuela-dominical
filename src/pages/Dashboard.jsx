
import MenuNavigation from "../components/accesoRapido/menuNavigation";
import Header from "../components/header/Header";
import PanelAdmin from "../components/panelAdministrativo/PanelAdmin";
import "../css/Dashboard.css"

// import { rolPermisos } from "../constants/rolesPermisos";


function Dashboard() {
    // simulación
    const user = {
        userName: "Sperez",
        nombre: "Sam Pérez",
        rol: "Maestro"
    };

    return (
        <>
            <div className="container-Dashboard">
                <div className="conatiner-header-menu">
                    <div className="container-header-movil">
                        <Header user={user} />
                    </div>
                    <div className="container-menu-desktop">
                        <MenuNavigation rol={user.rol} className="menu-navigation-desktop" />
                    </div>

                </div>


                <div className="container-panel" id="">

                    <div className="container-header-desktop">
                        <Header user={user} />
                    </div>

                    <div className="container-menu-movil">
                        <MenuNavigation rol={user.rol}
                        className="menu-navigation-movil" />
                    </div>

                    <div className="container-panelAdmin-dashboard">
                        <PanelAdmin rol={user.rol} />
                    </div>

                </div>

            </div>
        </>
    )

}

export default Dashboard;