import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function SwitchViewButton(props) {

    return (
        <a className={'btn btn-primary'} style={props.style} href={props.link}>{props.name}</a>
    );

}

export default SwitchViewButton;
