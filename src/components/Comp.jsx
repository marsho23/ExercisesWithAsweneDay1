import React from 'react';
const Comp = ({heading,content,number}) => {
    return (
        <>
            <h1>heading: {heading}</h1>
            <p>content: {content}</p>
            <p>number: {number}</p>
        </>
    );
}
export default Comp;