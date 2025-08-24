import React, { useState, useEffect } from 'react';
import './BirthdayCard.css';

const BirthdayCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showBear, setShowBear] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowHearts(true), 500);
    const timer2 = setTimeout(() => setShowBear(true), 1000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="birthday-container">
      {/* Floating Hearts Background */}
      {showHearts && (
        <div className="hearts-container">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`heart heart-${i + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              💖
            </div>
          ))}
        </div>
      )}

      {/* Main Card */}
      <div 
        className={`birthday-card ${isOpen ? 'open' : ''}`}
        onClick={handleCardClick}
      >
        {/* Card Front */}
        <div className="card-front">
          <div className="gift-box">
            <div className="box-top"></div>
            <div className="box-body"></div>
            <div className="ribbon-horizontal"></div>
            <div className="ribbon-vertical"></div>
            <div className="bow">
              <div className="bow-left"></div>
              <div className="bow-right"></div>
              <div className="bow-center"></div>
            </div>
          </div>
          <p className="tap-text">Tap to open! 🎁</p>
        </div>

        {/* Card Inside */}
        <div className="card-inside">
          <div className="birthday-content">
            <h1 className="birthday-title">Happy Birthday my love!</h1>
            
            {/* Bear Character */}
            {showBear && (
              <div className="bear-container">
                <div className="bear">
                  <div className="bear-head">
                    <div className="bear-ear bear-ear-left"></div>
                    <div className="bear-ear bear-ear-right"></div>
                    <div className="bear-face">
                      <div className="bear-eye bear-eye-left"></div>
                      <div className="bear-eye bear-eye-right"></div>
                      <div className="bear-nose"></div>
                      <div className="bear-mouth"></div>
                    </div>
                  </div>
                  <div className="bear-body"></div>
                </div>
                
                {/* Birthday Cake */}
                <div className="cake">
                  <div className="cake-layer cake-bottom"></div>
                  <div className="cake-layer cake-middle"></div>
                  <div className="cake-layer cake-top"></div>
                  <div className="candle">
                    <div className="candle-stick"></div>
                    <div className="flame"></div>
                  </div>
                  <div className="cake-decoration">
                    <div className="cherry"></div>
                  </div>
                </div>
              </div>
            )}
            
            <p className="birthday-message">
              Happiest birthday to my sweetest cutest pie:

I love you sooo much, every year that I spent with you in school was the best time of my life...from the day we sat together on that bench discussing about our favourite animes to today, I will cherish each of our moments forever. You are the most beautiful person I know inside and out,I will always be there for you and i will always love youuuuu. 🎉
            </p>
            
            <div className="sparkles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`sparkle sparkle-${i + 1}`}>✨</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
