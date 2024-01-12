import React, { useState } from 'react';
import SliderBody from './SliderBody';
import DotsBar from './DotsBar';

const Slider = ( {dataSlider} ) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [fadeState, setFadeState] = useState('fade-in')
    const [time, setTime] = useState(0)
    const fadeDuration = 500

    const moveSlide = (move) => {
        const timer = setTimeout(() => {
            setSlideIndex(slideIndex + move)
            setFadeState('fade-in')
        }, fadeDuration)
        clearTimeout(time)
        setFadeState('fade-out')
        setTime(timer)
    }

    return (
        <div className="slider">
            <div className="slider">
                <button
                    onClick={() => moveSlide(-1)}
                    style={slideIndex > 0 
                        ? {visibility: 'visible'}
                        : {visibility: 'hidden'}}
                    className="slider-btn">Left
                </button>
                <SliderBody
                    array={dataSlider}
                    index={slideIndex}
                    fadeDuration={fadeDuration}
                    fadeState={fadeState}
                />
                <button 
                    onClick={() => moveSlide(1)} 
                    style={slideIndex < dataSlider.length - 1 
                        ? {visibility: 'visible'}
                        : {visibility: 'hidden'}} 
                    className="slider-btn">Right
                </button>
            </div>
            <DotsBar
                array={dataSlider}
                func={moveSlide}
                currentSlide={slideIndex}
            />
        </div>
    );
};

export default Slider;