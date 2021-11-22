import React from 'react';
import ReactDOM from 'react-dom';
import Bouton from './Bouton.js';

const Example = () => {

    return (
        <div className="container" style={{marginTop: "10px"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            <div className="card-text">I'm an example component!</div>
                            <input id={'dataSent'} value={''} />

                            <Bouton name={'Send Event'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
