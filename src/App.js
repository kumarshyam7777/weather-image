
import './App.css';
import Cloudy from './components/Cloudy';
import Foggy from './components/Foggy';
import Sunny from './components/Sunny';

function App() {
  return (
    <div className="App">
      <h2>Weather Image App</h2>
      <Foggy/>
      <Sunny/>
      <Cloudy/>
    </div>
  );
}

export default App;
