import React from 'react';
const Hello = (props) =>{
    return(
        <h1>Hello, {props.name}</h1>
    )
}

const Props = ()=>{
    return(
        <>
            <Hello name="Chris"/>
            <Hello name="P."/>
            <Hello name="Bacon"/>
        </>
    );
}
export default Props;