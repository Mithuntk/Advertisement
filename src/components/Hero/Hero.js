import React from 'react'
import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import pause_icon from '../../Assets/pause_icon.png'
import play_icon from '../../Assets/play_icon.png'
function Hero({heroData,setHerodata,setHerocount,heroCount,setPlaystatus,playStatus}) {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt='arrow'></img>
        </div>
        <div className='hero-dot-play'>
            <ul className="here-dots">
                <li className={heroCount===0? "hero-dot orange":"hero-dot"}></li>
                <li className={heroCount===1? "hero-dot orange":"hero-dot"}></li>
                <li className={heroCount===2? "hero-dot orange":"hero-dot"}></li>
            </ul>
        </div>
    </div>
  )
}

export default Hero