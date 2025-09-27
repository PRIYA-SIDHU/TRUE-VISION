import React from "react";
import styles from "./colour-detection.module.css";
import AnimatedSection from "./animated";
import { useNavigate } from "react-router-dom";
import colourimg from "../../assets/colourdetect.png";

const ColourDetection= () => {
  const navigate = useNavigate()
  return (
    <AnimatedSection

   left = {
    <div className={styles.left}>
      <img
        src={colourimg}
        alt="colourdetection"
        className={styles.demoImage}
      />
    </div>
   }
    
   right = {
    <div className={styles.right}>
      <h1 className={styles.bigTitle}>Colour Detection</h1>
      <p className={styles.description}>
  Welcome to the color detection experience!
Click the button to activate your camera and give a voice command to detect any color.
Simply say the color you want, and watch as the system identifies and highlights it in real time.
See colors come alive on your screen with instant, interactive feedback.
Dive into an intuitive way to explore colors around you, right from your browser.
      </p>
       <button className={styles.ctaButton}
        onClick={() => navigate("/color")}>
      colour detection
      </button>
    </div>
   }
  />
  )
}

export default ColourDetection ;