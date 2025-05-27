
import AccesoRapido from "../components/accesoRapido/accesoRapido";
import Header from "../components/header/Header";
import PanelAdmin from "../components/panelAdministrativo/PanelAdmin";
import "../css/Dashboard.css"


function Dashboard() {
    return (
        <>
            <div className="container-Dashboard">
                <Header/>

                <div className="" id="container-panel">
                    <AccesoRapido/>
                    <PanelAdmin/>

                </div>
                
            </div>
        </>
    )

}

export default Dashboard;