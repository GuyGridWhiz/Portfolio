import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";
import Footer from "./Components/Layout/Footer";
import Timeline from "./Components/Timeline";
import "./App.css";
import Header from "./Components/Layout/Header";
const App = () => {
    return (
        <div className="bg-white">
            <Header />
            <div className="container-body">
              <div id="AboutMe" className="pt-[20px]">
                <AboutMe />
              </div>
                <div id="Experience" className="pt-[20px]">
                  <Experience />
                </div>
                <div id="Timeline" className="pt-[20px]">
                  <Timeline />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default App;
