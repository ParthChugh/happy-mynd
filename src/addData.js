import emotions from './assets/section3.png';

function AddData() {
  return (
    <div className="d-flex justify-content-between addData-container">
      <div className="image-container">
        <img src={emotions} alt="logo" className="addData-image" />
      </div>
      <div className="flex-wrap">
        <div className="flex-column d-flex App-component mentorship-main-component" style={{paddingLeft: 40}}>
          <div className="d-flex flex-column mentorship-main-component">
            <span className="App-header">Lets <span style={{ color: '#FF5757' }}>Connect</span></span>
            <span className="App-sub-heading">In-order to provide you a mentorship program we must know the people who are interested to participate</span>
            <div>
              <button className="global-button"><span>Submit</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddData;
