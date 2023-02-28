import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Title from './components/Title';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <div>
        <h2>Give your thoughts a home...</h2>
        <a href='#testimonials'>read testimonials</a>
      </div>
      <hr style={{border: '2px dotted green'}}></hr>
      <Gallery />
    </div>
  );
}

export default App;
