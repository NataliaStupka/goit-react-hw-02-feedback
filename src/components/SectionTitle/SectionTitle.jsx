
import React from 'react';


// const SectionTitle = ({ title }) => <><h2>{title}</h2> </>;


function SectionTitle({ title, children }) {
    return <div>
        <h2>{ title }</h2>
        {children}   
    </div>
   
}

export default SectionTitle; 