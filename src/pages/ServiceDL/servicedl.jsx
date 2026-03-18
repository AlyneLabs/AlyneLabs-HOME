import './servicedl.css'
import DLcardB from './../../components/DLcard/dlcard.jsx'

function ServiceDL(){
    return(
        <div className="footer-area f-a2" id="download">
            <div className="label-tag">ALYNENET Services</div>
            <div className="section-head">
                <h2>DOWNLOAD OUR EXCLUSIVE SERVICES <span style={{color: "var(--primary)"}}>POWERED BY ALYNENET</span></h2>
            </div>
            <p className="footer-desc">Experience The Future Of Networking Services.</p>
            
            <div className="download-grid">
                <DLcardB 
                    title = "AlyneChat"
                    desc = "Decentralized p2p Communication"
                    active="true"
                />
                <DLcardB 
                    title = "AlyneChat"
                    desc = "Decentralized p2p Communication"
                    active="true"
                />
                <DLcardB 
                    title = "AlyneChat"
                    desc = "Decentralized p2p Communication"
                    active="true"
                />
                <DLcardB 
                    title = "AlyneChat"
                    desc = "Decentralized p2p Communication"
                    active="true"
                />
            </div>

            <div className="bottom-note">
                Decentralized. Private. Resilient. | Powered by AlyneLabs
            </div>
        </div>
    )
}

export default ServiceDL