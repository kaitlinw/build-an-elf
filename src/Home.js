import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Snowfall from 'react-snowfall';
export default function Home({ removeFromLocalStorage }) {

    return (
        <div className="home-page">
            <div className="snow">
                <Snowfall />
            </div>
            <h1>Build An Elf!</h1>
            <Link onClick={() => removeFromLocalStorage()} className="btn btn-2 btn-2g" to="/build">Let's start!</Link>
        </div>

    )
}