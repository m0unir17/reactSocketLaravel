import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



function Bouton (props) {

    const [data , setData] = useState('');

    useEffect(()=>{
       setData(props.data);
    });

    function triggerEvent (){
        let dataPost = {
            data : data
        }

        axios.get('http://127.0.0.1:8000/test').then(() => {
            console.log('axios')
        })
        console.log('triggered');

    }

    return (
        <button className={'btn btn-primary'} onClick={triggerEvent}>{props.name}</button>
    );
}

Echo.channel('channel').listen('app/Events/Hello',(e)=>{
    console.log('rehi jat ')
});


export default Bouton;

if (document.getElementById('bouton')) {
    ReactDOM.render(<Bouton />, document.getElementById('bouton'));
}
