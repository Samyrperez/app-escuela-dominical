
import MenuNavigation from "../components/accesoRapido/MenuNavigation";
import Header from "../components/header/Header";
import PanelAdmin from "../components/panelAdministrativo/PanelAdmin";
import "../css/Dashboard.css"
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";



function Dashboard() {
    const { user } = useAuth();
    const location = useLocation();
    const estaEnSubRuta = location.pathname.startsWith("/dashboard/") && location.pathname !== "/dashboard";

    if (!user) return null;


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


                <div className="container-panel">

                    <div className="container-header-desktop">
                        <Header user={user} />
                    </div>

                    <div className="container-menu-movil">
                        <MenuNavigation rol={user.rol}
                            className="menu-navigation-movil" />
                    </div>

                    <div className="container-panelAdmin-dashboard">
                        {estaEnSubRuta ? (
                            <details className="panel-admin-desplegable">
                                <summary>
                                    {/* <img src="/image/menu.svg" alt="Panel" /> */}
                                    Panel administrativo
                                    <span className="caret-icon">▼</span>
                                </summary>
                                <PanelAdmin rol={user.rol} />
                            </details>

                        ) : (
                            <div className="panel-admin-fijo">
                                <PanelAdmin rol={user.rol} />
                            </div>
                        )}

                        <div className="contenido-dinamico">
                            <Outlet />
                        </div>
                    </div>


                </div>

            </div>
        </>
    )

}

export default Dashboard;