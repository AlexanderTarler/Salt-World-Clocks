import React, { useState, useEffect } from 'react';
import { timezones } from './timezone-db';
import './App.css';

type TimeComponentProps = {
  timezone: string;
  location: string;
};

function Clock(props: TimeComponentProps) {
  const [clocks, setClocks] = React.useState('');
  useEffect(() => {
    setInterval(() => {
      let newDate = new Date();
      let localTime = newDate.toLocaleString('en', {
        timeZone: props.timezone,
        hour12: false,
      });
      setClocks(localTime.toString());
    }, 1000);
  }, []);

  return (
    <div className="clock-card">
      <h1>{clocks.split(',')[1]}</h1>
      <p>{props.location}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <header className="header">World Clocks</header>
      <div className="board">
        <Clock timezone={'Europe/Stockholm'} location={'Stockholm'} />
        <Clock timezone={'Europe/London'} location={'London'} />
        <Clock timezone={'Europe/Paris'} location={'Paris'} />
        <Clock timezone={'Europe/Moscow'} location={'Moscow'} />
        <Clock timezone={'Asia/Tokyo'} location={'Tokyo'} />
        <Clock timezone={'America/New_York'} location={'New York'} />
        <Clock timezone={'America/Los_Angeles'} location={'Los Angeles'} />
        <Clock timezone={'America/Sao_Paulo'} location={'Sao Paulo'} />
        <Clock timezone={'Australia/Brisbane'} location={'Brisbane'} />
      </div>
    </div>
  );
}

export default App;
