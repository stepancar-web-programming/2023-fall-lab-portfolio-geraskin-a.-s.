import React from 'react';

const Dot = ({slideIndex, func, currentSlide}) => {
    return (
        <div
            className={`dot ${slideIndex === currentSlide ? 'dot-active' : ''}`}
            onClick={() => func(slideIndex > currentSlide ? slideIndex - currentSlide : slideIndex - currentSlide)}
        >
        </div>
    );
};

export default Dot;