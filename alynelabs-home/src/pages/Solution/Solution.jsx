import "./Solution.css";
import CheckList from "./../../components/CheckList/checklist.jsx";

function Solution(){
    const features = [
        "Censorship-Resistant",
        "Infrastructure-Free",
        "Privacy-First Encryption",
        "Scalable Architecture"
    ];
    return(
        <div className="split-section">
        <div className="text-side">
            <h2>Our Solution: <br/><span style={{color: "var(--primary)"}}>Offline Mesh</span> Network</h2>
            <p>
                A peer-to-peer system that works completely without the internet for short distances. Devices connect directly, creating a resilient, self-healing layer.
            </p>
            <CheckList items={features}/>
        </div>
        <div className="visual-side">
            <div className="circle-box">
                <div className="pulse-ring"></div>
                <i className="fa-solid fa-circle-nodes main-icon"></i>
            </div>
        </div>
    </div>
    )
}

export default Solution