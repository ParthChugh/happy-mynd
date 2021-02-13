import emotions from './assets/mentorship.png';

function Mentorship({reference, onClick}) {
  return (
    <div className="d-flex justify-content-between mentorship-container" ref={reference}>
      <div className="image-container">
        <img src={emotions} alt="logo" className="mentorship" />
      </div>
      <div className="App-main-component flex-wrap">
        <img src={emotions} alt="logo" className="img-fluid emotions-inner" />
        <div className="flex-column d-flex App-component ">
          <div className="d-flex flex-column ">
            <span className="App-header"><span style={{ color: '#FF5757' }}>Mentorship</span>- Program </span>
            <span className="App-sub-heading">We Provide live courses to train your mind to unleash your true potential. Experience joy and love in your life so you remain playful and exuberance in any sitution of life</span>
            <div>
              <button className="global-button" onClick={onClick}><span>Lets Connect</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentorship;
