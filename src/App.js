import React, { Suspense, lazy, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import DotsBar from "./components/DotsBar";
import FlipCard from "./components/FlipCard";
import SliderBody from "./components/SliderBody";
import SwitchButton from "./components/SwitchButton";
import dataSlider from "./dataSlider";
import manPict from "./sources/imgs/man.png";

const LazyFooter = lazy(() => import('./components/Footer'))

function App() {
    const { t, i18n } = useTranslation()
    const [language, setLanguage] = useState('en')
    const [slideIndex, setSlideIndex] = useState(0)
    const [fadeState, setFadeState] = useState('fade-in')
    const [autoMoveSlideTime, setAutoMoveSlideTime] = useState(0)
    const [time, setTime] = useState(0)
    const fadeDuration = 300

    const changeLanguage = (language) => {
        if (language === 'en') {
            i18n.changeLanguage('ru')
            setLanguage('ru')
        } else {
            i18n.changeLanguage('en')
            setLanguage('en')
        }
    }

    useEffect(() => {
        window.onbeforeunload = () => {
            setLanguage('eng')
        }
    }, [])
    
    const moveSlide = (move) => {
        const autoMoveSlideTimer = setTimeout(() => {
            setSlideIndex(slideIndex + move)
            setFadeState('fade-in')
        }, fadeDuration)
        clearTimeout(autoMoveSlideTime)
        setFadeState('fade-out')
        setTime(autoMoveSlideTimer)
    }

    return (
        <div className="App">
            <div className="body__container">
                <div className="cover__container">
                    <div className="el-header">
                        <div className="header-intro__container">
                            <div className="header-intro">
                                <div className="header-title">portfolio</div>
                                <div className="header-body">frontend developer</div>
                            </div>
                        </div>
                        <div className="language-btn__container">
                            <SwitchButton 
                                changeLangFunc={changeLanguage}
                                lang={language}
                            />
                        </div>
                    </div>
                    <div className="cover-columns">
                        <div className="cover-left-column">
                            <div className="cover-text-container">
                                {i18n.t('cover-text-body')}
                            </div>
                            <div className="cover-links-bar">
                                <div className="phone-card">
                                    <FlipCard
                                        frontText={t('phone-link')}
                                        backText={'+7-(985)-480-60-03'}
                                        flexDirection="vertical"
                                    />
                                </div>
                                <a 
                                    target='_blank' 
                                    rel='noopener noreferrer' 
                                    href="https://www.gismeteo.ru/weather-sankt-peterburg-4079/"  
                                    className="link insta-link"
                                >
                                    <img src={require('./sources/icons/insta.svg')['default']} alt="" />
                                </a>
                                <a 
                                    target='_blank' 
                                    rel='noopener noreferrer' 
                                    href="https://t.me/geraskin_aleksey" 
                                    className="link tele-link"
                                >
                                    <img src={require('./sources/icons/tele.svg')['default']} alt="" />
                                </a>
                                <a 
                                    target='_blank' 
                                    rel='noopener noreferrer' 
                                    href="https://vk.com/id215098017"  
                                    className="link vk-link"
                                >
                                    <img src={require('./sources/icons/vk.svg')['default']} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="cover-right-column">
                            <div className="photo-container">
                                <img src={manPict} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="tags-container">
                <div className="tags-body__container">
                    <div className="tags-text">
                        {t('tags-text').split('/n').map(line => <p>{line}</p>)}
                    </div>
                    <div className="tags-body">
                        <div className="tag-bar tag-bar-1">
                            <div className="tag-elem tag-elem-websites">{t('tag-elem-websites')}</div>
                            <div className="tag-elem tag-elem-css">{t('tag-elem-css')}</div>
                            <div className="tag-elem tag-elem-itmo">{t('tag-elem-itmo')}</div>
                            <div className="tag-elem tag-elem-react">{t('tag-elem-react')}</div>
                            <div className="tag-elem tag-elem-animation">{t('tag-elem-animation')}</div>
                        </div>
                        <div className="tag-bar tag-bar-2">
                            <div className="tag-elem tag-elem-js">{t('tag-elem-js')}</div>
                            <div className="tag-elem tag-elem-html">{t('tag-elem-html')}</div>
                            <div className="tag-elem tag-elem-apps">{t('tag-elem-apps')}</div>
                            <div className="tag-elem tag-elem-stores">{t('tag-elem-stores')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cards__container">
                <div className="cards-body__container">
                    <div className="cards-row">
                        <div className="slider">
                            <div
                                onClick={() => moveSlide(-1)}
                                style={slideIndex > 0 
                                    ? {visibility: 'visible'}
                                    : {visibility: 'hidden'}}
                                className="slider-btn left-btn">
                                <img src={require('./sources/slider/leftbtn.svg')['default']} alt="left btn" />
                            </div>
                            <SliderBody
                                index={slideIndex}
                                fadeDuration={fadeDuration}
                                fadeState={fadeState}
                            />
                            <DotsBar
                                array={dataSlider}
                                func={moveSlide}
                                currentSlide={slideIndex}
                            />
                            <div
                                onClick={() => moveSlide(1)}
                                style={slideIndex < dataSlider.length - 1 
                                    ? {visibility: 'visible'}
                                    : {visibility: 'hidden'}} 
                                className="slider-btn right-btn">
                                <img src={require('./sources/slider/rightbtn.svg')['default']} alt="right btn" />
                            </div>
                        </div>
                        <div className="about-card">
                            <FlipCard
                                frontText={t('cards-about-card-front').split('/n').map(line => <p>{line}</p>)}
                                backText={t('cards-about-card-back').split('/n').map(line => <p>{line}</p>)}
                                src = {require('./sources/icons/right-top-arrow.svg')['default']}
                                flexDirection="vertical"
                            />
                        </div>
                    </div>
                    <div className="cards-row cards-second-row">
                        <div className="hours-card">
                            <FlipCard
                                frontText={t('cards-hours-card-front')} 
                                backText={t('cards-hours-card-back')}
                                src={require('./sources/icons/right-bot-arrow.svg')['default']}
                                flexDirection="vertical"
                            />
                        </div>
                        <div className="github-card">
                            <a
                                target='_blank'
                                rel='noopener noreferrer' 
                                href="https://github.com/geraskinalekseysergeevich?tab=repositories"  
                                className="link github-link"
                            >
                                Github
                            </a>
                            <img 
                                src={require('./sources/icons/right-top-arrow.svg')['default']}
                                className='github-card-img'
                                alt="arrow"
                            />
                        </div>
                        <div className="software-card">
                            <FlipCard 
                                frontText={t('cards-software-card-front')} 
                                backText={t('cards-software-card-back').split('/n').map(line => <p>{line}</p>)}
                                src={require('./sources/icons/right-bot-arrow.svg')['default']}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <LazyFooter footerInitialsText={t('footer-initials')}/>
            </Suspense>
        </div>
    );
}

export default App
