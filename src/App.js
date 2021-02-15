/* global gapi */

import {useRef, useEffect} from 'react';
import logo from './assets/logo-with-name.png';
import emotions from './assets/emotions.png';
import Mentorship from './mentorship';
import AddData from './addData';
import './App.scss';

function App() {
  const myRef = useRef(null)
  const addItems = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()   
  const executeScrollToAddItems = () => addItems.current.scrollIntoView()   
  const updateSignInStatus = (data) => {
    console.log("data1313",data)

  }
  const initClient =()=> { //provide the authentication credentials you set up in the Google developer console
    gapi.client.init({
      'apiKey': "AIzaSyDY8xeTg3sEYWRSorpCRnH1cW_dA1D_cms",
      'clientId': "684833227999-vlje4f6f0m9gbq0hrag3a4rsdsrcj9o9.apps.googleusercontent.com",
      'scope': 'https://www.googleapis.com/auth/drive.file',
      'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(()=> {
      console.log('is signed in', )
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
      updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }
  const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
  }
  
  useEffect(() => {
    handleClientLoad()
  })

  return (
    <div>
      <div className="d-flex justify-content-between App ">
        <div className="App-main-component flex-wrap d-flex">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div>
            <div className="flex-column d-flex App-component ">    
              <div className="d-flex flex-column ">
                <span className="App-header">Life is filled with <span style={{ color: '#FF5757' }}>Happiness</span> Lets explore it !</span>
                <span className="App-sub-heading">We provide you a Mentorship program to make your life better and help you to discover the positive inner side of you</span>
                <div>
                  <button className="global-button" onClick={executeScroll}><span>Explore more</span></button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="image-container">
          <img src={emotions} alt="logo" className="emotions" />
        </div>
      </div>
      <Mentorship reference={myRef} onClick={executeScrollToAddItems}/>
      <AddData reference={addItems} />
    </div>
    
  );
}

export default App;
