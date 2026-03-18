import './protocol.css'

function Protocol(){
    return(
        <div className="section-container" id="protocol">
            <div className="section-head">
                <h2><span style={{color: "var(--primary)"}}>IPVX</span> Protocol</h2>
                <p style={{color: "#aaa", fontSize: "1rem", marginTop: "10px"}}>Our proprietary addressing protocol designed for offline mesh networks.</p>
            </div>
            
            <div className="protocol-wrap">
                <div className="proto-text">
                    <h3 style={{marginTop:"0", marginBottom: "2rem", fontSize: "1.5rem"}}>Address Structure</h3>
                    <div className="proto-row">
                        <span style={{color: "var(--primary)"}}>Prefix Byte</span>
                        <span>1 Byte (Address Type)</span>
                    </div>
                    <div className="proto-row">
                        <span style={{color: "var(--primary)"}}>Core Address</span>
                        <span>16 Bytes (Main ID)</span>
                    </div>
                    <div className="proto-row">
                        <span style={{color: "var(--primary)"}}>User Suffix</span>
                        <span>1 Byte (Device Info)</span>
                    </div>
                </div>
                <div className="proto-visual">
                    <h3 style={{marginTop:"0", marginBottom: "2rem", fontSize: "1.5rem"}}>Network Benefits</h3>
                    <ul className="benefit-list">
                        <li><strong>Custom Addressing:</strong> Efficient in high-latency.</li>
                        <li><strong>Hex-Based:</strong> Rapid packet propagation.</li>
                        <li><strong>Scalability:</strong> Dynamic structure.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Protocol