import React from 'react'
import { Carousel } from 'antd';
import { Alert } from 'antd';
import TextLoop from 'react-text-loop';

const contentStyle = {
    height: '250px',
    color: '#fff',
    lineHeight: '180px',
    textAlign: 'center',
    background: '#364d79',
    fontSize:'42px',
    backgroundImage: 'url(/img/hero1.jpg)'
  };

  const porercontentStyle = {
    fontSize:'15px',
  };

function Apphero() {
    return (
      <div className="advances">
        <div className="HeroBlock">
            <Carousel autoplay effect="fade">
    <div>
      <h3 style={contentStyle}>Welcome to Voice Controlled News App</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Give Voice Command to get all the Latest News</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Enjoy Reading News with The Latest Features </h3>
    </div>
    <div>
      <h3 style={contentStyle}>Get The Best Experience with Alan AI ! </h3>
    </div>
  </Carousel>,
            
        </div>

        <div className="WarningBlock">
          <Alert
    banner
    message={
      <TextLoop mask>
        <div style={porercontentStyle}> Stay Safe Out There During This Covid-19 Pandemic</div>
        <div style={porercontentStyle}> Always Wear Mask</div>
        <div style={porercontentStyle}> Practice respiratory hygiene</div>
        <div style={porercontentStyle}> Wishing good health and safety in these difficult times.</div>
      </TextLoop>
    }
  />,
        </div>
  </div>
    )
}

export default Apphero;
