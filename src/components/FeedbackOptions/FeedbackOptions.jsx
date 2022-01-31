import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton, FeedbackContainer } from './FeedbackOptions.styled';

//передаем массив ключей {options}-это {Object.keys(this.state)} с App и функцию
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <FeedbackContainer>
    {options.map(key => (
      <FeedbackButton
        key={key}
        type="button"
        onClick={() => onLeaveFeedback(key)}
      >
        {key}
      </FeedbackButton>
    ))}
  </FeedbackContainer>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
