import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../views/Home'
import Sender from '../views/Sender'
import Receiver from '../views/Receiver'

function Router(props) {
    return (
        <div>
            <BrowserRouter>
                <div className="py-4">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/sender" component={Sender} />
                        <Route exact path="/receiver" component={Receiver} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;
