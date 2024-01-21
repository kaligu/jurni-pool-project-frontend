import { useEffect } from 'react';
import image from '../assets/loadgif.gif';

import LinearProgress from '@mui/material/LinearProgress';

function FullLoadScreen() {
  useEffect(() => {
    // Disable scroll and touch events when the component mounts
    const disableScrollAndTouch = () => {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    };

    // Enable scroll and touch events when the component unmounts
    const enableScrollAndTouch = () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };

    disableScrollAndTouch();

    return () => {
      enableScrollAndTouch();
    };
  }, []);

  return (
    <>
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm">
      <div className='flex flex-col items-center'>
        <div>
          <img
            className="h-44 w-15 rounded-full "
            src={image}
            alt="loading gif"
          />
          <LinearProgress className='w-full mt-10' />
        </div>
      </div>
    </div>
    </>
  );
}

export default FullLoadScreen;
