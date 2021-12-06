import React from 'react';
import Bouton from "../components/Bouton";
import SwitchViewButton from "../components/SwitchViewButton";

const divStyle = {
    color: 'blue',
    marginRight: '10px',
};

function Receiver(props) {
    return (
        <div className="container">
            Receiver
            <SwitchViewButton name={"Click me!"}
                              link={"/"}
                              style={divStyle}
            />

            <SwitchViewButton name={"Home"} link={"/Home"}/>
        </div>
    );
}

export default Receiver;
