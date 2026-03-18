import './Home.css';

function Home() {
  return (
    <div className="hero-box">
      <div className="hero-content">
        <div className="label-tag">Decentralized Peer-to-Peer</div>
        <h1>
          Building the Future <br /> of 
          <span style={{ color: "var(--primary)" }}> Communication</span>.
        </h1>
        <p>
          Decentralized, Private, and Untethered. A self-sustaining network that can operate offline, empowering communities with true digital independence.
        </p>
        <div className="btn-container">
          <a href="#download">
            <button className="main-btn">Download Module</button>
          </a>
          <a href="#vision">
            <button className="sec-btn">Explore Vision</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home

