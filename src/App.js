import "./App.css";
import "./components/sections/Sections.scss";
import LandingPage from "./components/sections/LandingPage";
import Form from "./components/sections/Form";
import { useEffect, useState } from "react";
import LastPage from "./components/sections/LastPage";
function App() {
  const [section, setSection] = useState(0);

  useEffect(() => {
    console.log("Page ", section);
    if (section >= 1) {
      const sectionId = "section-" + section;
      const sectionName = document.getElementById(sectionId);
      sectionName.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [section]);
  return (
    <div className="App">
      {!(section > 0) && (
        <LandingPage section={section} setSection={setSection} />
      )}
      {(section > 0 && section < 12 )&& <Form section={section} setSection={setSection} />}

      {section === 12 && <LastPage />}
    </div>
  );
}

export default App;
