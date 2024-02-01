import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [animationText, setAnimationText] = useState('吸って！');
  const [containerClass, setContainerClass] = useState('container grow');

  const totalTime = 18000; // 18s in total
  const breatheTime = 5000; // 5s
  const holdTime = 6000; // 6s
  //const exhaleTime = 7000; // 7s

  useEffect(() => {
    const interval = setInterval(() => {
      breatheAnimation();
    }, totalTime);

    return () => clearInterval(interval);
  }, []);

  function breatheAnimation() {
    console.log('start');
    setAnimationText('吸って！');
    setContainerClass('container grow');

    setTimeout(() => {
      setAnimationText('止めて！');

      setTimeout(() => {
        setAnimationText('吐いて！');
        setContainerClass('container shrink');
      }, holdTime); // 5s (breatheTime) + 6s (holdTime) = 11s elapsed, then exhale
    }, breatheTime); // 5s elapsed, then hold
  }



  return (
    <div className='app'>
      <h1 className='title'>Yuta's Mediation app 瞑想アプリ</h1>
      <div className={containerClass} id='container'>
        <div className="circle"></div>
        <p className="text">{animationText}</p>
        <div className="pointer-container">
        <div className="pointer"></div>
        </div>
        <div className="outer-circle"></div>
      </div>
      <div className='explain'>
        <h2>5秒吸って、6秒止めて、7秒吐きます</h2>
        <h2>Inhale for 5 seconds, hold for 6 seconds, exhale for 7 seconds</h2>
        <h2>5 Sekunden einatmen, 6 Sekunden halten, 7 Sekunden ausatmen</h2>
      </div>
    </div>
  );
}

export default App;
