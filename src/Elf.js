import React from 'react';
import './Elf.css';
// import './ElfHolder.css';

export default function Elf({ elfStyles }) {
    return (
        <div className="elf" >
            <div className="hat">
                <div className="pom-pom" style={elfStyles["pom-pom"].actual}></div>
                <div className="hat-head" style={elfStyles["hat-head"].actual}></div>
                <div className="hat-band shadow" style={elfStyles["hat-band"].actual}></div>

            </div>

            <div className="hair shadow" style={elfStyles["hair"].actual}></div>
            <div className="head shadow" style={elfStyles["head"].actual}>
                <div className="face">
                    <div className="eyes">
                        <div className="eye" style={elfStyles["eye"].actual}>
                            <div className="pupil" style={elfStyles["pupil"].actual}></div>
                        </div>
                        <div className="eye" style={elfStyles["eye"].actual}>
                            <div className="pupil" style={elfStyles["pupil"].actual}></div>
                        </div>
                    </div>
                    <div className="nose" style={elfStyles["nose"].actual}></div>
                    <div className="mouth" style={elfStyles["mouth"].actual}>
                    </div>
                </div>
            </div>
            <div className="middle">
                <div className="left-arm arm" style={Object.assign({}, elfStyles["arm"].actual, elfStyles["left-arm"].actual)}>
                    <div className="hand shadow" style={elfStyles["hand"].actual}></div>
                </div>


                <div className="body shadow" style={elfStyles["body"].actual}>
                    <div className="belt shadow" style={elfStyles["belt"].actual}>
                        <div className="buckle" style={elfStyles["buckle"].actual}>
                        </div>
                    </div>
                </div>
                <div className="right-arm arm" style={Object.assign({}, elfStyles["arm"].actual, elfStyles["right-arm"].actual)}>
                    <div className="hand shadow" style={elfStyles["hand"].actual}></div>
                </div>
            </div>

            <div className="legs">
                <div className="left-leg">
                    <div className="leg shadow" style={elfStyles["leg"].actual}></div>
                    <div className="feet left-foot shadow" style={elfStyles["feet"].actual}></div>
                </div>
                <div className="right-leg">
                    <div className="leg shadow" style={elfStyles["leg"].actual}></div>
                    <div className="feet right-foot shadow" style={elfStyles["feet"].actual}></div>
                </div>
            </div>
        </div >
    )
}

