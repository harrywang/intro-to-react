import React from 'react';
import Game from './Game';
import Example from './Example';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import NameForm from './NameForm'
import Calculator from './Calculator'

function App() {
    return (
        <div>
            <Game/>
            <Example/>
            <Clock/>
            <Clock/>
            <Toggle />
            <LoginControl />
            <NameForm />
            <Calculator />
        </div>

    );
}

export default App;
