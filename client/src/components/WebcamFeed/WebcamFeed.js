import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import "./WebcamFeed.css";

const WebcamFeed = () => {
  const webcamRef = useRef(null);

  useEffect(() => {
    const initCamera = async () => {
      try {
        // Access the user's camera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Set the obtained media stream to the Webcam component
        if (webcamRef.current) {
          webcamRef.current.video.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing webcam:', error);
      }
    };

    initCamera();

    // Cleanup function to stop the webcam feed when the component is unmounted
    return () => {
      if (webcamRef.current) {
        const stream = webcamRef.current.video.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }
    };
  }, []); // Run the effect only once during component mount

  return (
    <div className="webcam-container">
      <Webcam ref={webcamRef} />
    </div>
  );
};

export default WebcamFeed;
