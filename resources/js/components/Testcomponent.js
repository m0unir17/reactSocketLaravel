import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';


function Testcomponent (props){

    const [phrase, setPhrase] = useState('');

    useEffect(()=>{
        console.log('hawchtaho');

        Echo.channel('channel')
            .listen('Hello',(e)=>{
                console.log(e.hello);
            });

    },[])


    return (
        <div className="row">
            <div className="card col-12">
                <div className="card-header">
                    Hello from Test Component !
                </div>
                <div className="card-body">
                    <p>this is the phrase : {phrase}</p>

                </div>
                <div className="card-footer">
                    This is the footer
                </div>
            </div>
        </div>
    );

}


export default Testcomponent;

if (document.getElementById('testCompon')) {
    const testcom = ReactDOM.render(<Testcomponent name = {'hey there'}/>, document.getElementById('testCompon'));
}


