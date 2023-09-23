import React, { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import PageLoader from "./Components/PreLoader/PreLoader";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or any asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <NavBar />

      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          <Home />
          <About />
          <Main />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
