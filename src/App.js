import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Us from "./components/Us";

function App() {
  return (
    <div className="App">
      <header id="header" className="App-header"></header>
      <body>
        <Navbar />
        <Services />
        {/* <Us /> */}
        <Contact/>
        <Footer />
      </body>
    </div>
  );
}

export default App;
