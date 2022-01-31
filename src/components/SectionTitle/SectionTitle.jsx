
import React from 'react';
import PropTypes from "prop-types";


// const SectionTitle = ({ title }) => <><h2>{title}</h2> </>;


function SectionTitle({ title, children }) {
    return <div>
        <h2>{ title }</h2>
        {children}   
    </div>
   
}

export default SectionTitle; 


SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};