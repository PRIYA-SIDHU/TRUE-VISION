import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./footer.jsx";


import ColourDetection from "../shared/colour-detection.jsx";
import Text from "../shared/text.jsx";


const  Dashboard = ()=>{
    const location = useLocation();

  useEffect(() => {
    if (location.hash === "#object-detection") {
      setTimeout(() => {
        const section = document.getElementById("object-detection");
        if (section) {
          section.scrollIntoView({ behavior: "auto" });
        }
      }, 50); // 100ms is usually good, you can try slightly higher if needed
    }
  }, [location]);
  
return <>
   <Text></Text>
  
   
   
  <ColourDetection/>
<Footer></Footer>
</>
};


export default Dashboard ;