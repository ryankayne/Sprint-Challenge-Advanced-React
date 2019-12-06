import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import styled from 'styled-components';

export default function Nav() {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    return (
        <div className="navbar">
            <h1>Women's World Cup Data</h1>
            <button onClick={toggleDarkMode}>Dark Mode: {darkMode ? 'On' : 'Off'}</button>
        </div>
    )
}
