import React, { useState } from 'react';
import InputNumber from "./components/Input";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  btn: {
    background: 'linear-gradient(45deg, #184d47 30%, #96bb7c 95%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #5b5b5b',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));


const App = () => {


  const [value, setValue] = useState('');
  const [beta, setBeta] = useState('');
  const classes = useStyles();



const handleSubmit = (e) => {
    console.log(value);
    e.preventDefault(0);
}


  return (
    <div>
      <h1>Hello World</h1>
      <form className={classes.root} noValidate autoComplete="off" onSubmit= {handleSubmit}>
            {/* for updating value */}
            <TextField  id="standard-basic" label="First Name" type="text" value={value} onChange={(e)=>setValue(e.target.value)} /> 
            {/* for displaying value */}
            <Button className={classes.btn} type="submit" value="Submit" onClick={()=> setBeta(value)}> Search </Button>
        </form>
      <InputNumber prn = {beta}/>
    </div>
  );
}

export default App;
