import React from 'react';
import classes from './UI/Dot.module.css';

const Dot = ({slideIndex, func, currentSlide}) => {
    return (
        <div
            className={classes.dot ${slideIndex === currentSlide ? classes.dot-active : ''}}
            onClick={() => func(slideIndex > currentSlide ? slideIndex - currentSlide : slideIndex - currentSlide)}
        >
        </div>
    );
};

export default Dot;
