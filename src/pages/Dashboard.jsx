
import Header from "../components/header/Header";
import PanelAdmin from "../components/panelAdministrativo/PanelAdmin";
import "../css/Dashboard.css"

function Dashboard() {
    return (
        <>
            <div className="container-Dashboard">
                <Header/>
                <div className="contentPanel">
                    <PanelAdmin/>
                </div>
                
            </div>
        </>
    )

}

export default Dashboard;