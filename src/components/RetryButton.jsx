import { useState, useEffect } from 'react';

const RetryButton = () => {
  const [countdown, setCountdown] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const handleRetry = () => {
    setCountdown(53);
    setDisabled(true);
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    if (countdown === 0) {
      setDisabled(false);
    }
  }, [countdown]);


  return (
    <div>
      <button 
        onClick={handleRetry} 
        disabled={disabled}
        className='retryin53s'
      >
        {countdown === 0 ? 'Retry in 53s' : `Retry in ${countdown}s`}
      </button>
    </div>
  );
};

export default RetryButton;
