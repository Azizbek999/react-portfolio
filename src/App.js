import './App.css';
// import DarkMode from './DarkMode/DarkMode';
import Home from "./pages/Home"
import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <div className='about'>
          <About />
        </div>
        <div className='page'>
          {/* <Menu /> */}
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default App;
