import './dlcard.css'
import handleDownload from './../../utils/downloader.jsx'

const DLcardA = ({os, title, desc, path, rename, active}) => {
    const extensions = {
        ios: ".ipa",
        android: ".apk",
        windows: ".exe",
        mac: ".dmg"
    };

    return(
        <div className={`dl-card ${active?"active-box":""}`}>
            <i className={`fa-brands fa-${os.toLowerCase()}`} style={{fontSize: "3rem", color: "var(--primary)", marginBottom: "0.01rem"}}></i>
            <h3>{os}</h3>
            <h2>{title}</h2>
            <p style={{color: "#888", fontSize: "0.9rem"}}>{desc}</p>
            <button className="dl-btn" onClick={handleDownload(path, rename)}>{`Download ${extensions[os.toLowerCase()] || ""}`}</button>
        </div>
    )

}

const DLcardB = ({title, desc, active}) => {

    return(
        <div className={`dl-card dlc-2 ${active?"active-box":""}`}>
            <h1>{title}</h1>
            <p style={{color: "#888", fontSize: "0.9rem"}}>{desc}</p>
            
        </div>
    )

}

export {DLcardA,DLcardB};

