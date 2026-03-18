import './Moduledl.css'
import DLcardA from './../../components/DLcard/dlcard.jsx'

function ModuleDL(){
    return(
        <div className="footer-area" id="download">
            <div className="label-tag">Download ALYNENET Module</div>
            <h2>Join the <span style={{color: "var(--primary)"}}>Movement</span></h2>
            <p className="footer-desc">Digital sovereignty starts with a single node. Download the module.</p>
            
            <div className="download-grid">
                <DLcardA 
                    os = "IOS"
                    title = "ALYNENET"
                    desc = "Mobile Mnemonic Node for IOS."
                    path = ""
                    rename = ""
                />
                <DLcardA 
                    os = "ANDROID"
                    title = "ALYNENET"
                    desc = "Mobile Mnemonic Node for android OS."
                    path = ""
                    rename = ""
                    active = "true"
                />                
            </div>
        </div>
        )
}

export default ModuleDL