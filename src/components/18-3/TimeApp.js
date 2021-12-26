import React from "react";
import TimeInput from "./TimeInput.jsx";

export default function TimeApp() {
  const [state, setState] = React.useState({
    seconds: undefined,
    minutes: undefined,
    hours: undefined
  })

  const handleChange = (e) => {
    const value = e.target.value;

    if(e.target.name === 'seconds') {
      setState({
        seconds: value,
        minutes: value/60,
        hours: value/3600
      });

    }
    if(e.target.name === 'minutes') {
      setState({
        seconds: value*60,
        minutes: value,
        hours: value/60
      });
    }

    if(e.target.name === 'hours') {
      setState({
        seconds: value*3600,
        minutes: value*60,
        hours: value
      });
    }
  }

  return (
    <div>
      <TimeInput name="seconds" handleChange={handleChange} inputValue={state.seconds}/>
      <TimeInput name="minutes" handleChange={handleChange} inputValue={state.minutes}/>
      <TimeInput name="hours" handleChange={handleChange} inputValue={state.hours}/>
    </div>
  );
}
