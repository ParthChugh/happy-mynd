import logo from './assets/logo-with-name.png';
import emotions from './assets/emotions.png';
import Mentorship from './mentorship';
import AddData from './addData';
import './App.scss';

function App() {
  return (
    <div>
      <div className="d-flex justify-content-between App ">
        <div className="App-main-component flex-wrap">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="flex-column d-flex App-component ">
            <div className="d-flex flex-column ">
              <span className="App-header">Life is filled with <span style={{ color: '#FF5757' }}>Happiness</span> Lets explore it !</span>
              <span className="App-sub-heading">We provide you a Mentorship program to make your life better and help you to discover the positive inner side of you</span>
              <div>
                <button className="global-button"><span>Explore more</span></button>
              </div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img src={emotions} alt="logo" className="emotions" />
        </div>
      </div>
      <Mentorship />
      <AddData />
    </div>
    
  );
}

export default App;
