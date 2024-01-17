import React from 'react';
import classe from './UI/SliderBody.module.css';

const SliderBody = ({index, fadeState, fadeDuration}) => {

    return (
        <div
            className={classes.slider-body ${fadeState}}
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
