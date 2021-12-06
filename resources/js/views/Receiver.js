import React from 'react';
import Bouton from "../components/Bouton";
import SwitchViewButton from "../components/SwitchViewButton";
import Testcomponent from "../components/Testcomponent";

const divStyle = {
    color: 'blue',
    marginRight: '10px',
};

function Receiver(props) {
    return (
        <div className="container">
            Receiver
            <Testcomponent name={'Receiver of the event'}/>
        </div>
    );
}

export default Receiver;
