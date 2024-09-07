import { useState } from "react"
import Cards from "/images/Cards.png"
import "./Congratulations.css"

interface TextProps {
    text: string; // Интерфейс с текстовым пропсом "message"
  }    

const Congratulations: React.FC<TextProps> = ({ text }) => {  

    const [isOpen, setOpen] = useState(0);
    const handleClick = () => {
        setOpen(isOpen + 1);
    }

    return (
      <div>
        {isOpen === 0 ? 
        (
            <div className="Cong-bg">
                <div className='Cong-cards'>
                    <img className='' src={Cards} alt="blue" />
                </div>
                <div className='Cong-money'>
                    <img className='' src="/images/Money.png" alt="blue" />
                </div>
                <div className='Cong-coin'>
                    <img className='' src="/images/Coin.png" alt="blue" />
                </div>
                <div className="Congratulations">
                    <span className="Cong-title">CONGRATULATIONS</span>
                <div className="Cong-win">
                <span className="Cong-text">
                    YOU WIN
                </span>
                <span className="Cong-text2">
                    {text}
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
  
