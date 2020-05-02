import React from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';


function HomePage() {
    return (
        <div className='HomePage'>
            <button>
                Click here to register
            </button>
            <button>Click here to login</button>
        </div>
    );
}

export default HomePage;