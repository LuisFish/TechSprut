import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header id="header" className="App-header">
        <Navbar />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
