
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="container mt-4">
        <h1>My Resterong in Chiangmai</h1>
        <p>React + Bootstrap is amazing!</p>
      </main>
      <main className="container at-4">
        <Home />
      </main>
      <main className="container at-4">
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
