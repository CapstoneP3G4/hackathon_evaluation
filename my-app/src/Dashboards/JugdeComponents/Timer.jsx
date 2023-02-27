
import React from 'react';
import { useState, useEffect } from 'react';

// const Timer = () => {
//   const [days, setDays] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);

//   const deadline = "February, 25, 2023";

//   const getTime = () => {
//     const time = Date.parse(deadline) - Date.now();

//     setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
//     setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
//     setMinutes(Math.floor((time / 1000 / 60) % 60));
//     setSeconds(Math.floor((time / 1000) % 60));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => getTime(deadline), 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="timer">
//         this is timer
//     </div>
//   );
// };

// export default Timer;


//Mahak's Code


const Timer = () => {

  const [seconds,setSeconds] = useState(59);
  const [minutes,setMinutes] = useState(2);

  var timer;

  useEffect(() => {

    timer = setInterval(()=>{
      setSeconds(seconds-1);
      if(seconds===0){
        setMinutes(minutes-1);
        setSeconds(59);
      }
    },400)

    return() => clearInterval(timer);

  });
  

  return(

    <div classname = "timer">
    <div classname = "container">
    <div classname = "timer_container">

      <h6>{minutes<10? "0"+minutes : minutes}:{seconds<10? "0"+seconds:seconds}</h6>
    
    </div>
    </div>
    </div>

  )
}

export default Timer;