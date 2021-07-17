import React from 'react';

const Crickter = (props) => {
    const {image, name, salary, country} = props.cricket;  
    const imgStyle = {height: "100px"}
    const crickterStyle = {border: '2px solid gray', margin: '10px', padding: '10px'}
    const handleBuyMe = props.handleBuyMe;

    return (
        <div style={crickterStyle}>
            <img style={imgStyle} src={image} alt=""/>
            <h2>Name : {name}</h2> 
            <p>Price : {salary}</p>
            <p>Country : {country}</p>
            <button onClick={() => handleBuyMe(props.handleBuyMe)}>Buy Me</button>
        </div>
    );
};

export default Crickter;