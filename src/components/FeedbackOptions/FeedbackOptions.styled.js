import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  margin-left: 30px;
`;

export const FeedbackButton = styled.button`
  margin-right: 10px;
  padding: 5px 20px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid #00000070;

  &:hover,
  &:focus {
    box-shadow: 0 0 5px #00000070;

    &:active {
    box-shadow: inset 1px 1px 2px white,
      inset -1px -1px 2px #00000070;
  }
`;
