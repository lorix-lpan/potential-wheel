import React from 'react';
import ToggleButton from './shared/ToggleButton';

const toggleType = {
  onOff: ['On', 'Off'],
  direction: ['Forward', 'Backward'],
};

const contStyle = {
  marginTop: '2em',
};

function App() {
  return (
    <div style={contStyle}>
      <ToggleButton
        emitEvent="motor:toggle"
        listenEvent="motor:state"
        btnName="Toggle Motor"
        stateName="Motor State"
        type={toggleType.onOff}
      />
      <ToggleButton
        emitEvent="servo:toggle"
        listenEvent="servo:state"
        btnName="Catapult"
        stateName="Motion State"
        type={toggleType.onOff}
      />
      <ToggleButton
        emitEvent="direction:toggle"
        listenEvent="direction:state"
        btnName="Toggle Direction"
        stateName="Direction State"
        type={toggleType.direction}
      />
    </div>
  );
}

export default App;
