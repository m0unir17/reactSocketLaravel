import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



function Bouton (props) {

    const [data , setData] = useState('');

    useEffect(()=>{
        console.log('mounted')
       setData(props.data);
    });


    function triggerEvent (){
        console.log('data '+props.data)
        axios.post('http://127.0.0.1:8000/api/test', {
                phrase: props.phrase
        }).then(() => {
            console.log('axios')
        }).catch(() => {
            console.log('error')
        })
        console.log('triggered');
    }

    return (
        <button className={'btn btn-primary'} onClick={triggerEvent}>{props.name}</button>
    );
}


export default Bouton;

