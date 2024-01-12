import React from 'react';

const SliderBody = ({index, fadeState, fadeDuration}) => {

    return (
        <div
            className={`slider-body ${fadeState}`}
            style={{transitionDuration: `${fadeDuration}ms`}}
        > 
            <img
                src={require(`../sources/slider/image${index}.jpg`)}
                alt={index}
            /> 
        </div>
    );
};

export default SliderBody;