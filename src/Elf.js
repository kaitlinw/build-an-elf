import React from 'react';
import './Elf.css';
// import './ElfHolder.css';

export default function Elf({ styles }) {
    return (
        <div className="elf" >
            <div className="hat">
                <div className="pom-pom"></div>
                <div className="hat-head"></div>
                <div className="hat-band shadow"></div>

            </div>

            <div className="hair shadow"></div>
            <div className="head shadow" style={styles["head"].actual}>
                <div className="face">
                    <div className="eyes">
                        <div className="eye">
                            <div className="pupil"></div>
                        </div>
                        <div className="eye">
                            <div className="pupil"></div>
                        </div>
                    </div>
                    <div className="nose"></div>
                    <div className="mouth">
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="left-arm arm">
                    <div className="hand shadow"></div>
                </div>


                <div className="body shadow">
                    <div className="belt shadow">
                        <div className="buckle">
                        </div>
                    </div>
                </div>
                <div className="right-arm arm ">
                    <div className="hand shadow"></div>
                </div>
            </div>

            <div className="legs">
                <div className="left-leg">
                    <div className="leg shadow"></div>
                    <div className="feet left-foot shadow"></div>
                </div>
                <div className="right-leg ">
                    <div className="leg shadow"></div>
                    <div className="feet right-foot shadow"></div>
                </div>
            </div>
        </div >
    )
}

