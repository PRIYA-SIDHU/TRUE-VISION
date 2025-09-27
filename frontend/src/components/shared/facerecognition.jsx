
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./facerecognition.module.css";
import faceimg from "../../assets/facerecognition.png";
import AnimatedSection from "./animated";


export default function FaceRecognition() {
  const navigate = useNavigate();

  return (
     <AnimatedSection
      left={
        <div className={styles.left}>
           <h1 className={styles.bigTitle}>Face Recognition</h1>
      <p className={styles.description}>
        This section uses your camera to detect faces in real time and build a personalized face database. When a new face is spotted, you’ll be prompted to enter a name, which will then be displayed with a labeled box around the face. Known faces will be recognized instantly, while unknown faces can be quickly added by naming them. Experience easy and interactive face tracking right in your browser.
      </p>
          <button
        className={styles.ctaButton}
        onClick={() => navigate("/face")}
      >
        face recognition
      </button>
          </div>
        
      }
      right={
        <div className={styles.right}>
          <img
            src={faceimg}
            alt="Practice Coding Chops"
            className={styles.demoImage}
          />
        </div>
      }

     />
  );
};


