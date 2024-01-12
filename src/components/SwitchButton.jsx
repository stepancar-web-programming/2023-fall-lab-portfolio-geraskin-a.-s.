import React from 'react';

const SwitchButton = ({changeLangFunc, lang}) => {
    return (
        <label className="language-btn switch">
            <input type="checkbox"/>
            <div className='slider' onClick={() => changeLangFunc(lang)}></div>
            <div className={`language-title ${lang === 'ru' ? 'activated' : ''}`}>{lang}</div>
        </label>
    );
};

export default SwitchButton;