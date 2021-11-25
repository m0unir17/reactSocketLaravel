import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';


function Testcomponent (props){

    const [phrase, setPhrase] = useState(["baba"]);
    let  phrase2 = '';

    function changePhrase (ph)
    {
        setPhrase(()=>[...phrase , ph]);
    }

    useEffect(() => {
        changePhrase(phrase2)
        console.log(phrase)
    }, [phrase2])

    useEffect(()=>{
        console.log('hawchtaho');

        Echo.channel('channel')
            .listen('Hello',changePhrase);

    },[])


    return (
        <div className="row">
            <div className="card col-12">
                <div className="card-header">
                    Hello from Test Component !
                </div>
                <div className="card-body">
                    {/*{phrase.forEach(element => <p>this is the message : {element}</p>)}*/}

                    {phrase}
                    {/*<phraseComponents phrase={phrase} />*/}
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
    ReactDOM.render(<Testcomponent name = {'hey there'}/>, document.getElementById('testCompon'));
}


