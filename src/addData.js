import {useState} from 'react';
import emotions from './assets/section3.png';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  const classes = useStyles();
  const onSubmit = (event) => {
    event.preventDefault();
    console.log('here')
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
                onChange={(data) =>setState({...state, "first_name": data})}
                label="First Name"
              />
              <TextField 
                required 
                id="standard-basic" 
                label="Last Name"  
                onChange={(data) =>setState({...state, "last_name": data})}
              />
              <TextField 
                required 
                id="standard-basic" 
                label="Age" 
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(data) =>setState({...state, "age": data})}
              />
              <TextField 
                required 
                id="standard-basic" 
                label="Ph-no"       
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(data) =>setState({...state, "phone": data})}  
              />
              <TextField 
                required 
                type="email"
                name="email"
                autoComplete="email"
                id="standard-basic" 
                label="Email" 
                onChange={(data) =>setState({...state, "email": data})}
              />
              <div>
                <button className="global-button" type="submit"><span>Submit</span></button>
              </div>
            </form>
            
          </div>
          
          
        </div>
      
      </div>
    </div>
  );
}

export default AddData;
