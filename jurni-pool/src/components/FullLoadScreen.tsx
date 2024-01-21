import { useEffect } from 'react';
import image from '../assets/loadgif.gif';
import CircularProgress from '@mui/material/CircularProgress';

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
<div className="absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm">
  <div className="text-center relative"> {/* Added relative class */}
    <img
      className="h-40 w-15 rounded-full top-0 left-10"
      src={image}
      alt="loading gif"
    />
    <CircularProgress
      size={200}
      thickness={1}
      sx={{
        color: '#4D6DE3',
        position: 'absolute',
        top: '-12%',  // Center vertically
        left: '-13%',
        zIndex: 1,
      }}
    />
  </div>


      {/* <div className='flex flex-col items-center'>
        <div>
          <img
            className="h-44 w-15 rounded-full "
            src={image}
            alt="loading gif"
          />
          <CircularProgress
            size={100}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        </div>
      </div> */}
    </div>
    </>
  );
}

export default FullLoadScreen;
