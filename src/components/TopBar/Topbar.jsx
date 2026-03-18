import './Topbar.css'

function Topbar(){
    return (
        <div className="top-bar">
            <div className="logo-area">
                ALYNE<span style={{color: "var(--primary)"}}>LABS</span>
            </div>
            
            <div className="menu-toggle" id="mobile-menu">
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className="nav-links" id="nav-links">
                <a href="#vision" className="nav-item">Vision</a>
                <a href="#protocol" className="nav-item">Protocol</a>
                <a href="#economy" className="nav-item">Economy</a>
                <a href="#download" className="nav-btn">AlyneNet</a>
            </div>
        </div>
    )
}

export default Topbar