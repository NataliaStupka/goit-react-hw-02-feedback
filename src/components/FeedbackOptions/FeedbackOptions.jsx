import React from 'react';
import PropTypes from "prop-types";
import './FeedbackOptions.css';

//передаем массив ключей {options}-это {Object.keys(this.state)} с App и функцию
const FeedbackOptions = ({options, onLeaveFeedback}) => (
   
    <div className='Feedback__container-buttons'>
       {options.map(key => (
              <button
                key={key}
                type="button"
                onClick={()=> onLeaveFeedback(key)}
           >
               {key}
           </button>
            ))};

    </div>  
    
    );

export default FeedbackOptions;


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};