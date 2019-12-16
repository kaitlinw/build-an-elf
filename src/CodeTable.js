import React from 'react';
import './CodeTable.css';

export default function CodeTable({ currentPage, style }) {
    let elfStyles = style.StyleData.StyleData[currentPage]
    let elfStylePropNames = Object.keys(elfStyles)

    return (
        <div className="CodeTable">
            <div className="headers">
                <h1>Code Table</h1>
                <h2>Now let's create my {currentPage}!</h2>
            </div>
            <div className="render-code">
                <h3 className="code-wrap">.{currentPage} &#123;</h3>
                {elfStylePropNames.map((propName, i) => <p key={i}>
                    {propName}: <input placeholder={elfStyles[propName].default} type='text' />;
                </p>)}
                <h3 className="code-wrap">&#125;</h3>
            </div>
            <button className="back btn btn-2 btn-2g">Back</button>
            <button className="next btn btn-2 btn-2g">Next</button>
        </div >
    )
}