import React from 'react';
import './BuildCard.css';
import Elf from './Elf.js';
import Snowfall from 'react-snowfall';
import { Link } from 'react-router-dom';

export default function Card({ elfStyles, updateCurrentStep }) {

    return (

        <div id="capture" className="card">
            <div className="snow">
                <Snowfall />
            </div>
            <div className="row">
                {/* <div className="elf">
                    <Elf
                        elfStyles={elfStyles}

                    />
                </div> */}
                <div className="card-message">
                    <h1>Merry Christmas!</h1>
                    <p>&lt;h1&gt;Dear {<input placeholder="name" type="text" />},&lt;/h1&gt;</p>
                    <p>&lt;p&gt;Check out what I made!&lt;/p&gt;</p>
                    <p>&lt;p&gt;{<input className="large-input" placeholder="Your message here!" type="text" />}&lt;/p&gt;</p>
                    <p>&lt;h3&gt;From {<input placeholder="your name here!" type="text" />}, and {<input placeholder="your elf's name here!" type="text" />} the elf. xoxo&lt;/h3&gt;</p>
                </div>
            </div>
            <div className="buttons">
                <button onClick={() => updateCurrentStep(-1)} className="back btn btn-2 btn-2g">Back</button>
                <Link to="/Share" ><button className="next btn btn-2 btn-2g">Next</button></Link>
            </div >

        </div >


    )




}