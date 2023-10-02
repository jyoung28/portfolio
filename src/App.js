import './App.css';
import {HashRouter, BrowserRouter, Route, Routes} from 'react-router-dom'
import TimelinePage from './Pages/TimeLinePage';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HashRouter basename='/'>
            {/* have the header only be on pages after login */}
            <Header/>
            <Routes>
                <Route element={<LandingPage/>} path="/" exact/>
                <Route element={<TimelinePage/>} path="/timeline" exact/>
                <Route element={<Projects/>} path="/projects" exact/>
                <Route element={<ContactMe/>} path="/contactme" exact/>
            </Routes>
        </HashRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;

