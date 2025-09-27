import React from "react";
import styles from "./currencydetector.module.css";
import AnimatedSection from "./animated";
import { useNavigate } from "react-router-dom";
import currencyimg from "../../assets/currencydetector1.png";

const CurrencyDetector = () => {
  const navigate = useNavigate();

  return (
    <AnimatedSection
      left={
        <div className={styles.left}>
          <h1 className={styles.bigTitle}>Currency Detector</h1>
          <div className={styles.textColumn}>
            
            <p>
              Experience instant currency detection simply by pressing a button.
Using modern tools like OpenCV and TensorFlow.js, the system identifies different currency notes in real time.
Detected notes are highlighted with bounding boxes and labels on your screen.
Enjoy interactive feedback as the camera feed updates live to show recognized currencies.
No installation needed—just use this website for fast, seamless currency recognition.
            </p>
            <button
              className={styles.ctaButton}
                onClick={() => navigate("/currency-detector")}
            >
              currency detector
            </button>
          </div>
        </div>
      }
      right={
        <div className={styles.right}>
          <img
            src={currencyimg}
            alt="Practice Coding Chops"
            className={styles.demoImage}
          />
        </div>
      }

     />
  );
};

export default CurrencyDetector;