import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FlipCard = ({frontText, backText, flexDirection = 'horizontal', src = null}) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const flipperFunc = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <ReactCardFlip
            containerClassName="flipper"
            isFlipped={isFlipped}
            flipDirection={flexDirection}
            flipSpeedBackToFront='1.1'
            flipSpeedFrontToBack='1.1'
        >
            <div className="flipper-side front" onClick={flipperFunc}>
                <div>{frontText}</div>
                <img src={src} alt="" />
            </div>
            <div className="flipper-side back" onClick={flipperFunc}>
                <div>{backText}</div>
            </div>
        </ReactCardFlip>
    );
};

export default FlipCard;