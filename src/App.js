import logo from './logo.svg';
import ToggleSwitch from './components/toggleSwitch/toggleSwitch'
import Button from './components/button/button'
import './App.css';
import { useState } from 'react';
import ModalButton from './components/modal/modalButton';

function App() {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className="App">
    <ModalButton />
      <div style={{ paddingBottom: '15px' }}>
        <ToggleSwitch label="Shaunak" />
      </div>
      <Button
        bodyText={'button'}
        buttonStyle={'btn--success'}
        onClick={handleClick}
      />
    </div>
  );
}

export default App;
