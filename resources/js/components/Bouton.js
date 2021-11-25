import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



function Bouton (props) {

    const [data , setData] = useState('');

    useEffect(()=>{
       setData(props.data);
    });

    function triggerEvent (){
        console.log(props.data)
        axios.post('http://127.0.0.1:8000/test', {
            phrase: props.phrase
        }).then(() => {
            console.log('axios')
        })
        console.log('triggered');
    }
    return (
        <button className={'btn btn-primary'} onClick={triggerEvent}>{props.name}</button>
    );
}


export default Bouton;

if (document.getElementById('bouton')) {
    ReactDOM.render(<Bouton />, document.getElementById('bouton'));
}
