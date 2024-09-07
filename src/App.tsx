import { useState } from 'react'
import Congratulations from './Congratulations.tsx'
import './App.css'

function App() {
  const [isStart, setStart] = useState(0);
  const [isOpen, setOpen] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    if (!isSpinning && isOpen == 0 && isStart < 2) {
      setStart(isStart + 1);
      setIsSpinning(true);

      // Запускаем анимацию вращения
      const wheelWin = document.querySelector('.wheel-win') as HTMLElement; 
      wheelWin.style.animation = 'spin 8s cubic-bezier(0.4, 0, 0.2, 1) forwards'; 

      // Устанавливаем таймер, чтобы анимация остановилась на 1980 градусах
      setTimeout(() => {
        wheelWin.style.animation = ''; // Останавливаем анимацию
        wheelWin.style.transform = 'translateX(-50%)' ; //  Поворачиваем на 1980 градусов
        setIsSpinning(false);
        setOpen(1); // Открываем экран выигрыша
      }, 10000); // 10 секунд - продолжительность анимации
    }
    if (!isSpinning && isOpen == 1 && isStart < 2) {
      setStart(isStart + 1);
      setIsSpinning(true);

      // Запускаем анимацию вращения
      const wheelWin = document.querySelector('.wheel-win') as HTMLElement; 
      wheelWin.style.animation = 'spin2 10s cubic-bezier(0.4, 0, 0.2, 1) forwards'; 

      // Устанавливаем таймер, чтобы анимация остановилась на 1980 градусах
      setTimeout(() => {
        wheelWin.style.animation = ''; // Останавливаем анимацию
        wheelWin.style.transform = 'translateX(-50%) rotate(1980deg)'; //  Поворачиваем на 1980 градусов
        setIsSpinning(false);
        setOpen(2); // Открываем экран выигрыша
      }, 10000); // 10 секунд - продолжительность анимации
    }
  };


  return (
    <div className='main'>
      {isOpen === 1 ? (
        <div className=''>
          <a style={{position:'absolute', zIndex:'20', color:'red', top: '20px'}}>{isStart}</a>
          <a style={{position:'absolute', zIndex:'20', color:'red', right: '20px'}}>{isStart}</a>
          <a style={{position:'absolute', zIndex:'20', color:'red', bottom: '20px'}}>{isStart}</a>
          <Congratulations text='150 FREE SPIN'/>
        </div>
      ) : null}

      {isOpen === 2 ? (
        <div className=''>
          <a style={{position:'absolute', zIndex:'20', color:'red', top: '20px'}}>{isStart}</a>
          <a style={{position:'absolute', zIndex:'20', color:'red', right: '20px'}}>{isStart}</a>
          <a style={{position:'absolute', zIndex:'20', color:'red', bottom: '20px'}}>{isStart}</a>
          <Congratulations text='1500 EUR + 150FS'/>
        </div>
      ) : null}

      <div className='Confeti'>
        <img className='' src="src\assets\конфети.png" alt="blue" />
      </div>
      <a style={{position:'absolute', zIndex:'20', color:'red'}}>{isStart}</a>
      <div className='Logo'>
        <img className='' src="src\assets\Logo.svg" alt="blue" />
      </div>
      <a className='text'>Spin the whell of fortune</a>

      <div className='wheel'>
        <img className='wheel-red' src="src\assets\Wheel-red.png" alt="" />
        <img className='wheel-btn' onClick={handleClick} src="src\assets\Wheel-btn.png" alt="" />
        <img className='wheel-gold' src="src\assets\Wheel-gold.png" alt="" />
        <img className='wheel-win' src="src\assets\Wheel-win.png" alt="" />
      </div>

      <div className='cards'>
        <img className='' src="src\assets\Cards.png" alt="blue" />
      </div>
      <div className='women'>
        <img className='' src="src\assets\Women.png" alt="blue" />
      </div>
      <div className='blue'>
        <img className='' src="src\assets\777.png" alt="blue" />
      </div>
      <div className='table'>
        <img className='' src="src\assets\Red_table.png" alt="table" />
      </div>
      <div className='bg'>
        <img className='bg-img' src="src\assets\BG.png" alt="bg" />
      </div>
    </div>
  )
}

export default App
