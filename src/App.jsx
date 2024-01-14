import AboutMe from "./Components/aboutMe";
import Experience from "./Components/Experience";
import Footer from "./Components/Layout/Footer";
import './App.css'
const App = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>About Me</a></li>
              <li><a href="#Experience">Experience</a></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center text-3xl">
          PORTFOLIO
        </div>
        <div className="navbar-end">
        </div>
      </div>
      {/* Body */}
      <div className="flex justify-center mt-4">
        <AboutMe />
      </div>
      <div id="Experience" className="flex justify-center mt-8">
          <Experience />
      </div>
      <div className='mt-[50px]'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
