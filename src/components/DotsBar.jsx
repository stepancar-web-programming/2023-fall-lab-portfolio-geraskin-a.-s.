import React from 'react';
import Dot from './Dot';

const DotsBar = ({array, func, currentSlide}) => {
    const countSlides = array.length

    const dotsRender = () => {
        const dots = []
        for (let i = 0; i < countSlides; i++) {
            dots.push(<Dot
                    slideIndex={i}
                    func={func}
                    currentSlide={currentSlide}
                    key={`dot-${i}`}
                >
                </Dot>)
        } return dots
    }
    return (
        <div className="dots-bar">{dotsRender()}</div>
    )
};

export default DotsBar;