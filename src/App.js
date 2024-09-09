import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {

  //making state of our application
  const [weight,setWeight]=useState(0);  
  const [height,setHeight]=useState(0);  
  const [bmi,setBmi]=useState("");  
  const [message,setMessage]=useState("");  

  //logic

  let calcBmi = (e) => {
    
    e.preventDefault();
    if(weight===0 || height===0)
    {
      alert("Please enter a valid data")
    }
    else{
      let bmi = (weight/(height*height))
      setBmi(bmi.toFixed(1))
      
      //
      if(bmi<25){
        setMessage("You are underweight")
      }
      else if(bmi>=25 && bmi<30){
        setMessage("You are healthy")
      }
      else{
        setMessage("You are overweight")
      }
    }
  }

  // reload

  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
        <form onSubmit={calcBmi}>
          <div className='title'>
            <h2>BMI CALCULATOR</h2>
          </div>
          <div className='form-field'>
            <label>Weight(Kg)</label>
            <input type="number" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div className='form-field'>
            <label>Height(Meter)</label>
            <input type="number" placeholder="Enter your height" value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div className="button-field">
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
    </div>
  );
}

export default App;
