import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Gallery from './components/Gallery1';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
