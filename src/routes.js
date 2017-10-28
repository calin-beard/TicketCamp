'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App';
import ProjectsPage from './components/RecentProjects';
import IssuesPage from './components/RecentIssues';
// import NotFoundPage from './components/Main';

const routes = (
    <Route>
        <IndexRoute component={App}/>
        <Route path="projects/:id"  component={ProjectsPage}/>
        <Route path="issues/:id"    component={IssuesPage}/>
        {/*<Route path="*"             component={NotFoundPage}/>*/}
    </Route>
);

export default routes;