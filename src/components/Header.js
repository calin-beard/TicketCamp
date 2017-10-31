import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        // const title = this.props.title;
        return (
            <header className="app-header">
                <h1 className="title text-left">Title</h1>
            </header>
        )
    }
}

export default Header