import "./App.css";
import Footer from "../src/Component/Footer/footerIndex";
import { GlobalStyle } from "./globalStyle";
import Landing from "./Component/Landing/landingIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/Navbar/navbarIndex"

function App() {
  return (
    <div>
      <GlobalStyle />
     <Navbar/>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
