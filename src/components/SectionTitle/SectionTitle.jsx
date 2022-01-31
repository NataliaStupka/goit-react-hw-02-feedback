import React from 'react';
import { Title } from './SectionTitle.styled';
import PropTypes from 'prop-types';

// const SectionTitle = ({ title }) => <><h2>{title}</h2> </>;

function SectionTitle({ title, children }) {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
}

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
