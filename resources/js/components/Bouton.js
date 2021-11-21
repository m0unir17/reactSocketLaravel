import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Bouton (props) {
    return (
        <button className={'btn btn-primary'} onClick={triggerEvent}>{props.name}</button>
    );
}

Echo.channel('channel').listen('app/Events/Hello',(e)=>{
    console.log('rehi jat ')
});

function triggerEvent(){

    axios.get('http://127.0.0.1:8000/test').then(() => {
        console.log('axios')
    })
    console.log('triggered');

}
export default Bouton;

if (document.getElementById('bouton')) {
    ReactDOM.render(<Bouton />, document.getElementById('bouton'));
}
