import logo from "./logo.svg";
import Header from './Components/Header/Header'
import Middle from './Components/Middle/Middle'
import Pictures from './Components/Pictures/Pictures'
import Footer from './Components/Footer/Footer'
import Added from './Components/Added/Added'
import "./App.css";

function App() {
  return (
  <div className="App">
    <Header/>
    <Middle/>
    <Added/>
    <Pictures/>
    <Footer/>
  </div>
  );
}

export default App;
