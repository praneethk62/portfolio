import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro"
import Skills from "./components/skills/Skills";
import Work from "./components/works/work"
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Work />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
