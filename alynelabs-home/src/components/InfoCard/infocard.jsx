import './infocard.css';

const InfoCard = ({icon, title, desc}) => { 
    return(    
        <div className="info-card">
                <i className={icon + ' card-icon'}></i>
                <h3 className="card-head">{title}</h3>
                <p className="card-desc">{desc}</p>
        </div>
    )
}

export default InfoCard

