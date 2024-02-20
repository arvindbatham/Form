import "./App.css";
import "./components/sections/Sections.scss";
import LandingPage from "./components/sections/LandingPage";
import Form from "./components/sections/Form";
function App() {
  return <div className="App">
    <LandingPage />
    <Form />
  </div>;
}

export default App;
