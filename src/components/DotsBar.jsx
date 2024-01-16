import React from 'react';
import Dot from './Dot';

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
        <div className="dots-bar">{dotsRender()}</div>
    )
};

export default DotsBar;
