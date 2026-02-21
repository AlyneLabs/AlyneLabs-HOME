import './Workflow.css'
import StepBox from './../../components/StepBox/stepbox'

function WorkFlow(){
    return(
        <div className="section-container">
            <div className="section-head">
                <h2>System Workflow</h2>
                <p style={{color: "var(--primary)", fontFamily: "var(--font-mono)", fontSize: "0.9rem", marginTop: "10px"}}>From Installation to Connection</p>
            </div>
            <div className="grid-4">
                <StepBox
                    num = "01"
                    title = "App Installation"
                    desc = "Internet used only once to download. Operates offline after."
                />
                <StepBox
                    num = "02"
                    title = "Wallet Creation"
                    desc = "Mnemonic phrases generate unique cryptographic keys."
                />
                <StepBox
                    num = "03"
                    title = "Ping Server"
                    desc = "Brief connection to register and generate IPVX address."
                />
                <StepBox
                    num = "04"
                    title = "Offline Mesh"
                    desc = "Devices connect peer-to-peer using IPVX addressing."
                    active = "true"
                />
            </div>
        </div>
    )
}

export default WorkFlow