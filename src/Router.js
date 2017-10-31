import React, {Component} from 'react';
import {Row} from 'reactstrap';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Issues from './components/Issues';
import NotFound from './components/NotFound';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Row noGutters={true}>
                    <Sidebar/>
                    <Switch>
                        <Route path="/issues" component={Issues}></Route>
                        <Route path="/projects" component={Projects}></Route>
                        <Route exact path="/" component={Dashboard}></Route>
                        <Route path="*" component={NotFound}></Route>
                    </Switch>
                </Row>
            </BrowserRouter>
        );
    }
}

export default Router;