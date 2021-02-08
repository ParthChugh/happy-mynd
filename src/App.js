import logo from './assets/logo-with-name.png';
import emotions from './assets/emotions.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      
      
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column ">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="d-flex flex-column">
            <span className="App-header">Life is filled with <span style={{color: '#FF5757'}}>Happiness</span> Lets explore it !</span>
            <span className="App-sub-heading">We provide you a Mentorship program to make your life better and help you to discover the positive inner side of you</span>
            <div>
            <button className="global-button"><span>Explore more</span></button>
            </div>
            
          </div>
          
        </div>
        <img src={emotions} alt="logo" />
      </div>
      
    </div>
  );
}

export default App;
