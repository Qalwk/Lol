import { useEffect, useState } from "react";

// import WheelWinCA from "/Wheel-winCA.png";

// import Confeti from "/конфети.png";
// import WheelRed from "/Wheel-red.png";
// import WheelBtn from "/Wheel-btn.png";
// import WheelGold from "/Wheel-gold.png";
// import WheelWinPL from "/WheelWinPL.png";
// import Cards from "/Cards.png";
// import Women from "/Women.png";
// import Blue from "/777.png";
// import Table from "/Red_table.png";
// import Logo from "/Logo.svg";
// import BG from "/BG.png";
// import Moneys from "/Moneys.png";

import Congratulations from "./Congratulations.tsx";
import "./App.css";

function App() {
  const [isStart, setStart] = useState(() => {
    // Загружаем состояние из локального хранилища
    const savedState = localStorage.getItem('isStart');
    return savedState ? JSON.parse(savedState) : 0; // Возвращаем 0, если нет сохраненного состояния
  });
  const [isOpen, setOpen] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    // Сохраняем состояние в локальном хранилище при изменении isStart
    localStorage.setItem('isStart', JSON.stringify(isStart));
  }, [isStart]);

  const handleClick = () => {
    if (!isSpinning && isOpen == 0 && isStart < 2) {
      setStart(isStart + 1);
      setIsSpinning(true);

      // Запускаем анимацию вращения
      const wheelWin = document.querySelector(".wheel-win") as HTMLElement;
      wheelWin.style.animation =
        "spin 8s cubic-bezier(0.4, 0, 0.2, 1) forwards";

      // Устанавливаем таймер, чтобы анимация остановилась на 1980 градусах
      setTimeout(() => {
        wheelWin.style.animation = ""; // Останавливаем анимацию
        wheelWin.style.transform = "translateX(-50%)"; //  Поворачиваем на 1980 градусов
        setIsSpinning(false);
        setOpen(1); // Открываем экран выигрыша
      }, 10000); // 10 секунд - продолжительность анимации
    }
    if (!isSpinning && isOpen == 1 && isStart < 2) {
      setStart(isStart + 1);
      setIsSpinning(true);

      // Запускаем анимацию вращения
      const wheelWin = document.querySelector(".wheel-win") as HTMLElement;
      wheelWin.style.animation =
        "spin2 10s cubic-bezier(0.4, 0, 0.2, 1) forwards";

      // Устанавливаем таймер, чтобы анимация остановилась на 1980 градусах
      setTimeout(() => {
        wheelWin.style.animation = ""; // Останавливаем анимацию
        wheelWin.style.transform = "translateX(-50%) rotate(1980deg)"; //  Поворачиваем на 1980 градусов
        setIsSpinning(false);
        setOpen(2); // Открываем экран выигрыша
      }, 10000); // 10 секунд - продолжительность анимации
    }
  };

  // Language prefer settings

  const userLanguage = navigator.language;
  let spinText, continueText, spinMoreText, congratsFirstText, congratsSecondText, handleCl, handleCl2;

  if (userLanguage.startsWith('pl')) {
    spinText = "Zakręć kołem fortuny";
    continueText = "KONTYNUUJ";
    spinMoreText = "SPINUJ WIĘCEJ";
    congratsFirstText = "150 DARMOWY SPIN";
    congratsSecondText = "1500 EUR + 150FS";
    handleCl = "handleClick";
    handleCl2 = "handleClick2"
  } else if (userLanguage.startsWith('ru')) {
    spinText = "Вращайте колесо фортуны";
    continueText = "ПРОДОЛЖИТЬ";
    spinMoreText = "ВРАЩАТЬ ЕЩЕ";
    congratsFirstText = "150 FREE SPINS";
    congratsSecondText = "1500 EUR + 150FS";
    handleCl = "handleClick";
    handleCl2 = "handleClick2"
  } else if (userLanguage.startsWith('es')) {
    spinText = "Gira la rueda de la fortuna";
    continueText = "CONTINÚE";
    spinMoreText = "GIRAR MÁS";
    congratsFirstText = "150 FREE SPINS";
    congratsSecondText = "1500 EUR + 150FS";
    handleCl = "handleClick";
    handleCl2 = "handleClick2"
  } else if (userLanguage.startsWith('pt')) {
    spinText = "Girar a roda da fortuna";
    continueText = "CONTINUAR";
    spinMoreText = "GIRAR MAIS";
    congratsFirstText = "150 FREE SPINS";
    congratsSecondText = "1500 EUR + 150FS";
    handleCl = "handleClick";
    handleCl2 = "handleClick2"
  } 
  else  {
    spinText = "Spin the wheel of fortune";
    continueText = "CONTINUE";
    spinMoreText = "SPIN MORE";
    congratsFirstText = "150 FREE SPINS";
    congratsSecondText = "1500 EUR + 150FS";
    handleCl = "handleClick";
    handleCl2 = "handleClick2"
  }

  return (
    <div className="main">
      {isOpen === 1 ? (
        <div className="pop-up_text" onClick={handleClick}>
          <Congratulations text={congratsFirstText} actionButtonText={spinMoreText} handleCl={handleCl} />
        </div>
      ) : null}

      {isOpen === 2 ? (
        <div className="pop-up_text">
          <Congratulations text={congratsSecondText} actionButtonText={continueText} handleCl={handleCl2} />
        </div>
      ) : null}

      <div className="Confeti">
        <img className="" src="конфети.png" alt="blue" />
      </div>
      <div className="Logo">
        <img className="" src="Logo.svg" alt="blue" />
      </div>
      <a className="text">{spinText}</a>

      <div className="wheel-fix">
        <div className="wheel">
          <img className="wheel-red" src="Wheel-red.png" alt="wheel-red" />
          <img
            className="wheel-btn"
            src="Wheel-btn.png"
            onClick={handleClick}
            alt="wheel-btn"
          />
          <img className="wheel-gold" src="Wheel-gold.png" alt="wheel-gold" />
          <img className="wheel-win" src="Wheel-win.png" alt="wheel-win" />
        </div>
      </div>

      <div className="cards">
        <img className="" src="Cards.png" alt="blue" />
      </div>
      <div className="women">
        <img className="women-image" src="Women.png" alt="blue" />
      </div>
      <div className="blue">
        <img className="" src="777.png" alt="blue" />
      </div>
      <div className="table">
        <img className="" src="Red_table.png" alt="table" />
      </div>
      <div className="bg">
        <img className="bg-img" src="BG.png" alt="bg" />
      </div>
      <div className="moneys">
        <img src="Moneys.png" alt="moneys" />
      </div>
    </div>
  );
}

export default App;
