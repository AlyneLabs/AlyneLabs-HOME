import './infra.css'
import InfoCard from './../../components/InfoCard/infocard.jsx'


function Infra(){
    return(
        <div className="section-container" id="vision">
            <div className="section-head">
                <h2>The Hidden <span style={{color: "var(--primary)"}}>Cost</span> of Centralization</h2>
                <div className="accent-bar"></div>
            </div>
            
            <div className="grid-3">
                <InfoCard
                    icon = "fa-solid fa-user-secret"
                    title = "Privacy Under Siege"
                    desc = "Centralized platforms harvest user data continuously. Surveillance and tracking have become the norm."
                />
                <InfoCard
                    icon = "fa-solid fa-server"
                    title = "Big Tech Dependency"
                    desc = "Corporate-controlled infrastructure creates single points of failure. When platforms fail, everything stops."
                />
                <InfoCard
                    icon = "fa-solid fa-signal"
                    title = "Connectivity Gap"
                    desc = "Remote areas and offline users face complete communication breakdown during ISP outages."
                />
                    
            </div>
        </div>
    )
}

export default Infra