import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <div className="home-page">
            <h1>Let's Build An Elf!</h1>
            <Link className="btn btn-2 btn-2g" to="/build">Let's start!</Link>
        </div>
    )



}