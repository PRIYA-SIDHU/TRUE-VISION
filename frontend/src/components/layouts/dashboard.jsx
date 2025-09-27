
import objectdetection from "../shared/objectdetection.jsx";

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

  return (

    <div id = "object-detection">
        <objectdetection></objectdetection>
    </div>
  );
}