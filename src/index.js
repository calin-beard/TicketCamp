import React from 'react';
import ReactDOM from 'react-dom';
import Theme from './Theme';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Theme/>, document.getElementById('root'));
registerServiceWorker();