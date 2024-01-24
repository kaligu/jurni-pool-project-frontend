import { useEffect, useState } from 'react';
import image from '../assets/loadgif.gif';
import CircularProgress from '@mui/material/CircularProgress';

interface propsTypes {
  loadingTime: number; // Loading time in seconds
}

function FullLoadScreen(props: propsTypes) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Calculate the duration in milliseconds based on the loading time provided in props
    const duration = props.loadingTime * 1000;
    const interval = 100; // Set the update interval in milliseconds

    // Calculate the number of steps needed for the given duration and interval
    const steps = duration / interval;
    let currentStep = 0;

    // Start a timer to update the progress at regular intervals
    const timer = setInterval(() => {
      // Update the progress, ensuring it doesn't exceed 100%
      setProgress(() => (currentStep >= steps ? 100 : (currentStep / steps) * 100));
      currentStep += 1;
    }, interval);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [props.loadingTime]); // Dependency on loadingTime to handle changes

  useEffect(() => {
    // Disable scroll and touch events when the component mounts
    const disableScrollAndTouch = () => {
      document.body.style.overflow = 'hidden';
    };

    // Enable scroll and touch events when the component unmounts
    const enableScrollAndTouch = () => {
      document.body.style.overflow = 'auto';
    };

    // Perform the initial setup when the component mounts
    disableScrollAndTouch();

    // Clean up and revert changes when the component unmounts
    return () => {
      enableScrollAndTouch();
    };
  }, []);

  return (
    <>
      {/* Overlay for full-screen loading */}
      <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-filter backdrop-blur-sm">
        <div className="text-center relative">
          {/* Loading image */}
          <img
            className="h-40 w-15 rounded-full top-0 left-10"
            src={image}
            alt="loading gif"
          />
          {/* Circular progress bar */}
          <CircularProgress
            variant="determinate"
            value={progress}
            size={200}
            thickness={1.25}
            sx={{
              color: '#4D6DE3',
              position: 'absolute',
              top: '-12%', // Center vertically
              left: '-13%',
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default FullLoadScreen;
