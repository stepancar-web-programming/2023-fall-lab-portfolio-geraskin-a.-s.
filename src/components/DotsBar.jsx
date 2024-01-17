import React from 'react';
import Dot from './Dot';
import classes from './UI/DotsBar.module.css';

const DotsBar = ({array, func, currentSlide}) => {
    const countSlides = array.length

    const dotsRender = () => {
        const dots = Array.from({length: countSlides}).map((_, i) => (
            <Dot
                    slideIndex={i}
                    func={func}
                    currentSlide={currentSlide}
                    key={`dot-${i}`}
            />
        ))
        return dots
    }
    return (
        <div className={classes.dots-bar}>{dotsRender()}</div>
    )
};

export default DotsBar;
