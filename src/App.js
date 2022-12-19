import logo from './logo.svg';
import './App.css';
import FullName from './FullName';
import Adresse from './Adresse';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Profile</h1>
      <img src="/images/Elon.jpg" alt=""/>
      <FullName />
      <Adresse/>
      
    </div>
  );
}

export default App;
