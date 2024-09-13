import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Us from "./components/Us";

function App() {
  return (
    <div className="App">
      <header id="header" className="App-header">
      </header>
      <body>
      <Navbar />
        <Us/>
        <Footer/>
      </body>
    </div>
  );
}

export default App;
