import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Timeline/>
      <Projects/>
    </div>
  );
}

export default App;
