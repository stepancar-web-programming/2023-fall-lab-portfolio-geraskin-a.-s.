import React from 'react';
import classes from './UI/SwitchButton.module.css';

const SwitchButton = ({changeLangFunc, lang}) => {
    return (
        <label className={classes.language-btn classes.switch}>
            <input type="checkbox"/>
            <div className={classes.slider} onClick={() => changeLangFunc(lang)}></div>
            <div className={classes.language-title ${lang === 'ru' ? classes.activated : ''}}>{lang}</div>
        </label>
    );
};

export default SwitchButton;
