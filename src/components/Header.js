import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        const page = this.props.page;
        return (
            <header className="app-header">
                <h1 className="title text-left">{page}</h1>
            </header>
        )
    }
}

export default Header