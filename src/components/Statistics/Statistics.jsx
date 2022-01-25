import React, { Component } from 'react';
import './Statistics.css'


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div className='Statistics'>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad} </li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage} %</li>
            </ul>
        </div>
    );
};


export default Statistics;