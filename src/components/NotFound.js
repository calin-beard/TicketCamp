import React, {Component} from "react";
import Header from "./Header";

class NotFound extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>404</h1>
                <h1>Page not found</h1>
            </div>
        );
    }
}

export default NotFound;
