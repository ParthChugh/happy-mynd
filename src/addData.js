/* global gapi */
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
    
    
    const params = {
      // The ID of the spreadsheet to update.
      spreadsheetId: "1tsFKsa6fzkv5JPlPcp8eOZfU3nmvcnjEB8VDFyjHt7o", 
      // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
      range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
      // How the input data should be interpreted.
      valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
      // How the input data should be inserted.
      insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
    };

    const valueRangeBody = {
      'majorDimension': 'ROWS', //log each entry as a new row (vs column)
      'values': [state] //convert the object's values to an array
    };

    let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function (response) {
      // TODO: Insert desired response behaviour on submission
      window.scrollTo(0, 0)
      setState({first_name: '', last_name: '', age: '', email: '', phone: ''})
      // console.log(response.result);
      window.scrollTo(0, 0)
    }, function (reason) {
      console.error('error: ' + reason.result.error.message);
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
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(data) =>setState({...state, "age": data.target.value})}
              />
              <TextField 
                required 
                id="standard-basic" 
                label="Ph-no"       
                type="number"
                value={state.phone} 
                InputLabelProps={{
                  shrink: true,
                }}
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
