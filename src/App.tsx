import { useEffect, useState } from "react";

import Confeti from "/конфети.png";
import WheelRed from "/Wheel-red.png";
import WheelBtn from "/Wheel-btn.png";
import WheelGold from "/Wheel-gold.png";
import WheelWin from "/Wheel-win.png";
import WheelWinCA from "/Wheel-winCA.png";
import Cards from "/Cards.png";
import Women from "/Women.png";
import Blue from "/777.png";
import Table from "/Red_table.png";
import Logo from "/Logo.svg";
import BG from "/BG.png";
import Congratulations from "./Congratulations.tsx";
import Moneys from "/Moneys.png";
import "./App.css";

function App() {
  const [isStart, setStart] = useState(0);
  const [isOpen, setOpen] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [countryCode, setCountryCode] = useState("");

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

  useEffect(() => {
    async function fetchCountryCode() {
      const res = await fetch("http://ip-api.com/json/?fields=61439"); // Поменяй IP-адрес тут или будет браться стандартный
      const data = await res.json();
      setCountryCode(data.countryCode);
    }

    fetchCountryCode();
  }, []);

  return (
    <div className="main">
      {isOpen === 1 ? (
        <div className="pop-up_text">
          <Congratulations text="150 FREE SPIN" />
        </div>
      ) : null}

      {isOpen === 2 ? (
        <div className="pop-up_text">
          <Congratulations
            text={
              countryCode === "CA" ? "2170 CAD + 150FS" : "1500 EUR + 150FS"
            }
          />
        </div>
      ) : null}

      <div className="Confeti">
        <img className="" src={Confeti} alt="blue" />
      </div>
      <div className="Logo">
        <img className="" src={Logo} alt="blue" />
      </div>
      <a className="text">Spin the whell of fortune</a>

      <div className="wheel-fix">
        <div className="wheel">
          <img className="wheel-red" src={WheelRed} alt="" />
          <img
            className="wheel-btn"
            src={WheelBtn}
            onClick={handleClick}
            alt=""
          />
          <img className="wheel-gold" src={WheelGold} alt="" />
          {countryCode === "CA" ? (
            <img className="wheel-win" src={WheelWinCA} alt="" />
          ) : (
            <img className="wheel-win" src={WheelWin} alt="" />
          )}
        </div>
      </div>

      <div className="cards">
        <img className="" src={Cards} alt="blue" />
      </div>
      <div className="women">
        <img className="" src={Women} alt="blue" />
      </div>
      <div className="blue">
        <img className="" src={Blue} alt="blue" />
      </div>
      <div className="table">
        <img className="" src={Table} alt="table" />
      </div>
      <div className="bg">
        <img className="bg-img" src={BG} alt="bg" />
      </div>
      <div className="moneys">
        <img src={Moneys} alt="" />
      </div>
    </div>
  );
}

export default App;
