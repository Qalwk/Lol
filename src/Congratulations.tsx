import { useEffect, useState } from "react";

// import Cards from "/Cards.png";
// import Money from "/Money.png";
// import Coin from "/Coin.png";

import "./Congratulations.css";

interface TextProps {
  text: string;
  actionButtonText: string;
  handleCl: string;
}

// ... rest of the code

const Congratulations: React.FC<TextProps> = ({ text, actionButtonText, handleCl }) => {
  const [isOpen, setOpen] = useState(0);
  const [sumClick, setSumClick] = useState(0); // Теперь это состояние

  const handleClick = () => {
    setSumClick(prev => prev + 1); // Увеличиваем количество кликов
    setOpen(isOpen + 1); // Открываем поп-ап
    console.log(sumClick)
  };
  const handleClick2 = () => {
    window.location.href = "/?_lp=1";
  }

  useEffect(() => {
    const textElement = document.querySelector(".Cong-text2") as HTMLElement;
    if (textElement) {
      textElement.style.wordBreak = "keep-all";
    }
  }, []);

  //Language prefer setings

  const userLanguage = navigator.language;
  let congratulationsText, youWinText;

  if (userLanguage.startsWith("fr")) {
    congratulationsText = "FÉLICITATIONS";
    youWinText = "TU GAGNES";
  } else if (userLanguage.startsWith('de')) {
    congratulationsText = "HERZLICHEN GLÜCKWUNS";
    youWinText = "SIE GEWINNEN";
  } else {
    congratulationsText = "CONGRATULATIONS";
    youWinText = "YOU WIN";
  }

  if (userLanguage.startsWith('pl')) {
    congratulationsText = "GRATULACJE!";
    youWinText = "WYGRAŁEŚ";
  } else if (userLanguage.startsWith('ru')) {
    congratulationsText = "ПОЗДРАВЛЯЕМ!";
    youWinText = "ТЫ ВЫЙГРАЛ";
  } else if (userLanguage.startsWith('es')) {
    congratulationsText = "ENHORABUENA!";
    youWinText = "GANAS";
  } else if (userLanguage.startsWith('pt')) { 
    congratulationsText = "PARABÉNS!";
    youWinText = "Você ganhou";
  } 
  else  {
    congratulationsText = "CONGRATULATIONS!";
    youWinText = "YOU WIN";
  }

  return (
    <div>
      {isOpen === 0 ? (
        <div className="LOL">
          <div className="Cong-bg">
            <div className="Cong-cards">
              <img className="" src="Cards.png" alt="blue" />
            </div>
            <div className="Cong-money">
              <img className="" src="Money.png" alt="blue" />
            </div>
            <div className="Cong-coin">
              <img className="" src="Coin.png" alt="blue" />
            </div>
            <div className="Congratulations">
              <span className="Cong-title">{congratulationsText}</span>
              <div className="Cong-win">
                <span className="Cong-text">{youWinText}</span>
                <span className="Cong-text2">{text}</span>
              </div>
              <button className="Cong-btn">
              <span className="Cong-btn-text" 
                onClick={handleCl == "handleClick" ? handleClick : handleClick2}>
                {actionButtonText}
              </span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Congratulations;
