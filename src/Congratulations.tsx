import { useState } from "react";
import "./Congratulations.css"

const Congratulations = () => {

    const [isOpen, setOpen] = useState(0);
    const handleClick = () => {
        setOpen(isOpen + 1);
    }

    return (
      <div>
        {isOpen === 0 ? 
        (
            <div className="Cong-bg">
                <div className="Congratulations">
                    <span className="Cong-title">CONGRATULATIONS</span>
                <div className="Cong-win">
                <span className="Cong-text">
                    YOU WIN
                </span>
                <span className="Cong-text2">
                    150 FREE SPIN
                </span>
                </div>
                <button className="Cong-btn">
                    <span className="Cong-btn-text" onClick={handleClick}>CONTINUE</span> 
                </button>
            </div>
            </div>
            )
            :
            null
            }
        </div>
        )
  }
  
export default Congratulations
  
