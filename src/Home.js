import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
export default function Home({ removeFromLocalStorage }) {
    return (
        <div className="home-page">
            <canvas className="canvas"></canvas>
            <h1>Build An Elf!</h1>
            <Link onClick={() => removeFromLocalStorage()} className="btn btn-2 btn-2g" to="/build">Let's start!</Link>
        </div>

    )
}