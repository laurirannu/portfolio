// You can live edit this code below the import statements
import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';

const ZoomExample = (props) => {
    return (
        <div>
            <Rotate>
                <h1>About Us</h1>
            </Rotate>
            <Zoom >
                <p>
                    {props.lorem}
                </p>
            </Zoom>
        </div>
    );
}

export default ZoomExample;

