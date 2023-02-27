import { useState, useEffect } from 'react';
function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <span className="btn font-monospace fs-6" style={{"background-color":"tomato","color":"white"}}>
      {date.toLocaleTimeString()}

    </span>
  );
}
export default Clock;