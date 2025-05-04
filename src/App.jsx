import { useEffect, useState } from "react";
import "./App.css";
export const App = () => {
  const [timer, setTimer] = useState(0);

  const [running, setRunning] = useState(false);
 
  useEffect(() => {
    if (running) {
    const intervalId = setInterval(() => {
      setTimer((x) => x+1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      
    }
  }

  }, [running]);

  const makeShow = (x) => {
    let res;
    if (x < 10) {
      res = `0${x}`;
    } else {
      res = `${x}`;
    }
    return res;
  };
  const sec = makeShow(timer  %  60);
  const min = makeShow(((timer-sec)/60) % 60);
  const hour = makeShow((((timer-sec)/60) - min) / 60);

  const imgobj = (<img src="../omoro.jpg" width={150}/>);

  const Start = () => {
    setRunning(true);
  }
  const Stop = () => {
    setRunning(false);
  }
  return (
    <>
      <div className="bg-red-100 flex flex-col items-center pt-30 h-[100vh]">
        <div className="flex flex-row gap-6 h-[20vh] mb-10">
          <h1 className="text-9xl font-serif font-semibold ">Im......</h1>
          {timer%2 == 0 ? (
            <div className="justify-center items-center text-9xl h-[20vh] shadow-amber-700 shadow-xl rounded-3xl">
              💩
            </div>
          ) : (imgobj)}
          </div>
        
        <h2 className="text-7xl font-bold font-serif text-amber-800 text-shadow-amber-400 text-shadow-2xs">{hour}:{min}:{sec}</h2>
        <div className="flex flex-row gap-5">
          <button className="btn" onClick={() => Start()}>Start💩</button>

          <button className="btn" onClick={() => Stop()}>Stop💩</button>

          <button className="btn" >Resetはできないよ！💩

          </button>
        </div>
      </div>


      
    </>
  );
};
