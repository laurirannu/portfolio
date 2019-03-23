import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import './About.css';

const ZoomExample = (props) => {
    return (
        <div className="content-wrapper">
            <Rotate >
                <h1 className="title">About Us</h1>
            </Rotate>
            <Zoom >
                <p className="content">
                    {props.lorem}
                </p>
            </Zoom>
        </div>
    );
}

export default ZoomExample;

