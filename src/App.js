import './App.css';
import Header from './components/Header';
import About from './components/About/About';
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
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default App;
