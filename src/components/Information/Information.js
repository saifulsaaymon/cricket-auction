import React from 'react';

const Information = (props) => {
    const info = props.information;
    console.log(info)
    
    return (
        <div>
            <p>Added : {info.length} </p>
        </div>
    );
};

export default Information;