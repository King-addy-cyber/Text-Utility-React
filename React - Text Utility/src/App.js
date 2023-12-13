import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e3528";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";

      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title = "install TextUtils is amazing";
      // }, 2500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About "
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

//       <div className="container my-8 ">

//       </div>
