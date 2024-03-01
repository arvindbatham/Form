import "./App.css";
import "./components/sections/Sections.scss";
import LandingPage from "./components/sections/LandingPage";
import Form from "./components/sections/Form";
import { useEffect, useState } from "react";
import LastPage from "./components/sections/LastPage";
import Loader from "./components/Loader/Loader";
function App() {
  const [section, setSection] = useState(0);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function isMobileOrTablet() {
      // Check if the user agent string contains any of the common mobile or tablet keywords
      return /Mobi|Android|iPhone|iPod|iPad|Windows Phone|Tablet/i.test(
        navigator.userAgent
      );
    }
    setMobileScreen(isMobileOrTablet());

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   console.log("Page ", section);
  //   if (section >= 1) {
  //     const sectionId = "section-" + section;
  //     const sectionName = document.getElementById(sectionId);
  //     sectionName.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //   }
  // }, [section]);
  return (
    <div className="App">
      {loading && <Loader />}
      {!loading && (
        <>
          {section === 0 && (
            <LandingPage
              mobileScreen={mobileScreen}
              section={section}
              setSection={setSection}
            />
          )}
          {section > 0 && section < 11 && (
            <Form
              mobileScreen={mobileScreen}
              section={section}
              setSection={setSection}
            />
          )}

          {section === 11 && <LastPage mobileScreen={mobileScreen} />}
        </>
      )}
    </div>
  );
}

export default App;

// https://lzlhr6f7k3l.typeform.com/to/HslIEDo8?typeform-source=statics.teams.cdn.office.net
