import React from 'react';
import Game from './Game';
import Example from './Example';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';

function App() {
    return (
        <div>
            <Game/>
            <Example/>
            <Clock/>
            <Clock/>
            <Toggle />
            <LoginControl />
        </div>

    );
}

export default App;
