import React from "react";
import styles from "./objectdetection.module.css";
import AnimatedSection from "./animated";
import { useNavigate } from "react-router-dom";


const ObjectDetection = () => {
  const navigate = useNavigate()
   return (
    <AnimatedSection
      left={
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZjq8BJoDzyxfMYdvn23J3hL1agyTEfmcsQ&s"
          alt="Object Detection Illustration"
          className={styles.demoImage}
        />
      }
      right={
        <>
          <h2 className={styles.bigTitle}>Object Detection</h2>
          <p className={styles.description}>
            In this section, you can explore real-time object detection with just a click of a button.
Our system uses advanced technologies like OpenCV and TensorFlow.js to recognize multiple objects instantly.
Objects are identified and highlighted with bounding boxes right on your screen.
You can see detections update live as your camera feed changes.
It’s simple, fast, and interactive—bringing object recognition directly into your browser.
          </p>
          <button className={styles.ctaButton}
          onClick={()=>navigate('/object')}
          >Try Object Detection</button>
        </>
      }
    />
  );
}

export default ObjectDetection;