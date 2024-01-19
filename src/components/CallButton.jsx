import React from 'react';

const CallButton = () => {
    const handleCall = () => {
        const phoneNumber = '89854806003';
    
        if (window.location.href.startsWith('tel:')) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            window.open(`tel:${phoneNumber}`);
        }
    };

    return (
        <button onClick={handleCall}>
            {phoneNumber}
        </button>
    );
};

export default CallButton;
