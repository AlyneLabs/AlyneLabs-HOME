import './stepbox.css'

const StepBox = ({num, title, desc, active = false}) => {
    return(
        <div className={`step-box ${active ? "active-step":""}`}>
                <div className="step-num">{num}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
        </div>
    )
}

export default StepBox