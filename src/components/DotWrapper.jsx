import React from 'react';
import Dot from './Dot'; // Путь к вашему компоненту Dot
import classes from './UI/DotWrapper.module.css';
import cn from 'classnames';

const DotWrapper = ({slideIndex, func, currentSlide}) => {

    const isActive = slideIndex === currentSlide
    
    return (
        <div 
            className={cn({ [classes['active']]: isActive })}
            onClick={() => func(slideIndex > currentSlide ? slideIndex - currentSlide : slideIndex - currentSlide)}
        >
            <Dot/>
        </div>
    );
};

export default DotWrapper;
