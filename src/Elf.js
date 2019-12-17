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
                        <div className="eye" style={styles["eye"].actual}>
                            <div className="pupil" style={styles["pupil"].actual}></div>
                        </div>
                        <div className="eye" style={styles["eye"].actual}>
                            <div className="pupil" style={styles["pupil"].actual}></div>
                        </div>
                    </div>
                    <div className="nose" style={styles["nose"].actual}></div>
                    <div className="mouth" style={styles["mouth"].actual}>
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="left-arm arm" style={styles["arm"].actual}>
                    <div className="hand shadow" style={styles["hand"].actual}></div>
                </div>


                <div className="body shadow" style={styles["body"].actual}>
                    <div className="belt shadow" style={styles["belt"].actual}>
                        <div className="buckle" style={styles["buckle"].actual}>
                        </div>
                    </div>
                </div>
                <div className="right-arm arm " style={styles["arm"].actual}>
                    <div className="hand shadow" style={styles["hand"].actual}></div>
                </div>
            </div>

            <div className="legs">
                <div className="left-leg">
                    <div className="leg shadow" style={styles["leg"].actual}></div>
                    <div className="feet left-foot shadow" style={styles["feet"].actual}></div>
                </div>
                <div className="right-leg">
                    <div className="leg shadow" style={styles["leg"].actual}></div>
                    <div className="feet right-foot shadow" style={styles["feet"].actual}></div>
                </div>
            </div>
        </div >
    )
}

