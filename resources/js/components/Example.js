import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import Bouton from './Bouton.js';

const Example = () => {
    const [phrase, setPhrase] = useState("")

    return (
        <div className="container" style={{marginTop: "10px"}}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">
                            <div className="form-group">

                                <div className="card-text">I'm an example component!</div>
                                <input type={'text'}
                                       onChange={(text) => setPhrase(text.target.value)}
                                       value={phrase}
                                       className="form-control"
                                       placeholder="Search..."
                                       id={'dataSent'}
                                />

                                <Bouton
                                    phrase={phrase}
                                    name={'Send Eventt'}
                                />
                            </div>
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
