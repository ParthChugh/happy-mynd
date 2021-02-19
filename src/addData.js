import {useState} from 'react';
import emotions from './assets/section3.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function AddData({reference}) {
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)
  const classes = useStyles();
  const onSubmit = (event) => {
    setLoading(true)
    
    const googleFormUrl = process.env.REACT_APP_document_file
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
    const first_name=process.env.REACT_APP_first_name
    const last_name=process.env.REACT_APP_last_name
    const age=process.env.REACT_APP_age
    const phone_number=process.env.REACT_APP_phone_number
    const email=process.env.REACT_APP_email
    event.preventDefault();    
    const formData = new FormData()
    formData.append(first_name, state.first_name)
    formData.append(last_name, state.last_name)
    formData.append(age, state.age)
    formData.append(phone_number, state.phone)
    formData.append(email, state.email)
    axios.post(CORS_PROXY + googleFormUrl, formData, {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
     })
      .then((response) => {
        if(response.status === 200) {
          setLoading(false)
          window.scrollTo(0, 0)
          
          setState({first_name: '', last_name: '', age: '', email: '', phone: ''})
        } else {
          alert('Please try after some time');
        }
        
      })
      .catch(() => {

    });

    
  }
  return (
    <div className="d-flex justify-content-between addData-container" style={{marginBottom: 100}} ref={reference}>
      <div className="image-container">
        <img src={emotions} alt="logo" className="addData-image" />
      </div>
      
      <div className="flex-column d-flex" >
        <img src={emotions} alt="logo" className="img-fluid emotions-inner" />  
        <div className="d-flex flex-column mentorship-main-component align-items-center" style={{paddingLeft: 40}}>
          <div className="d-flex flex-column">
            <span className="App-header">Lets <span style={{ color: '#FF5757' }}>Connect</span></span>
            <span className="App-sub-heading">In-order to provide you a mentorship program we must know the people who are interested to participate</span>
            <form className={classes.root} autoComplete="off" style={{marginBottom: 40,}} onSubmit={onSubmit}>
              <TextField 
                id="standard-basic" 
                required 
                value={state.first_name}
                onChange={(data) => setState({...state, "first_name": data.target.value})}
                label="First Name"
              />
              <TextField 
                required 
                id="standard-basic"
                value={state.last_name} 
                label="Last Name"  
                onChange={(data) =>setState({...state, "last_name": data.target.value})}
              />
              <TextField 
                required 
                id="standard-basic" 
                label="Age" 
                value={state.age} 
                type="number"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                onChange={(data) =>setState({...state, "age": data.target.value})}
              />
              <TextField 
                required 
                id="standard-basic" 
                label="Ph-no"       
                type="number"
                value={state.phone} 
                // InputLabelProps={{
                //   shrink: true,
                // }}
                onChange={(data) =>setState({...state, "phone": data.target.value})}  
              />
              <TextField 
                required 
                type="email"
                name="email"
                value={state.email} 
                autoComplete="email"
                id="standard-basic" 
                label="Email" 
                onChange={(data) =>setState({...state, "email": data.target.value})}
              />
              <div style={{marginTop: 30}}>
                {!loading &&
                  <button className="global-button" type="submit"><span>Submit</span></button>
                }
              </div>
            </form>
            
          </div>
          
          
        </div>
      
      </div>
    </div>
  );
}

export default AddData;
