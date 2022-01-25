import React, { Component } from 'react';
import './FeedbackOptions.css';

const FeedbackOptions = ({onIncrementGood, onIncrementNeutral, onIncrementBad}) => (
   
            <div className='Feedback__container-buttons'>
                <button onClick={onIncrementGood} className='Feedback__button' >Good</button>
                <button onClick={onIncrementNeutral} className='Feedback__button'>Neutral</button>
                <button onClick={onIncrementBad} className='Feedback__button'>Bad</button>
            </div>     
   
    );

export default FeedbackOptions;