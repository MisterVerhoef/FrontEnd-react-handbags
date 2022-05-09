import React from 'react';

function Button({buttonDisabled, logDescription, textInput, }){

    return (
    <button disabled={buttonDisabled} onClick={() => console.log(logDescription)}>{textInput}</button>
    );
}

export default Button;