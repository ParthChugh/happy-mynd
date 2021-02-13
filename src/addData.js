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
  const classes = useStyles();
  return (
    <div className="d-flex justify-content-between addData-container" style={{marginBottom: 100}} ref={reference}>
      <div className="image-container">
        <img src={emotions} alt="logo" className="addData-image" />
      </div>
      
      <div className="flex-column d-flex App-component  mentorship-main-component" style={{paddingLeft: 40}}>
        <div className="d-flex flex-column mentorship-main-component align-items-center">
          <div className="d-flex flex-column">
            <span className="App-header">Lets <span style={{ color: '#FF5757' }}>Connect</span></span>
            <span className="App-sub-heading">In-order to provide you a mentorship program we must know the people who are interested to participate</span>
            <form className={classes.root} noValidate autoComplete="off" style={{marginBottom: 40,}}>
              <TextField id="standard-basic" label="First Name" />
              <TextField id="standard-basic" label="Last Name" />
              <TextField id="standard-basic" label="Age" />
              <TextField id="standard-basic" label="Ph-no" />
              <TextField id="standard-basic" label="Email" />
              
            </form>
          </div>
          
          <div>
            <button className="global-button"><span>Submit</span></button>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default AddData;
