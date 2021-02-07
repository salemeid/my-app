import React, { useState } from 'react';
import InputNumber from "./components/Input";


const App = () => {

  const [value, setValue] = useState('');
  const [beta, setBeta] = useState('');




const handleSubmit = (e) => {
    console.log(value);
    e.preventDefault(0);
}


  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit= {handleSubmit}>
            <label>
            Name:
            {/* for updating value */}
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} /> 
            </label>
            {/* for displaying value */}
            <input type="submit" value="Submit" onClick={()=> setBeta(value)}/>
        </form>
      <InputNumber prn = {beta}/>
    </div>
  );
}

export default App;
